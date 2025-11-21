import React, { useState, useContext } from 'react';
import './styles/styles.scss';
import DialogOperation from "./DialogOperation.tsx";
import * as htmlToImage from 'html-to-image';
import { groupBy, orderBy } from './helpers/utils';
import { CornerLeftDown, CornerRightDown, Download } from 'react-feather';
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import {GlobalContext} from "./context.tsx";
import { saveAs } from '@progress/kendo-file-saver';
import Content from "./Content.tsx";
import data from './data/sample.json';
import Func from "./helpers/func.ts";

import { IDataItem, IStyleConfig } from '../types/common';

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
  compactButtons?: boolean;
}

const getArray = (data: IDataItem[] | undefined) => {
  if (!data || data.length === 0) return [];
  const grp = groupBy(data, 'date');
  return Object.entries(grp).map(([date, content]) => ({ date, content }));
};

const AccountingDiary: React.FC<IAccountingDiaryProps> = (props) => {
  const [toFunc, setToFunc] = useState<'toPng' | 'toJpeg' | 'toPdf'>('toPng');

  const context = useContext(GlobalContext);

  if (!context) return null;

  const { state, undo, redo, updateState } = context;

  const displayData = (state.data && state.data.length > 0) ? state.data : (props.data || []);

  const handleExport = () => {
    const node = document.getElementById('diary');
    if (node) {
      htmlToImage[
        toFunc === 'toPdf'
          ? 'toPng'
          : toFunc
      ](node, {
        backgroundColor: '#fff',
        quality: 1,
        pixelRatio: 10,
      })
        .then((dataUrl) => {
          let arr = dataUrl.split(','),
            mime = arr[0].match(/:(.*?);/)?.[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
          while (n--) u8arr[n] = bstr.charCodeAt(n);
          const file = new File([u8arr], 'filename', {
            type: mime,
          });
          if (toFunc === 'toPdf')
            Func.extractDoc(dataUrl);
          else if (mime) saveAs(file, 'img.' + mime.split('/')[1]);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
    }
  };

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        minHeight: '650px',
        height: props.height,
        width: props.width,
        position: 'relative',
        padding: 24,
        borderRadius: 8,
        boxSizing: 'border-box',
        background: 'white',
      }}
    >
      <div style={{ display: 'flex', marginBottom: 16, gap: props.compactButtons ? 4 : 12, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: props.compactButtons ? 4 : 12, alignItems: 'center', flexWrap: 'wrap' }}>
          {props.showExport !== false && (
            <div className="export">
              <button
                id={toFunc === 'toJpeg' ? 'active' : ''}
                onClick={() => setToFunc('toJpeg')}
                style={{ padding: props.compactButtons ? '4px 8px' : '8px 12px', fontSize: props.compactButtons ? '12px' : '14px' }}
              >
                {props.compactButtons ? 'JPG' : 'JPEG'}
              </button>
              <button
                id={toFunc === 'toPng' ? 'active' : ''}
                onClick={() => setToFunc('toPng')}
                style={{ padding: props.compactButtons ? '4px 8px' : '8px 12px', fontSize: props.compactButtons ? '12px' : '14px' }}
              >
                PNG
              </button>
              <button
                id={toFunc === 'toPdf' ? 'active' : ''}
                onClick={() => setToFunc('toPdf')}
                style={{ padding: props.compactButtons ? '4px 8px' : '8px 12px', fontSize: props.compactButtons ? '12px' : '14px' }}
              >
                PDF
              </button>
            </div>
          )}
          <div className="global-action" style={{ display: 'flex', gap: props.compactButtons ? 2 : 8 }}>
            {props.showUndo !== false && (
              <>
                <button
                  className="sample doer"
                  disabled={!(state.history.length > 1 && state.doIndex > 0)}
                  onClick={() => undo()}
                  title="Undo"
                  style={{ padding: props.compactButtons ? '4px' : '8px' }}
                >
                  <CornerLeftDown strokeWidth={4} size={props.compactButtons ? 10 : 12} />
                </button>
                <button
                  className="sample doer"
                  onClick={() => redo()}
                  disabled={!(state.doIndex + 1 < state.history.length)}
                  title="Redo"
                  style={{ padding: props.compactButtons ? '4px' : '8px' }}
                >
                  <CornerRightDown strokeWidth={4} size={props.compactButtons ? 10 : 12} />
                </button>
              </>
            )}
            {props.showSample !== false && (
              <button
                className="sample"
                onClick={() => updateState({ data: data as IDataItem[] })}
                title="Load sample data"
                style={{ padding: props.compactButtons ? '4px 8px' : '8px 12px', fontSize: props.compactButtons ? '12px' : '14px' }}
              >
                {props.compactButtons ? 'Sample' : 'Data Sample'}
              </button>
            )}
            {props.showClear !== false && (
              <button
                className="reset"
                onClick={() => updateState({ data: [] })}
                title="Clear all transactions"
                style={{ padding: props.compactButtons ? '4px 8px' : '8px 12px', fontSize: props.compactButtons ? '12px' : '14px' }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: props.compactButtons ? 4 : 12, alignItems: 'center' }}>
          {props.showExport !== false && (
            <button
              className="btn-export"
              style={{
                backgroundColor: props.saveColor,
                padding: props.compactButtons ? '6px 12px' : '8px 16px',
                fontSize: props.compactButtons ? '12px' : '14px'
              }}
              title="Export diary"
              onClick={handleExport}
              aria-label="Export accounting diary"
              role="button"
              tabIndex={0}
            >
              <Download size={props.compactButtons ? 16 : 20} aria-hidden="true" />
              <span>{props.compactButtons ? '' : 'Export'}</span>
            </button>
          )}
          {props.showAdd !== false && <DialogOperation />}
        </div>
      </div>

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
        {getArray(displayData || []).map((elt, i, array) => (
          <React.Fragment key={elt.date}>
            <Header
              date={elt.date}
              columnHeader={props.columnHeader}
              columnHeaderColor={props.columnHeaderColor}
              columnHeaderBgColor={props.columnHeaderBgColor}
              index={i}
              account={props.account}
              amount={props.amount}
            />
            {orderBy(elt.content, 'isDebit', 'asc').map((row, i) => (
              <Content
                key={i}
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
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AccountingDiary;
