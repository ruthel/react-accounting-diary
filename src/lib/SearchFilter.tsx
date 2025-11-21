import React, { useContext } from 'react';
import { Search, Calendar } from 'react-feather';
import { GlobalContext } from './context';

const SearchFilter: React.FC = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  
  const { state, updateState } = context;

  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
      <div style={{ position: 'relative' }}>
        <Search size={16} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
        <input
          type="text"
          placeholder="Search transactions..."
          value={state.searchTerm || ''}
          onChange={(e) => updateState({ searchTerm: e.target.value })}
          style={{
            paddingLeft: '32px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            width: '200px'
          }}
        />
      </div>
      
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Calendar size={16} style={{ opacity: 0.5 }} />
        <input
          type="date"
          value={state.dateFilter?.start || ''}
          onChange={(e) => updateState({ 
            dateFilter: { ...state.dateFilter, start: e.target.value }
          })}
          style={{
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
        <span style={{ opacity: 0.5 }}>to</span>
        <input
          type="date"
          value={state.dateFilter?.end || ''}
          onChange={(e) => updateState({ 
            dateFilter: { ...state.dateFilter, end: e.target.value }
          })}
          style={{
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
        {(state.searchTerm || state.dateFilter?.start || state.dateFilter?.end) && (
          <button
            onClick={() => updateState({ searchTerm: '', dateFilter: {} })}
            style={{
              padding: '8px 12px',
              background: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;