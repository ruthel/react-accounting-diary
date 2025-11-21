import { IDataItem } from '../../types/common';
export declare const groupBy: (arr: IDataItem[], key: string) => Record<string, IDataItem[]>;
export declare const orderBy: (arr: IDataItem[], key: string, order?: "asc" | "desc") => IDataItem[];
