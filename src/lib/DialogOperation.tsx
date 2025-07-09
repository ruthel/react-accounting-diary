import * as React from 'react';
import { useState, useCallback, useContext } from 'react';
import './styles/DialogOperation.scss';
import './styles/styles.scss';
import { GlobalContext } from './context.tsx';
import { Plus } from 'react-feather';
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
  const [state, setState] = useState<IDialogOperationState>({
    open: false,
    visibility: 'hide',
    isDebit: false,
    amount: '',
    account: '',
    text: '',
    date: '',
    currency: 'USD',
  });

  const handleClickOpen = useCallback(() => {
    setState((prevState) => ({ ...prevState, visibility: 'show' }));
    setTimeout(() => setState((prevState) => ({ ...prevState, open: true })), 400);
  }, []);

  const handleClose = useCallback(() => {
    setState((prevState) => ({ ...prevState, visibility: 'hide' }));
    setTimeout(() => setState((prevState) => ({ ...prevState, open: false })), 400);
  }, []);

  const context = useContext(GlobalContext);

  if (!context) return null; // Handle undefined context

  const handleSave = useCallback(() => {
    let validators = [
      state.amount,
      state.account,
      state.isDebit,
      state.text,
      state.date,
    ];
    if (
      validators.every(validator => !!validator) // Check for truthiness
    ) {
      let value: IDataItem[] = [...(context.state.data || [])];
      value.push({
        amount: Number(state.amount),
        account: state.account,
        isDebit: state.isDebit,
        text: state.text,
        date: state.date,
        currency: state.currency,
      });
      context.updateState({ data: value }); // Use updateState
      handleClose();
    } else {
      // context.setState({openSb: true, messageSb: "Please malke sure to fill all the fields", severitySb: "warning"})
    }
  }, [state, context, handleClose]);

  return (
    <div>
      {!state.open && (
        <button
          onClick={handleClickOpen}
          className="btn-add-accounting"
        >
          <Plus />
        </button>
      )}
      {state.open && (
        <div className={`dialog-container ${state.visibility}`}>
          <h3 className="dialog-title">Add transaction</h3>
          <div>Insert a new transaction to your accounting diary</div>
          <div>
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 150px',
                  columnGap: 6,
                }}
              >
                <div className="control">
                  <label htmlFor="name">Amount</label>
                  <input
                    id="name"
                    placeholder="Amount"
                    type="number"
                    step=".01"
                    value={state.amount || ''}
                    onChange={(e) =>
                      setState((prevState) => ({ ...prevState, amount: e.target.value }))
                    }
                  />
                </div>
                <div className="control">
                  <label htmlFor="name">Currency</label>
                  <select
                    value={state.currency || 'USD'}
                    onChange={(e) =>
                      setState((prevState) => ({ ...prevState, currency: e.target.value }))
                    }
                    name=""
                    id=""
                  >
                    {(currencies as [string, string][]).map((c) => (
                      <option key={c[1]} value={c[1]}>{c[0]}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="control">
                <label htmlFor="account">Account</label>
                <input
                  autoFocus
                  id="account"
                  placeholder="Account Ref"
                  value={state.account || ''}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, account: e.target.value }))
                  }
                />
              </div>
              <div className="control">
                <label htmlFor="date">Operation date</label>
                <input
                  id="date"
                  placeholder="Operation date"
                  type="date"
                  value={state.date}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, date: e.target.value }))
                  }
                />
              </div>
              <div className="control-check">
                <label>Is this operation a debit ?</label>&nbsp;
                <input
                  type="checkbox"
                  defaultChecked={false}
                  checked={state.isDebit || false}
                  style={{ marginLeft: 2, marginRight: 2 }}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, isDebit: e.target.checked }))
                  }
                />
              </div>
              <div className="control">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows={5}
                  placeholder="Describe the operation"
                  value={state.text || ''}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, text: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
          <div className="btn-action">
            <button onClick={handleClose} className="error">
              Cancel
            </button>
            &nbsp;
            <button onClick={handleSave} className="success">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogOperation;