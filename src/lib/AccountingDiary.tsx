import React, { useState, useContext } from 'react';
import './styles/styles.scss';
import DialogOperation from "./DialogOperation.tsx";
import _ from 'lodash';
import * as htmlToImage from 'html-to-image';
import { CornerLeftDown, CornerRightDown, Download } from 'react-feather';
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import {GlobalContext, GlobalProvider} from "./context.tsx";
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
}

const getArray = (data: IDataItem[]) => {
  let myArray: { date: string; content: IDataItem[] }[] = [];
  let grp = _.groupBy(data, 'date');
  let keys = Object.keys(grp);
  keys.forEach((date) => {
    myArray.push({ date, content: grp[date] });
  });
  return myArray;
};

const AccountingDiary: React.FC<IAccountingDiaryProps> = (props) => {
  const [toFunc, setToFunc] = useState<'toPng' | 'toJpeg' | 'toPdf'>('toPng');

  const context = useContext(GlobalContext);

  if (!context) return null; // Handle undefined context

  const { state, undo, redo, updateState } = context;

  return (
    <GlobalProvider>
      <div
        style={{
          border: '1px solid whitesmoke',
          minHeight: '650px',
          height: props.height,
          width: props.width,
          position: 'relative',
          padding: 24,
          borderRadius: 4,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <div className="export">
            <button
              id={toFunc === 'toJpeg' ? 'active' : ''}
              onClick={() => setToFunc('toJpeg')}
            >
              JPEG
            </button>
            <button
              id={toFunc === 'toPng' ? 'active' : ''}
              onClick={() => setToFunc('toPng')}
            >
              PNG
            </button>
            <button
              id={toFunc === 'toPdf' ? 'active' : ''}
              onClick={() => setToFunc('toPdf')}
            >
              PDF
            </button>
          </div>
          <div className="global-action">
            <button
              className="sample doer"
              disabled={!(
                state.history.length > 1 &&
                state.doIndex > 1
              )}
              onClick={() => undo()}
            >
              <CornerLeftDown strokeWidth={4} size={12} />
            </button>
            <button
              className="sample doer"
              onClick={() => redo()}
              disabled={!(
                state.doIndex + 1 <
                state.history.length
              )}
            >
              <CornerRightDown strokeWidth={4} size={12} />
            </button>
            <button
              className="sample"
              onClick={() => updateState({ data: data as IDataItem[] })}
            >
              Data Sample
            </button>
            <button
              className="reset"
              onClick={() => updateState({ data: [] })}
            >
              Clear the diary
            </button>
          </div>
        </div>
        <div id="diary" style={{ padding: 8 }}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: 8,
              fontWeight: 500,
              padding: 8,
              fontSize: 18,
              color: props.titleColor || '#000',
              border: `${props.titleBorder ? '1px' : '0'} solid rgba(0,0,0,.1)`,
              background: props.titleBg,
              textTransform: props.titleAllCaps ? 'uppercase' : 'none',
              borderRadius: props.titleCorner,
            }}
          >
            Accounting diary for {props.title || 'Test Model'}
          </div>
          {getArray(
            (state.data || []).length > 0
              ? state.data || []
              : (props.data || [])
          ).map((elt, i, array) => (
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
              {_.orderBy(elt.content, 'isDebit', 'asc').map((row, i) => (
                <Content
                  key={i}
                  value={row}
                  length={array.length}
                  account={props.account}
                  amount={props.amount}
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
        <div
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'end',
            display: 'flex',
            flexDirection: 'column',
            right: 24,
            bottom: 16,
          }}
        >
          {/*size='small'*/}
          <DialogOperation />
          <button
            className="btn-save-accounting"
            style={{
              marginTop: 16,
              backgroundColor: props.saveColor,
            }}
            onClick={() => {
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
            }}
          >
            {props.saveIcon}
          </button>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default AccountingDiary;