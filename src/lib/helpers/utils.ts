import { IDataItem } from '../../types/common';

export const groupBy = (arr: IDataItem[], key: string) => {
  return arr.reduce((acc, item) => {
    const k = String(item[key as keyof IDataItem]);
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {} as Record<string, IDataItem[]>);
};

export const orderBy = (arr: IDataItem[], key: string, order: 'asc' | 'desc' = 'asc') => {
  return [...arr].sort((a, b) => {
    const aVal = a[key as keyof IDataItem] as any;
    const bVal = b[key as keyof IDataItem] as any;
    const comparison = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    return order === 'asc' ? comparison : -comparison;
  });
};
