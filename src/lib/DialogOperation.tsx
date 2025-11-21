import * as React from 'react';
import { useState, useCallback, useContext } from 'react';
import './styles/DialogOperation.scss';
import './styles/styles.scss';
import { GlobalContext } from './context.tsx';
import { Plus, X } from 'react-feather';
import currencies from './data/currencies.json';
import { IDataItem } from '../types/common';

interface IDialogOperationProps {}

interface IDialogOperationState {
  open: boolean;
  visibility: 'show' | 'hide';
  isDebit: boolean;
  amount: number | string;
  account: string;
  text: string;
  date: string;
  currency: string;
}

const DialogOperation: React.FC<IDialogOperationProps> = (props) => {
  const context = useContext(GlobalContext);
  
  const [state, setState] = useState<IDialogOperationState>({
    open: false,
    visibility: 'hide',
    isDebit: false,
    amount: '',
    account: '',
    text: '',
    date: new Date().toISOString().split('T')[0],
    currency: 'USD',
  });

  // Auto-open dialog when editing transaction
  React.useEffect(() => {
    if (context?.state.editingTransaction && !state.open) {
      handleClickOpen();
    }
  }, [context?.state.editingTransaction]);

  const handleClickOpen = useCallback(() => {
    const editingTransaction = context?.state.editingTransaction;
    if (editingTransaction) {
      setState({
        open: true,
        visibility: 'show',
        isDebit: editingTransaction.isDebit,
        amount: editingTransaction.amount,
        account: editingTransaction.account,
        text: editingTransaction.text,
        date: editingTransaction.date,
        currency: editingTransaction.currency || 'USD',
      });
    } else {
      setState((prevState) => ({ ...prevState, visibility: 'show', open: true }));
    }
  }, [context?.state.editingTransaction]);

  const handleClose = useCallback(() => {
    setState((prevState) => ({ ...prevState, visibility: 'hide' }));
    setTimeout(() => {
      setState({
        open: false,
        visibility: 'hide',
        isDebit: false,
        amount: '',
        account: '',
        text: '',
        date: new Date().toISOString().split('T')[0],
        currency: 'USD',
      });
    }, 300);
  }, []);

  if (!context) return null;

  const handleSave = useCallback(() => {
    if (state.amount && state.account && state.text && state.date) {
      const value: IDataItem[] = [...(context.state.data || [])];
      const editingTransaction = context.state.editingTransaction;
      
      if (editingTransaction) {
        // Edit existing transaction
        const index = value.findIndex(item => 
          item.date === editingTransaction.date && 
          item.account === editingTransaction.account && 
          item.text === editingTransaction.text &&
          item.amount === editingTransaction.amount
        );
        if (index !== -1) {
          value[index] = {
            amount: Number(state.amount),
            account: state.account,
            isDebit: state.isDebit,
            text: state.text,
            date: state.date,
            currency: state.currency,
          };
        }
        context.updateState({ data: value, editingTransaction: undefined });
      } else {
        // Add new transaction
        value.push({
          amount: Number(state.amount),
          account: state.account,
          isDebit: state.isDebit,
          text: state.text,
          date: state.date,
          currency: state.currency,
        });
        context.updateState({ data: value });
      }
      handleClose();
    }
  }, [state, context, handleClose]);

  return (
    <div>
      {!state.open && (
        <button onClick={handleClickOpen} className="btn-add-accounting" title="Add transaction">
          <Plus size={24} />
        </button>
      )}
      {state.open && (
        <div className={`dialog-container ${state.visibility}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 className="dialog-title">{context?.state.editingTransaction ? 'Edit Transaction' : 'Add Transaction'}</h3>
            <button
              onClick={handleClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                color: '#999',
              }}
            >
              <X size={20} />
            </button>
          </div>
          <div>{context?.state.editingTransaction ? 'Modify the transaction details' : 'Insert a new transaction to your accounting diary'}</div>
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 120px',
                columnGap: 12,
              }}
            >
              <div className="control">
                <label htmlFor="amount">Amount</label>
                <input
                  id="amount"
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  value={state.amount || ''}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, amount: e.target.value }))
                  }
                />
              </div>
              <div className="control">
                <label htmlFor="currency">Currency</label>
                <select
                  id="currency"
                  value={state.currency || 'USD'}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, currency: e.target.value }))
                  }
                >
                  {(currencies as [string, string][]).map((c) => (
                    <option key={c[1]} value={c[1]}>
                      {c[0]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="control">
              <label htmlFor="account">Account</label>
              <input
                autoFocus
                id="account"
                placeholder="e.g., Cash, Bank, Rent"
                value={state.account || ''}
                onChange={(e) =>
                  setState((prevState) => ({ ...prevState, account: e.target.value }))
                }
              />
            </div>
            <div className="control">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                value={state.date}
                onChange={(e) =>
                  setState((prevState) => ({ ...prevState, date: e.target.value }))
                }
              />
            </div>
            <div className="control-check">
              <input
                id="isDebit"
                type="checkbox"
                checked={state.isDebit || false}
                onChange={(e) =>
                  setState((prevState) => ({ ...prevState, isDebit: e.target.checked }))
                }
              />
              <label htmlFor="isDebit">Debit transaction</label>
            </div>
            <div className="control">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows={2}
                placeholder="Describe the transaction..."
                value={state.text || ''}
                onChange={(e) =>
                  setState((prevState) => ({ ...prevState, text: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="btn-action">
            <button onClick={handleClose} className="error">
              Cancel
            </button>
            <button onClick={handleSave} className="success">
              {context?.state.editingTransaction ? 'Update Transaction' : 'Save Transaction'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogOperation;
