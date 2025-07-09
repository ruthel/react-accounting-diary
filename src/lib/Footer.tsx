import React from 'react';
import { IStyleConfig } from '../types/common';

interface IFooterProps {
  account?: IStyleConfig;
  columnHeader?: boolean;
  footer?: IStyleConfig;
  amount?: IStyleConfig;
  index?: number;
}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div className="insertion">
      <div
        className="debit"
        style={{
          ...props.account,
          borderBottom: props.columnHeader ? 'var(--border) solid' : '',
        }}
      >
        <div className="transaction-title">&nbsp;</div>
      </div>
      <div
        className="credit flex-col"
        style={{
          ...props.account,
          borderBottom: props.columnHeader ? 'var(--border) solid' : '',
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
          ...props.amount,
          borderBottom: props.columnHeader ? 'var(--border) solid' : '',
        }}
      >
        <div className="transaction-title">&nbsp;</div>
      </div>
      <div
        className="amount-credit flex-col"
        style={{
          ...props.amount,
          borderBottom: props.columnHeader ? 'var(--border) solid' : '',
        }}
      >
        <div className="transaction-title">&nbsp;</div>
      </div>
    </div>
  );
};

export default Footer;
