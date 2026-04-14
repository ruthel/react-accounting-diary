import React, { useContext, useState, useRef, useEffect } from 'react';
import { Edit2, Trash2, MoreVertical } from './icons';
import Func from './helpers/func.ts';
import { IDataItem, IStyleConfig } from '../types/common';
import { GlobalContext } from './context';

interface IContentProps {
  value: IDataItem;
  length?: number;
  account?: IStyleConfig;
  amount?: IStyleConfig;
  showEdit?: boolean;
}

const Content: React.FC<IContentProps> = (props) => {
  const { value } = props;
  const context = useContext(GlobalContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  if (!context) return null;
  const { state, labels, updateState, onDelete, onBeforeDelete } = context;

  const { width: _aw, ...accountStyle } = props.account || {};
  const { width: _mw, ...amountStyle } = props.amount || {};

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleEdit = () => {
    updateState({ editingTransaction: value });
    setMenuOpen(false);
  };

  const handleDelete = async () => {
    if (onBeforeDelete && !(await onBeforeDelete(value))) return;
    const newData = (state.data || []).filter((item) => item !== value);
    onDelete?.(value);
    updateState({ data: newData });
    setMenuOpen(false);
  };

  return (
    <div
      className="insertion"
      role="row"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setMenuOpen(!menuOpen);
        } else if (e.key === 'Escape') {
          setMenuOpen(false);
        }
      }}
    >
      <div className="debit flex-col" style={accountStyle} title={value.isDebit ? value.account : ''} role="cell">
        <div>{value.isDebit ? value.account : ''}</div>
      </div>
      <div className="credit flex-col" style={accountStyle} title={!value.isDebit ? value.account : ''} role="cell">
        <div>{!value.isDebit ? value.account : ''}</div>
      </div>
      <div className="flex-col description" role="cell">
        <div
          className="transaction-content"
          style={{ marginLeft: value.isDebit ? 0 : 72 }}
        >
          {value.text}
        </div>
      </div>
      <div className="amount-debit flex-col" style={amountStyle} role="cell">
        <div>
          {value.isDebit
            ? Func.currency(value.amount, value.currency, value.local)
            : ''}
        </div>
      </div>
      <div className="amount-credit flex-col" style={amountStyle} role="cell">
        <div>
          {!value.isDebit
            ? Func.currency(value.amount, value.currency, value.local)
            : ''}
        </div>
      </div>
      {props.showEdit !== false && (
        <div className="row-actions" ref={menuRef}>
          <button
            className="row-actions-trigger"
            onClick={() => setMenuOpen(!menuOpen)}
            title={labels.actions}
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <MoreVertical size={14} />
          </button>
          {menuOpen && (
            <div className="row-actions-menu" role="menu">
              <button role="menuitem" onClick={handleEdit} onKeyDown={(e) => e.key === 'Enter' && handleEdit()}>
                <Edit2 size={13} /> {labels.edit}
              </button>
              <button role="menuitem" className="danger" onClick={handleDelete} onKeyDown={(e) => e.key === 'Enter' && handleDelete()}>
                <Trash2 size={13} /> {labels.delete}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
