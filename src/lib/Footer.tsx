import React from 'react';
import { IDataItem, IStyleConfig } from '../types/common';
import Func from './helpers/func.ts';

interface IFooterProps {
  account?: IStyleConfig;
  columnHeader?: boolean;
  footer?: IStyleConfig;
  amount?: IStyleConfig;
  index?: number;
  data?: IDataItem[];
  showEdit?: boolean;
}

const borderBottom = 'var(--rad-border) solid var(--rad-border-color)';

const Footer: React.FC<IFooterProps> = (props) => {
  const totalDebit = (props.data || []).filter(d => d.isDebit).reduce((sum, d) => sum + d.amount, 0);
  const totalCredit = (props.data || []).filter(d => !d.isDebit).reduce((sum, d) => sum + d.amount, 0);
  const currency = props.data?.[0]?.currency || 'USD';
  const local = props.data?.[0]?.local;

  const { width: _aw, ...accountStyle } = props.account || {};
  const { width: _mw, ...amountStyle } = props.amount || {};

  return (
    <div className="insertion">
      <div
        className="debit flex-col"
        style={{
          ...accountStyle,
          borderBottom: props.columnHeader ? borderBottom : '',
        }}
      >
        <div className="transaction-title">&nbsp;</div>
      </div>
      <div
        className="credit flex-col"
        style={{
          ...accountStyle,
          borderBottom: props.columnHeader ? borderBottom : '',
        }}
      >
        <div className="transaction-title">&nbsp;</div>
      </div>
      <div
        className="flex-col description border-bottom"
        style={{ padding: 0 }}
      >
        <div
          className="transaction-title"
          style={{
            ...props.footer,
            fontSize: 11,
            marginTop: 7,
            textTransform: 'uppercase',
          }}
        >
          transactions entries
        </div>
      </div>
      <div
        className="amount-debit flex-col"
        style={{
          ...amountStyle,
          borderBottom: props.columnHeader ? borderBottom : '',
          fontWeight: 600,
          fontSize: 12,
        }}
      >
        <div className="transaction-title">
          {totalDebit > 0 ? Func.currency(totalDebit, currency, local) : '\u00A0'}
        </div>
      </div>
      <div
        className="amount-credit flex-col"
        style={{
          ...amountStyle,
          borderBottom: props.columnHeader ? borderBottom : '',
          fontWeight: 600,
          fontSize: 12,
        }}
      >
        <div className="transaction-title">
          {totalCredit > 0 ? Func.currency(totalCredit, currency, local) : '\u00A0'}
        </div>
      </div>
      {props.showEdit !== false && (
        <div style={{ width: 32, flexShrink: 0 }} />
      )}
    </div>
  );
};

export default Footer;
