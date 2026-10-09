import { IDataItem } from '../../types/common';
export declare const exportToCSV: (data: IDataItem[], filename?: string) => void;
export declare const exportToExcel: (data: IDataItem[], filename?: string) => void;
export declare const importFromCSV: (file: File) => Promise<IDataItem[]>;
export declare const exportToJSON: (data: IDataItem[], filename?: string) => void;
export declare const importFromJSON: (file: File) => Promise<IDataItem[]>;
