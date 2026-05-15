import * as React from 'react';
import { useState, useCallback, useContext, useEffect, useRef } from 'react';
import './styles/DialogOperation.scss';
import { GlobalContext } from './context.tsx';
import { Plus, X, Template } from './icons';
import currencies from './data/currencies.json';
import templates from './data/templates.json';
import { IDataItem, generateId } from '../types/common';

interface IDialogOperationState {
  open: boolean;
  isDebit: boolean;
  amount: number | string;
  account: string;
  text: string;
  date: string;
  currency: string;
  category: string;
  tags: string;
}

const initialState: IDialogOperationState = {
  open: false,
  isDebit: false,
  amount: '',
  account: '',
  text: '',
  date: new Date().toISOString().split('T')[0],
  currency: 'USD',
  category: '',
  tags: '',
};

const DialogOperation: React.FC = () => {
  const context = useContext(GlobalContext);
  const [state, setState] = useState<IDialogOperationState>(initialState);
  const [templateOpen, setTemplateOpen] = useState(false);
  const templateRef = useRef<HTMLDivElement>(null);
  const lastDialogCount = useRef(0);

  useEffect(() => {
    const editing = context?.state.editingTransaction;
    if (editing) {
      setState({
        open: true,
        isDebit: editing.isDebit ?? false,
        amount: editing.amount,
        account: editing.account,
        text: editing.text,
        date: editing.date,
        currency: editing.currency || 'USD',
        category: editing.category || '',
        tags: editing.tags?.join(', ') || '',
      });
    }
  }, [context?.state.editingTransaction]);

  useEffect(() => {
    const count = context?.state.openAddDialogCount || 0;
    if (count > lastDialogCount.current) {
      const tpl = context?.state.templateItem;
      if (tpl) {
        setState({
          open: true,
          isDebit: tpl.isDebit ?? false,
          amount: tpl.amount || '',
          account: tpl.account || '',
          text: tpl.text || '',
          date: tpl.date || new Date().toISOString().split('T')[0],
          currency: tpl.currency || 'USD',
          category: tpl.category || '',
          tags: tpl.tags?.join(', ') || '',
        });
        context?.updateState({ templateItem: undefined } as any);
      } else {
        setState((prev) => ({ ...prev, open: true }));
      }
    }
    lastDialogCount.current = count;
  }, [context?.state.openAddDialogCount]);

  useEffect(() => {
    if (!state.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [state.open]);

  // Close template dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (templateRef.current && !templateRef.current.contains(e.target as Node)) {
        setTemplateOpen(false);
      }
    };
    if (templateOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [templateOpen]);

  const handleClickOpen = useCallback(() => {
    setState((prev) => ({ ...prev, open: true }));
  }, []);

  const handleClose = useCallback(() => {
    setState(initialState);
    setTemplateOpen(false);
    if (context?.state.editingTransaction) {
      context.updateState({ editingTransaction: undefined });
    }
  }, [context]);

  const applyTemplate = (tpl: any) => {
    setState((prev) => ({
      ...prev,
      isDebit: tpl.isDebit ?? prev.isDebit,
      account: tpl.account || prev.account,
      text: tpl.text || prev.text,
      currency: tpl.currency || prev.currency,
      category: tpl.category || prev.category,
      tags: tpl.tags?.join(', ') || prev.tags,
    }));
    setTemplateOpen(false);
  };

  if (!context) return null;

  const { labels, onAdd, onEdit, onBeforeAdd, onBeforeEdit } = context;

  const handleSave = async () => {
    const amount = Number(state.amount);
    const account = state.account.trim();
    const text = state.text.trim();
    const date = state.date;
    const category = state.category.trim() || undefined;
    const tags = state.tags.trim() ? state.tags.split(',').map(t => t.trim()).filter(Boolean) : undefined;

    if (!amount || amount <= 0 || !account || !text || !date || isNaN(new Date(date).getTime())) return;

    const value: IDataItem[] = [...(context.state.data || [])];
    const editing = context.state.editingTransaction;

    if (editing) {
      const index = value.findIndex(item => item.id === editing.id);
      if (index !== -1) {
        const newItem = { ...value[index], amount, account, isDebit: state.isDebit, text, date, currency: state.currency, category, tags };
        if (onBeforeEdit && !(await onBeforeEdit(value[index], newItem))) return;
        onEdit?.(value[index], newItem);
        value[index] = newItem;
      }
      context.updateState({ data: value, editingTransaction: undefined });
    } else {
      const newItem: IDataItem = { id: generateId(), amount, account, isDebit: state.isDebit, text, date, currency: state.currency, category, tags };
      if (onBeforeAdd && !(await onBeforeAdd(newItem))) return;
      onAdd?.(newItem);
      value.push(newItem);
      context.updateState({ data: value });
    }
    handleClose();
  };

  const isEditing = !!context.state.editingTransaction;

  return (
    <>
      <button onClick={handleClickOpen} className="btn-add-accounting" title={labels.addTransaction}>
        <Plus size={20} />
      </button>

      {state.open && (
        <div className="dialog-overlay" onClick={handleClose}>
          <div className="dialog-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <div>
                <h3 className="dialog-title">{isEditing ? labels.editTransaction : labels.addTransaction}</h3>
                <p className="dialog-description">{isEditing ? labels.modifyDescription : labels.addDescription}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {/* Template selector inside dialog */}
                {!isEditing && (
                  <div ref={templateRef} style={{ position: 'relative' }}>
                    <button
                      onClick={() => setTemplateOpen(!templateOpen)}
                      title={labels.templates}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '6px 10px',
                        fontSize: 12,
                        fontWeight: 500,
                        border: '1px solid hsl(220, 13%, 91%)',
                        borderRadius: 6,
                        background: 'white',
                        cursor: 'pointer',
                        color: 'hsl(220, 9%, 46%)',
                        transition: 'all 150ms',
                      }}
                    >
                      <Template size={12} /> {labels.templates}
                    </button>
                    {templateOpen && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        zIndex: 30,
                        marginTop: 4,
                        background: 'white',
                        border: '1px solid hsl(220, 13%, 91%)',
                        borderRadius: 6,
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                        minWidth: 180,
                        padding: '4px 0',
                      }}>
                        {(templates as any[]).map((tpl, i) => (
                          <button
                            key={i}
                            onClick={() => applyTemplate(tpl)}
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
                )}
                <button onClick={handleClose} className="dialog-close">
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="dialog-body">
              <div className="dialog-grid-2">
                <div className="control">
                  <label htmlFor="rad-amount">{labels.amount}</label>
                  <input
                    id="rad-amount"
                    placeholder="0.00"
                    type="number"
                    step="0.01"
                    min="0"
                    value={state.amount || ''}
                    onChange={(e) => setState((prev) => ({ ...prev, amount: e.target.value }))}
                  />
                </div>
                <div className="control">
                  <label htmlFor="rad-currency">{labels.currency}</label>
                  <select
                    id="rad-currency"
                    value={state.currency}
                    onChange={(e) => setState((prev) => ({ ...prev, currency: e.target.value }))}
                  >
                    {(currencies as [string, string][]).map((c) => (
                      <option key={c[1]} value={c[1]}>{c[0]}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="dialog-grid-2">
                <div className="control">
                  <label htmlFor="rad-account">{labels.account}</label>
                  <input
                    autoFocus
                    id="rad-account"
                    placeholder="e.g., Cash, Bank, Rent"
                    value={state.account}
                    onChange={(e) => setState((prev) => ({ ...prev, account: e.target.value }))}
                  />
                </div>
                <div className="control">
                  <label htmlFor="rad-date">{labels.date}</label>
                  <input
                    id="rad-date"
                    type="date"
                    value={state.date}
                    onChange={(e) => setState((prev) => ({ ...prev, date: e.target.value }))}
                  />
                </div>
              </div>

              <div className="control-check">
                <input
                  id="rad-isDebit"
                  type="checkbox"
                  checked={state.isDebit}
                  onChange={(e) => setState((prev) => ({ ...prev, isDebit: e.target.checked }))}
                />
                <label htmlFor="rad-isDebit">{labels.debitTransaction}</label>
              </div>

              <div className="control">
                <label htmlFor="rad-description">{labels.description}</label>
                <textarea
                  id="rad-description"
                  rows={2}
                  placeholder="Describe the transaction..."
                  value={state.text}
                  onChange={(e) => setState((prev) => ({ ...prev, text: e.target.value }))}
                />
              </div>

              <div className="dialog-grid-2">
                <div className="control">
                  <label htmlFor="rad-category">{labels.category}</label>
                  <input
                    id="rad-category"
                    placeholder="e.g., Operating, Investing"
                    value={state.category}
                    onChange={(e) => setState((prev) => ({ ...prev, category: e.target.value }))}
                  />
                </div>
                <div className="control">
                  <label htmlFor="rad-tags">{labels.tags}</label>
                  <input
                    id="rad-tags"
                    placeholder="e.g., rent, monthly (comma-separated)"
                    value={state.tags}
                    onChange={(e) => setState((prev) => ({ ...prev, tags: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            <div className="dialog-footer">
              <button onClick={handleClose} className="btn-cancel">{labels.cancel}</button>
              <button onClick={handleSave} className="btn-confirm">
                {isEditing ? labels.update : labels.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogOperation;
