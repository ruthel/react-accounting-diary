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
}

const Header: React.FC<IHeaderProps> = (props) => {
  let { date, index, columnHeader, columnHeaderColor, columnHeaderBgColor } =
    props;
  return (
    <div className="insertion">
      <div
        className="debit"
        style={{
          ...props.account,
          borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
          borderBottom:
            index === 0 && columnHeader ? 'var(--border) solid' : '',
          background: index === 0 && columnHeader ? columnHeaderBgColor : '',
        }}
      >
        {index === 0 && columnHeader ? (
          <div className="date" style={{ color: columnHeaderColor }}>
            Debit
          </div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
      <div
        className="credit flex-col"
        style={{
          ...props.account,
          borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
          borderBottom:
            index === 0 && columnHeader ? 'var(--border) solid' : '',
          background: index === 0 && columnHeader ? columnHeaderBgColor : '',
        }}
      >
        {index === 0 && columnHeader ? (
          <div className="date" style={{ color: columnHeaderColor }}>
            Credit
          </div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
      <div
        className=""
        style={{
          flex: 1,
          borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
          borderBottom:
            index === 0 && columnHeader ? 'var(--border) solid' : '',
          background: index === 0 && columnHeader ? columnHeaderBgColor : '',
        }}
      >
        {index === 0 && columnHeader ? (
          <div className="date" style={{ color: columnHeaderColor }}>
            {date.split('-')[2]}/{date.split('-')[1]}/{date.split('-')[0]}
          </div>
        ) : (
          <div
            className={`flex-col description ${index === 0 ? 'border-top' : ' '}`}
            style={{
              borderTopLeftRadius: index === 0 && !columnHeader ? 6 : 0,
              borderTopRightRadius: index === 0 && !columnHeader ? 6 : 0,
              borderBottom: 'none',
            }}
          >
            <div className="date">
              {date.split('-')[2]}/{date.split('-')[1]}/{date.split('-')[0]}
            </div>
          </div>
        )}
      </div>
      <div
        className="amount-debit"
        style={{
          ...props.amount,
          borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
          borderBottom:
            index === 0 && columnHeader ? 'var(--border) solid' : '',
          background: index === 0 && columnHeader ? columnHeaderBgColor : '',
        }}
      >
        {index === 0 && columnHeader ? (
          <div className="date" style={{ color: columnHeaderColor }}>
            Debit
          </div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
      <div
        className="amount-credit flex-col"
        style={{
          ...props.amount,
          borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
          borderBottom:
            index === 0 && columnHeader ? 'var(--border) solid' : '',
          background: index === 0 && columnHeader ? columnHeaderBgColor : '',
        }}
      >
        {index === 0 && columnHeader ? (
          <div className="date" style={{ color: columnHeaderColor }}>
            Credit
          </div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
    </div>
  );
};

export default Header;
