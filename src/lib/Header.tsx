import React from 'react';
import { IStyleConfig } from '../types/common';

interface IHeaderProps {
  date: string;
  index: number;
  columnHeader?: boolean;
  columnHeaderColor?: string;
  columnHeaderBgColor?: string;
  account?: IStyleConfig;
  amount?: IStyleConfig;
  showEdit?: boolean;
}

const borderStyle = 'var(--rad-border) solid var(--rad-border-color)';

const Header: React.FC<IHeaderProps> = (props) => {
  let { date, index, columnHeader, columnHeaderColor, columnHeaderBgColor } = props;
  const isFirst = index === 0 && columnHeader;
  const formattedDate = `${date.split('-')[2]}/${date.split('-')[1]}/${date.split('-')[0]}`;

  const { width: _aw, ...accountStyle } = props.account || {};
  const { width: _mw, ...amountStyle } = props.amount || {};

  return (
    <div className="insertion">
      <div
        className="debit flex-col"
        style={{
          ...accountStyle,
          borderTop: isFirst ? borderStyle : '',
          borderBottom: isFirst ? borderStyle : '',
          background: isFirst ? columnHeaderBgColor : '',
        }}
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor }}>Debit</div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
      <div
        className="credit flex-col"
        style={{
          ...accountStyle,
          borderTop: isFirst ? borderStyle : '',
          borderBottom: isFirst ? borderStyle : '',
          background: isFirst ? columnHeaderBgColor : '',
        }}
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor }}>Credit</div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
      <div
        className=""
        style={{
          flex: 1,
          minWidth: 150,
          borderTop: isFirst ? borderStyle : '',
          borderBottom: isFirst ? borderStyle : '',
          background: isFirst ? columnHeaderBgColor : '',
        }}
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor }}>{formattedDate}</div>
        ) : (
          <div
            className={`flex-col description ${index === 0 ? 'border-top' : ''}`}
            style={{
              borderTopLeftRadius: index === 0 && !columnHeader ? 6 : 0,
              borderTopRightRadius: index === 0 && !columnHeader ? 6 : 0,
              borderBottom: 'none',
            }}
          >
            <div className="date">{formattedDate}</div>
          </div>
        )}
      </div>
      <div
        className="amount-debit flex-col"
        style={{
          ...amountStyle,
          borderTop: isFirst ? borderStyle : '',
          borderBottom: isFirst ? borderStyle : '',
          background: isFirst ? columnHeaderBgColor : '',
        }}
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor }}>Debit</div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
      <div
        className="amount-credit flex-col"
        style={{
          ...amountStyle,
          borderTop: isFirst ? borderStyle : '',
          borderBottom: isFirst ? borderStyle : '',
          background: isFirst ? columnHeaderBgColor : '',
        }}
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor }}>Credit</div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
      {props.showEdit !== false && (
        <div style={{ width: 32, flexShrink: 0 }} />
      )}
    </div>
  );
};

export default Header;
