import React, { useContext } from 'react';
import { Edit2 } from 'react-feather';
import Func from './helpers/func.ts';
import { IDataItem, IStyleConfig } from '../types/common';
import { GlobalContext } from './context';

interface IContentProps {
  value: IDataItem;
  length?: number; // Not used in Content.tsx, but passed from AccountingDiary.tsx
  account?: IStyleConfig;
  amount?: IStyleConfig;
  showEdit?: boolean;
}

const Content: React.FC<IContentProps> = (props) => {
  const { value } = props;
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { updateState } = context;

  const handleEdit = () => {
    updateState({ editingTransaction: value });
  };
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
      {props.showEdit !== false && (
        <div className="edit-action" style={{ width: 32, textAlign: 'center' }}>
          <button
            onClick={handleEdit}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              opacity: 0.6
            }}
            title="Edit transaction"
          >
            <Edit2 size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Content;
