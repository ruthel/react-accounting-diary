import React, { useState, useContext, useCallback } from 'react';
import { Upload } from './icons';
import { GlobalContext } from './context';
import { importFromCSV, importFromJSON } from './helpers/exportUtils';
import { generateId } from '../types/common';

export const useDropZone = () => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    // Only leave if we're leaving the container (not entering a child)
    if (e.currentTarget === e.target) {
      setIsDragging(false);
    }
  }, []);

  return { isDragging, setIsDragging, onDragOver, onDragLeave };
};

const DropZoneOverlay: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const context = useContext(GlobalContext);

  if (!context) return null;
  const { state, labels, updateState } = context;

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDone();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    try {
      let imported;
      if (file.name.endsWith('.csv')) {
        imported = await importFromCSV(file);
      } else if (file.name.endsWith('.json')) {
        imported = await importFromJSON(file);
      } else {
        return;
      }
      const withIds = imported.map(item => ({ ...item, id: item.id || generateId() }));
      updateState({ data: [...(state.data || []), ...withIds] });
    } catch { /* ignore */ }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={(e) => { e.preventDefault(); onDone(); }}
      onDrop={handleDrop}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'hsla(221, 83%, 53%, 0.08)',
        border: '2px dashed hsl(221, 83%, 53%)',
        borderRadius: 12,
        backdropFilter: 'blur(2px)',
      }}
    >
      <div style={{ textAlign: 'center', color: 'hsl(221, 83%, 53%)' }}>
        <Upload size={32} />
        <p style={{ margin: '8px 0 0', fontSize: 14, fontWeight: 600 }}>
          {labels.dropFileHere}
        </p>
      </div>
    </div>
  );
};

export default DropZoneOverlay;
