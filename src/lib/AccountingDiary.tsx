import React, { useState, useContext, useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import './styles/styles.scss';
import './styles/print.scss';
import DialogOperation from "./DialogOperation.tsx";
import { exportNodeAsImage, nodeToDataUrl } from './helpers/nativeExport';
import { groupBy, orderBy } from './helpers/utils';
import { Undo, Redo, Download, Upload, FileImage, FileText, Database, Trash2, Template } from './icons';
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import { GlobalContext } from "./context.tsx";
import Content from "./Content.tsx";
import SearchFilter from "./SearchFilter.tsx";
import FilterDropdown from "./FilterDropdown.tsx";
import DropZoneOverlay, { useDropZone } from "./DropZone.tsx";
import LedgerView from "./LedgerView.tsx";
import sampleData from './data/sample.json';
import templates from './data/templates.json';
import Func from "./helpers/func.ts";
import { importFromCSV, exportToCSV, exportToExcel, exportToJSON, importFromJSON } from './helpers/exportUtils';
import { IDataItem, IStyleConfig, generateId, AccountingDiaryHandle } from '../types/common';

interface IAccountingDiaryProps {
  height?: number;
  width?: number;
  data?: IDataItem[];
  title?: string;
  titleColor?: string;
  titleBg?: string;
  titleBorder?: boolean;
  titleAllCaps?: boolean;
  titleCorner?: number;
  columnHeader?: boolean;
  columnHeaderColor?: string;
  columnHeaderBgColor?: string;
  saveColor?: string;
  saveIcon?: React.ReactNode;
  account?: IStyleConfig;
  amount?: IStyleConfig;
  footer?: IStyleConfig;
  showExport?: boolean;
  showUndo?: boolean;
  showSample?: boolean;
  showClear?: boolean;
  showAdd?: boolean;
  showEdit?: boolean;
  showSearch?: boolean;
  showGrandTotal?: boolean;
  showLedgerToggle?: boolean;
  compactButtons?: boolean;
}

const getArray = (data: IDataItem[]) => {
  if (!data || data.length === 0) return [];
  const grp = groupBy(data, 'date');
  return Object.entries(grp).map(([date, content]) => ({ date, content }));
};

const AccountingDiary = forwardRef<AccountingDiaryHandle, IAccountingDiaryProps>((props, ref) => {
  const [toFunc, setToFunc] = useState<'toPng' | 'toJpeg' | 'toPdf'>('toPng');
  const [templateMenuOpen, setTemplateMenuOpen] = useState(false);
  const templateRef = useRef<HTMLDivElement>(null);
  const context = useContext(GlobalContext);
  const { isDragging, setIsDragging, onDragOver, onDragLeave } = useDropZone();

  if (!context) return null;

  const { state, labels, pageSize, undo, redo, updateState } = context;

  // If user has interacted (or data was provided), use state.data as-is (even if empty)
  // Otherwise fallback to sample data for demo purposes
  const hasData = state.history.length > 1 || (state.data && state.data.length > 0);
  const rawData = hasData ? (state.data || []) : sampleData as IDataItem[];

  // Filter
  const filteredData = useMemo(() => {
    let filtered = rawData;
    if (state.searchTerm) {
      const term = state.searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.text.toLowerCase().includes(term) ||
        item.account.toLowerCase().includes(term) ||
        (item.category && item.category.toLowerCase().includes(term)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(term)))
      );
    }
    if (state.dateFilter?.start) {
      filtered = filtered.filter(item => item.date >= state.dateFilter!.start!);
    }
    if (state.dateFilter?.end) {
      filtered = filtered.filter(item => item.date <= state.dateFilter!.end!);
    }
    if (state.filterAccount) {
      filtered = filtered.filter(item => item.account === state.filterAccount);
    }
    if (state.filterCategory) {
      filtered = filtered.filter(item => item.category === state.filterCategory);
    }
    return filtered;
  }, [rawData, state.searchTerm, state.dateFilter, state.filterAccount, state.filterCategory]);

  // Sort
  const sortedData = useMemo(() => {
    if (!state.sortField) return filteredData;
    return [...filteredData].sort((a, b) => {
      let aVal: any, bVal: any;
      if (state.sortField === 'date') { aVal = a.date; bVal = b.date; }
      else if (state.sortField === 'account') { aVal = a.account; bVal = b.account; }
      else { aVal = a.amount; bVal = b.amount; }
      const cmp = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
      return state.sortOrder === 'desc' ? -cmp : cmp;
    });
  }, [filteredData, state.sortField, state.sortOrder]);

  // Pagination
  const totalPages = pageSize ? Math.max(1, Math.ceil(sortedData.length / pageSize)) : 1;
  const currentPage = Math.min(state.currentPage, totalPages);
  const displayData = pageSize
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  // Grand totals (on all filtered data, not just current page)
  const grandTotalDebit = filteredData.filter(d => d.isDebit).reduce((s, d) => s + d.amount, 0);
  const grandTotalCredit = filteredData.filter(d => !d.isDebit).reduce((s, d) => s + d.amount, 0);
  const isBalanced = Math.abs(grandTotalDebit - grandTotalCredit) < 0.01;
  const mainCurrency = filteredData[0]?.currency || 'USD';
  const mainLocal = filteredData[0]?.local;

  const csvInputRef = useRef<HTMLInputElement>(null);
  const jsonInputRef = useRef<HTMLInputElement>(null);

  // Close template menu on outside click
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (templateRef.current && !templateRef.current.contains(e.target as Node)) {
        setTemplateMenuOpen(false);
      }
    };
    if (templateMenuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [templateMenuOpen]);

  const getAccountSummary = () => {
    const summary: Record<string, { debit: number; credit: number; balance: number }> = {};
    for (const item of rawData) {
      if (!summary[item.account]) summary[item.account] = { debit: 0, credit: 0, balance: 0 };
      if (item.isDebit) summary[item.account].debit += item.amount;
      else summary[item.account].credit += item.amount;
      summary[item.account].balance = summary[item.account].debit - summary[item.account].credit;
    }
    return summary;
  };

  const doExport = (format: 'toPng' | 'toJpeg' | 'toPdf') => {
    const node = document.getElementById('diary');
    if (!node) return Promise.resolve();
    if (format === 'toPdf') {
      // Generate PNG first, then embed in PDF via pdfmake
      return nodeToDataUrl(node, 'png', 2)
        .then((dataUrl) => Func.extractDoc(dataUrl))
        .catch((error) => console.error('Export failed:', error));
    }
    return exportNodeAsImage(node, format === 'toJpeg' ? 'jpeg' : 'png')
      .catch((error) => console.error('Export failed:', error));
  };

  // Imperative handle for ref API
  useImperativeHandle(ref, () => ({
    exportToPNG: () => doExport('toPng').then(() => {}),
    exportToJPEG: () => doExport('toJpeg').then(() => {}),
    exportToPDF: () => doExport('toPdf').then(() => {}),
    exportToCSV: () => exportToCSV(rawData),
    exportToExcel: () => exportToExcel(rawData),
    exportToJSON: () => exportToJSON(rawData),
    importJSON: (json: string) => {
      try {
        const parsed = JSON.parse(json) as IDataItem[];
        const withIds = parsed.map(item => ({ ...item, id: item.id || generateId() }));
        updateState({ data: [...(state.data || []), ...withIds] });
      } catch { /* ignore */ }
    },
    addTransaction: (item) => {
      const newItem: IDataItem = { ...item, id: generateId() };
      updateState({ data: [...(state.data || []), newItem] });
    },
    undo,
    redo,
    getData: () => rawData,
    getTotals: () => ({
      debit: grandTotalDebit,
      credit: grandTotalCredit,
      balance: grandTotalDebit - grandTotalCredit,
      isBalanced,
    }),
    getAccountSummary,
  }));

  const handleCSVImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const imported = await importFromCSV(file);
      const withIds = imported.map(item => ({ ...item, id: item.id || generateId() }));
      updateState({ data: [...(state.data || []), ...withIds] });
    } catch { /* ignore invalid files */ }
    if (csvInputRef.current) csvInputRef.current.value = '';
  };

  const handleJSONImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const imported = await importFromJSON(file);
      const withIds = imported.map(item => ({ ...item, id: item.id || generateId() }));
      updateState({ data: [...(state.data || []), ...withIds] });
    } catch { /* ignore invalid files */ }
    if (jsonInputRef.current) jsonInputRef.current.value = '';
  };

  const handleExport = () => doExport(toFunc);

  const goToPage = (page: number) => {
    updateState({ currentPage: Math.max(1, Math.min(page, totalPages)) } as any);
  };

  const toggleView = () => {
    updateState({ viewMode: state.viewMode === 'diary' ? 'ledger' : 'diary' } as any);
  };

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      style={{
        border: '1px solid hsl(220, 13%, 91%)',
        minHeight: '650px',
        height: props.height,
        width: props.width,
        position: 'relative',
        padding: 24,
        borderRadius: 12,
        boxSizing: 'border-box',
        background: 'white',
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
        fontFamily: 'var(--rad-font)',
      }}
    >
      {isDragging && <DropZoneOverlay onDone={() => setIsDragging(false)} />}

      {/* Toolbar Row 1: Export format + Actions + Export button + Add */}
      <div style={{ display: 'flex', marginBottom: 12, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        {/* Left: format selector + undo/redo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {props.showExport !== false && (
            <div className="export">
              <button id={toFunc === 'toJpeg' ? 'active' : ''} onClick={() => setToFunc('toJpeg')} style={{ padding: '8px 12px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <FileImage size={12} /> JPEG
              </button>
              <button id={toFunc === 'toPng' ? 'active' : ''} onClick={() => setToFunc('toPng')} style={{ padding: '8px 12px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <FileImage size={12} /> PNG
              </button>
              <button id={toFunc === 'toPdf' ? 'active' : ''} onClick={() => setToFunc('toPdf')} style={{ padding: '8px 12px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <FileText size={12} /> PDF
              </button>
            </div>
          )}
          {props.showUndo !== false && (
            <div className="global-action" style={{ display: 'flex', gap: 4 }}>
              <button className="sample doer" disabled={!(state.history.length > 1 && state.doIndex > 0)} onClick={() => undo()} title="Undo" style={{ padding: '8px' }}>
                <Undo strokeWidth={2.5} size={14} />
              </button>
              <button className="sample doer" onClick={() => redo()} disabled={!(state.doIndex + 1 < state.history.length)} title="Redo" style={{ padding: '8px' }}>
                <Redo strokeWidth={2.5} size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Right: export + add */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {props.showExport !== false && (
            <button className="btn-export" style={{ backgroundColor: props.saveColor, padding: '8px 16px', fontSize: '13px' }} title={labels.export} onClick={handleExport} aria-label="Export accounting diary">
              <Download size={16} aria-hidden="true" />
              <span>{labels.export}</span>
            </button>
          )}
          {props.showAdd !== false && <DialogOperation />}
        </div>
      </div>

      {/* Toolbar Row 2: Data actions (sample, clear, import, view, templates) */}
      <div className="global-action" style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        {props.showSample !== false && (
          <button className="sample" onClick={() => updateState({ data: sampleData as IDataItem[] })} title={labels.sample} style={{ padding: '6px 10px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Database size={11} /> {labels.sample}
          </button>
        )}
        {props.showClear !== false && (
          <button className="reset" onClick={() => updateState({ data: [] })} title={labels.clear} style={{ padding: '6px 10px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Trash2 size={11} /> {labels.clear}
          </button>
        )}

        <div style={{ width: 1, height: 20, background: 'hsl(220, 13%, 91%)' }} />

        <button className="sample" onClick={() => csvInputRef.current?.click()} title="Import CSV" style={{ padding: '6px 10px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <Upload size={11} /> CSV
        </button>
        <button className="sample" onClick={() => jsonInputRef.current?.click()} title={labels.importJSON} style={{ padding: '6px 10px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <Upload size={11} /> JSON
        </button>
        <input ref={csvInputRef} type="file" accept=".csv" style={{ display: 'none' }} onChange={handleCSVImport} />
        <input ref={jsonInputRef} type="file" accept=".json" style={{ display: 'none' }} onChange={handleJSONImport} />

        <div style={{ width: 1, height: 20, background: 'hsl(220, 13%, 91%)' }} />

        {props.showLedgerToggle !== false && (
          <button className="sample" onClick={toggleView} title={state.viewMode === 'diary' ? labels.ledgerView : labels.diaryView} style={{ padding: '6px 10px', fontSize: '12px' }}>
            {state.viewMode === 'diary' ? labels.ledgerView : labels.diaryView}
          </button>
        )}

        {/* Templates dropdown */}
        <div ref={templateRef} style={{ position: 'relative', display: 'inline-block' }}>
          <button className="sample" onClick={() => setTemplateMenuOpen(!templateMenuOpen)} title={labels.templates} style={{ padding: '6px 10px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Template size={11} /> {labels.templates}
          </button>
          {templateMenuOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              zIndex: 20,
              marginTop: 4,
              background: 'white',
              border: '1px solid hsl(220, 13%, 91%)',
              borderRadius: 6,
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
              minWidth: 200,
              padding: '4px 0',
            }}>
              {(templates as any[]).map((tpl, i) => (
                <button
                  key={i}
                  onClick={() => {
                    updateState({ templateItem: tpl, openAddDialogCount: (state.openAddDialogCount || 0) + 1 } as any);
                    setTemplateMenuOpen(false);
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px 14px',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: 500,
                    textAlign: 'left',
                    color: 'hsl(224, 71%, 4%)',
                    transition: 'background 150ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'hsl(220, 14%, 96%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                >
                  {tpl.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Toolbar Row 3: Search + Filter dropdowns */}
      {props.showSearch !== false && (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <SearchFilter />
          <FilterDropdown />
        </div>
      )}

      {/* Diary content */}
      <div
        id="diary"
        style={{ padding: 8 }}
        role="table"
        aria-label="Accounting diary entries"
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: 16,
            fontWeight: 600,
            padding: 12,
            fontSize: 18,
            fontFamily: 'var(--rad-font)',
            color: props.titleColor || '#000',
            border: `${props.titleBorder ? '2px' : '0'} solid rgba(0,0,0,.1)`,
            background: props.titleBg,
            textTransform: props.titleAllCaps ? 'uppercase' : 'none',
            borderRadius: props.titleCorner || 8,
          }}
          role="heading"
          aria-level={1}
        >
          Accounting diary for {props.title || 'Test Model'}
        </div>

        {displayData.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <p className="empty-state-text">{labels.noData}</p>
            {props.showAdd !== false && (
              <button
                className="empty-state-cta"
                onClick={() => updateState({ openAddDialogCount: (state.openAddDialogCount || 0) + 1 } as any)}
                aria-label={labels.addTransaction}
              >
                {labels.addTransaction}
              </button>
            )}
          </div>
        ) : state.viewMode === 'ledger' ? (
          <LedgerView data={displayData} />
        ) : (
          getArray(displayData).map((elt, i, array) => (
            <React.Fragment key={elt.date}>
              <Header
                date={elt.date}
                columnHeader={props.columnHeader}
                columnHeaderColor={props.columnHeaderColor}
                columnHeaderBgColor={props.columnHeaderBgColor}
                index={i}
                account={props.account}
                amount={props.amount}
                showEdit={props.showEdit}
              />
              {orderBy(elt.content, 'isDebit', 'asc').map((row, j) => (
                <Content
                  key={row.id || j}
                  value={row}
                  length={array.length}
                  account={props.account}
                  amount={props.amount}
                  showEdit={props.showEdit}
                />
              ))}
              <Footer
                account={props.account}
                columnHeader={props.columnHeader}
                index={i}
                footer={props.footer}
                amount={props.amount}
                data={elt.content}
                showEdit={props.showEdit}
              />
            </React.Fragment>
          ))
        )}

        {/* Grand Total + Balance */}
        {props.showGrandTotal !== false && filteredData.length > 0 && (
          <div className="grand-total">
            <div className="grand-total-row">
              <span className="grand-total-label">{labels.grandTotal}</span>
              <span className="grand-total-amounts">
                <span className="grand-total-debit">
                  {labels.debit}: {Func.currency(grandTotalDebit, mainCurrency, mainLocal)}
                </span>
                <span className="grand-total-credit">
                  {labels.credit}: {Func.currency(grandTotalCredit, mainCurrency, mainLocal)}
                </span>
              </span>
            </div>
            <div className="grand-total-row">
              <span className="grand-total-label">{labels.balance}</span>
              <span className={`balance-badge ${isBalanced ? 'balanced' : 'unbalanced'}`}>
                {isBalanced ? `✓ ${labels.balanced}` : `⚠ ${labels.unbalanced} (${Func.currency(Math.abs(grandTotalDebit - grandTotalCredit), mainCurrency, mainLocal)})`}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {pageSize && totalPages > 1 && (
        <div className="pagination">
          <button disabled={currentPage <= 1} onClick={() => goToPage(currentPage - 1)}>←</button>
          <span>{labels.page} {currentPage} {labels.of} {totalPages}</span>
          <button disabled={currentPage >= totalPages} onClick={() => goToPage(currentPage + 1)}>→</button>
        </div>
      )}
    </div>
  );
});

AccountingDiary.displayName = 'AccountingDiary';

export default AccountingDiary;
