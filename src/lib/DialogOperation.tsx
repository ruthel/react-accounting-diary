import * as React from 'react';
import { useState, useCallback, useContext, useEffect } from 'react';
import './styles/DialogOperation.scss';
import { GlobalContext } from './context.tsx';
import { Plus, X } from './icons';
import currencies from './data/currencies.json';
import { IDataItem, generateId } from '../types/common';

interface IDialogOperationState {
  open: boolean;
  isDebit: boolean;
  amount: number | string;
  account: string;
  text: string;
  date: string;
  currency: string;
}

const initialState: IDialogOperationState = {
  open: false,
  isDebit: false,
  amount: '',
  account: '',
  text: '',
  date: new Date().toISOString().split('T')[0],
  currency: 'USD',
};

const DialogOperation: React.FC = () => {
  const context = useContext(GlobalContext);
  const [state, setState] = useState<IDialogOperationState>(initialState);

  useEffect(() => {
    const editing = context?.state.editingTransaction;
    if (editing) {
      setState({
        open: true,
        isDebit: editing.isDebit ?? false,
        amount: editing.amount,
        account: editing.account,
        text: editing.text,
        date: editing.date,
        currency: editing.currency || 'USD',
      });
    }
  }, [context?.state.editingTransaction]);

  useEffect(() => {
    if (!state.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [state.open]);

  const handleClickOpen = useCallback(() => {
    setState((prev) => ({ ...prev, open: true }));
  }, []);

  const handleClose = useCallback(() => {
    setState(initialState);
    if (context?.state.editingTransaction) {
      context.updateState({ editingTransaction: undefined });
    }
  }, [context]);

  if (!context) return null;

  const handleSave = () => {
    const amount = Number(state.amount);
    const account = state.account.trim();
    const text = state.text.trim();
    const date = state.date;

    if (!amount || amount <= 0 || !account || !text || !date || isNaN(new Date(date).getTime())) return;

    const value: IDataItem[] = [...(context.state.data || [])];
    const editing = context.state.editingTransaction;

    if (editing) {
      const index = value.findIndex(item => item.id === editing.id);
      if (index !== -1) {
        value[index] = { ...value[index], amount, account, isDebit: state.isDebit, text, date, currency: state.currency };
      }
      context.updateState({ data: value, editingTransaction: undefined });
    } else {
      value.push({ id: generateId(), amount, account, isDebit: state.isDebit, text, date, currency: state.currency });
      context.updateState({ data: value });
    }
    handleClose();
  };

  const isEditing = !!context.state.editingTransaction;

  return (
    <>
      <button onClick={handleClickOpen} className="btn-add-accounting" title="Add transaction">
        <Plus size={20} />
      </button>

      {state.open && (
        <div className="dialog-overlay" onClick={handleClose}>
          <div className="dialog-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <div>
                <h3 className="dialog-title">{isEditing ? 'Edit Transaction' : 'Add Transaction'}</h3>
                <p className="dialog-description">{isEditing ? 'Modify the transaction details.' : 'Add a new entry to your accounting diary.'}</p>
              </div>
              <button onClick={handleClose} className="dialog-close">
                <X size={16} />
              </button>
            </div>

            <div className="dialog-body">
              <div className="dialog-grid-2">
                <div className="control">
                  <label htmlFor="rad-amount">Amount</label>
                  <input
                    id="rad-amount"
                    placeholder="0.00"
                    type="number"
                    step="0.01"
                    min="0"
                    value={state.amount || ''}
                    onChange={(e) => setState((prev) => ({ ...prev, amount: e.target.value }))}
                  />
                </div>
                <div className="control">
                  <label htmlFor="rad-currency">Currency</label>
                  <select
                    id="rad-currency"
                    value={state.currency}
                    onChange={(e) => setState((prev) => ({ ...prev, currency: e.target.value }))}
                  >
                    {(currencies as [string, string][]).map((c) => (
                      <option key={c[1]} value={c[1]}>{c[0]}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="dialog-grid-2">
                <div className="control">
                  <label htmlFor="rad-account">Account</label>
                  <input
                    autoFocus
                    id="rad-account"
                    placeholder="e.g., Cash, Bank, Rent"
                    value={state.account}
                    onChange={(e) => setState((prev) => ({ ...prev, account: e.target.value }))}
                  />
                </div>
                <div className="control">
                  <label htmlFor="rad-date">Date</label>
                  <input
                    id="rad-date"
                    type="date"
                    value={state.date}
                    onChange={(e) => setState((prev) => ({ ...prev, date: e.target.value }))}
                  />
                </div>
              </div>

              <div className="control-check">
                <input
                  id="rad-isDebit"
                  type="checkbox"
                  checked={state.isDebit}
                  onChange={(e) => setState((prev) => ({ ...prev, isDebit: e.target.checked }))}
                />
                <label htmlFor="rad-isDebit">Debit transaction</label>
              </div>

              <div className="control">
                <label htmlFor="rad-description">Description</label>
                <textarea
                  id="rad-description"
                  rows={2}
                  placeholder="Describe the transaction..."
                  value={state.text}
                  onChange={(e) => setState((prev) => ({ ...prev, text: e.target.value }))}
                />
              </div>
            </div>

            <div className="dialog-footer">
              <button onClick={handleClose} className="btn-cancel">Cancel</button>
              <button onClick={handleSave} className="btn-confirm">
                {isEditing ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogOperation;
