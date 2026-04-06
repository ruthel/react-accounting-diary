import React, { useContext } from 'react';
import { IStyleConfig, SortField } from '../types/common';
import { GlobalContext } from './context';

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

const SortIndicator: React.FC<{ field: SortField }> = ({ field }) => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { state } = context;
  if (state.sortField !== field) return <span style={{ opacity: 0.3, marginLeft: 4, fontSize: 10 }}>↕</span>;
  return <span style={{ marginLeft: 4, fontSize: 10 }}>{state.sortOrder === 'asc' ? '↑' : '↓'}</span>;
};

const Header: React.FC<IHeaderProps> = (props) => {
  const context = useContext(GlobalContext);
  if (!context) return null;

  const { labels, state, updateState } = context;
  let { date, index, columnHeader, columnHeaderColor, columnHeaderBgColor } = props;
  const isFirst = index === 0 && columnHeader;
  const formattedDate = `${date.split('-')[2]}/${date.split('-')[1]}/${date.split('-')[0]}`;

  const { width: _aw, ...accountStyle } = props.account || {};
  const { width: _mw, ...amountStyle } = props.amount || {};

  const handleSort = (field: SortField) => {
    const newOrder = state.sortField === field && state.sortOrder === 'asc' ? 'desc' : 'asc';
    updateState({ sortField: field, sortOrder: newOrder } as any);
  };

  const sortableStyle: React.CSSProperties = isFirst ? { cursor: 'pointer', userSelect: 'none' } : {};

  return (
    <div className="insertion" role="row">
      <div
        className="debit flex-col"
        style={{
          ...accountStyle,
          borderTop: isFirst ? borderStyle : '',
          borderBottom: isFirst ? borderStyle : '',
          background: isFirst ? columnHeaderBgColor : '',
        }}
        role="columnheader"
        onClick={isFirst ? () => handleSort('account') : undefined}
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor, ...sortableStyle }}>
            {labels.debit}<SortIndicator field="account" />
          </div>
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
        role="columnheader"
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor }}>{labels.credit}</div>
        ) : (
          <div className="date">&nbsp;</div>
        )}
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 150,
          borderTop: isFirst ? borderStyle : '',
          borderBottom: isFirst ? borderStyle : '',
          background: isFirst ? columnHeaderBgColor : '',
        }}
        role="columnheader"
        onClick={isFirst ? () => handleSort('date') : undefined}
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor, ...sortableStyle }}>
            {formattedDate}<SortIndicator field="date" />
          </div>
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
        role="columnheader"
        onClick={isFirst ? () => handleSort('amount') : undefined}
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor, ...sortableStyle }}>
            {labels.debit}<SortIndicator field="amount" />
          </div>
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
        role="columnheader"
      >
        {isFirst ? (
          <div className="date" style={{ color: columnHeaderColor }}>{labels.credit}</div>
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
