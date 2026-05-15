import React, { useContext, useState, useRef, useEffect } from 'react';
import { Filter, ChevronDown } from './icons';
import { GlobalContext } from './context';

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: 20,
  marginTop: 4,
  background: 'white',
  border: '1px solid hsl(220, 13%, 91%)',
  borderRadius: 6,
  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  minWidth: 160,
  maxHeight: 200,
  overflowY: 'auto' as const,
  padding: '4px 0',
};

const optionStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '6px 12px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontSize: 12,
  fontWeight: 500,
  textAlign: 'left',
  color: 'hsl(224, 71%, 4%)',
  transition: 'background 150ms',
};

const FilterDropdown: React.FC = () => {
  const context = useContext(GlobalContext);
  const [accountOpen, setAccountOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  if (!context) return null;
  const { state, labels, updateState } = context;

  const allData = state.data || [];
  const accounts = [...new Set(allData.map(d => d.account).filter(Boolean))].sort();
  const categories = [...new Set(allData.map(d => d.category).filter(Boolean))].sort() as string[];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) setAccountOpen(false);
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) setCategoryOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const btnStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '8px 10px',
    border: '1px solid hsl(220, 13%, 91%)',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    background: 'white',
    cursor: 'pointer',
    color: 'hsl(220, 9%, 46%)',
    transition: 'all 150ms',
  };

  const activeBtnStyle: React.CSSProperties = {
    ...btnStyle,
    borderColor: 'hsl(221, 83%, 53%)',
    color: 'hsl(221, 83%, 53%)',
    background: 'hsla(221, 83%, 53%, 0.05)',
  };

  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {accounts.length > 0 && (
        <div ref={accountRef} style={{ position: 'relative' }}>
          <button
            style={state.filterAccount ? activeBtnStyle : btnStyle}
            onClick={() => { setAccountOpen(!accountOpen); setCategoryOpen(false); }}
            title={labels.filterByAccount}
          >
            <Filter size={12} />
            {state.filterAccount || labels.allAccounts}
            <ChevronDown size={10} />
          </button>
          {accountOpen && (
            <div style={dropdownStyle}>
              <button
                style={{ ...optionStyle, fontWeight: !state.filterAccount ? 600 : 500 }}
                onClick={() => { updateState({ filterAccount: undefined }); setAccountOpen(false); }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'hsl(220, 14%, 96%)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
              >
                {labels.allAccounts}
              </button>
              {accounts.map(acc => (
                <button
                  key={acc}
                  style={{ ...optionStyle, fontWeight: state.filterAccount === acc ? 600 : 500 }}
                  onClick={() => { updateState({ filterAccount: acc }); setAccountOpen(false); }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'hsl(220, 14%, 96%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                >
                  {acc}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {categories.length > 0 && (
        <div ref={categoryRef} style={{ position: 'relative' }}>
          <button
            style={state.filterCategory ? activeBtnStyle : btnStyle}
            onClick={() => { setCategoryOpen(!categoryOpen); setAccountOpen(false); }}
            title={labels.filterByCategory}
          >
            <Filter size={12} />
            {state.filterCategory || labels.allCategories}
            <ChevronDown size={10} />
          </button>
          {categoryOpen && (
            <div style={dropdownStyle}>
              <button
                style={{ ...optionStyle, fontWeight: !state.filterCategory ? 600 : 500 }}
                onClick={() => { updateState({ filterCategory: undefined }); setCategoryOpen(false); }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'hsl(220, 14%, 96%)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
              >
                {labels.allCategories}
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  style={{ ...optionStyle, fontWeight: state.filterCategory === cat ? 600 : 500 }}
                  onClick={() => { updateState({ filterCategory: cat }); setCategoryOpen(false); }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'hsl(220, 14%, 96%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
