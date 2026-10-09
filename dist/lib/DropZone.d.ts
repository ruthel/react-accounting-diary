import { default as React } from 'react';
export declare const useDropZone: () => {
    isDragging: boolean;
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
    onDragOver: (e: React.DragEvent) => void;
    onDragLeave: (e: React.DragEvent) => void;
};
declare const DropZoneOverlay: React.FC<{
    onDone: () => void;
}>;
export default DropZoneOverlay;
