export interface IDataItem {
  date: string;
  text: string;
  isDebit?: boolean;
  amount: number;
  account: string;
  currency: string;
  local?: string;
}

export interface IStyleConfig {
  width?: number;
  backgroundColor?: string;
  fontWeight?: string;
  color?: string;
  background?: string;
}
