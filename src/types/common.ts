export interface IDataItem {
  id?: string;
  date: string;
  text: string;
  isDebit?: boolean;
  amount: number;
  account: string;
  currency: string;
  local?: string;
}

let _counter = 0;
export const generateId = (): string =>
  `txn_${Date.now()}_${++_counter}`;

export interface IStyleConfig {
  width?: number;
  backgroundColor?: string;
  fontWeight?: string;
  color?: string;
  background?: string;
}
