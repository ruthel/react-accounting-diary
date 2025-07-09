import React from 'react';
import Func from './helpers/func.ts';
import { IDataItem, IStyleConfig } from '../types/common';

interface IContentProps {
  value: IDataItem;
  length?: number; // Not used in Content.tsx, but passed from AccountingDiary.tsx
  account?: IStyleConfig;
  amount?: IStyleConfig;
}

const Content: React.FC<IContentProps> = (props) => {
  const { value } = props;
  return (
    <div className="insertion">
      <div className="debit" style={props.account}>
        <div>{value.isDebit ? value.account : ''}</div>
      </div>
      <div className="credit flex-col" style={props.account}>
        <div className="transaction-content">
          <div>{!value.isDebit ? value.account : ''}</div>
        </div>
      </div>
      <div className="flex-col description">
        <div
          className="transaction-content"
          style={{ marginLeft: value.isDebit ? 0 : 72 }}
        >
          {value.text}
        </div>
      </div>
      <div className="amount-debit flex-col" style={props.amount}>
        <div>
          {value.isDebit
            ? Func.currency(value.amount, value.currency, value.local)
            : ''}
        </div>
      </div>
      <div className="amount-credit flex-col" style={props.amount}>
        <div>
          {!value.isDebit
            ? Func.currency(value.amount, value.currency, value.local)
            : ''}
        </div>
      </div>
    </div>
  );
};

export default Content;
