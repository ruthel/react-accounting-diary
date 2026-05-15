import React, { useContext } from 'react';
import { Search, Calendar } from './icons';
import { GlobalContext } from './context';

const inputStyle: React.CSSProperties = {
  padding: '8px 10px',
  border: '1px solid hsl(220, 13%, 91%)',
  borderRadius: '6px',
  fontSize: '13px',
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'white',
  color: 'hsl(224, 71%, 4%)',
};

const SearchFilter: React.FC = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  
  const { state, labels, updateState } = context;

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ position: 'relative' }}>
        <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'hsl(220, 9%, 46%)' }} />
        <input
          type="text"
          placeholder={labels.search}
          value={state.searchTerm || ''}
          onChange={(e) => updateState({ searchTerm: e.target.value })}
          style={{ ...inputStyle, paddingLeft: '32px', width: '180px' }}
        />
      </div>
      
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <Calendar size={14} style={{ color: 'hsl(220, 9%, 46%)' }} />
        <input
          type="date"
          value={state.dateFilter?.start || ''}
          onChange={(e) => updateState({ 
            dateFilter: { ...state.dateFilter, start: e.target.value }
          })}
          style={inputStyle}
        />
        <span style={{ color: 'hsl(220, 9%, 46%)', fontSize: '12px' }}>{labels.to}</span>
        <input
          type="date"
          value={state.dateFilter?.end || ''}
          onChange={(e) => updateState({ 
            dateFilter: { ...state.dateFilter, end: e.target.value }
          })}
          style={inputStyle}
        />
        {(state.searchTerm || state.dateFilter?.start || state.dateFilter?.end) && (
          <button
            onClick={() => updateState({ searchTerm: '', dateFilter: {} })}
            style={{
              padding: '8px 12px',
              background: 'white',
              border: '1px solid hsl(220, 13%, 91%)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 500,
              color: 'hsl(220, 9%, 46%)',
              transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {labels.clear}
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
