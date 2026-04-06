import React from 'react';
import AccountingDiary from './AccountingDiary.tsx';
import { GlobalProvider } from './context.tsx';
import { ThemeProvider } from './ThemeProvider.tsx';
import { IDataItem, IStyleConfig, ILabels } from '../types/common';

interface IAccountingDiaryWrapperProps {
  height?: number;
  width?: number;
  data?: IDataItem[];
  title?: string;
  titleColor?: string;
  titleBg?: string;
  titleBorder?: boolean;
  titleAllCaps?: boolean;
  titleCorner?: number;
  columnHeader?: boolean;
  columnHeaderColor?: string;
  columnHeaderBgColor?: string;
  saveColor?: string;
  saveIcon?: React.ReactNode;
  account?: IStyleConfig;
  amount?: IStyleConfig;
  footer?: IStyleConfig;
  showExport?: boolean;
  showUndo?: boolean;
  showSample?: boolean;
  showClear?: boolean;
  showAdd?: boolean;
  showEdit?: boolean;
  showSearch?: boolean;
  showGrandTotal?: boolean;
  compactButtons?: boolean;
  enableCSVExport?: boolean;
  enableExcelExport?: boolean;
  theme?: 'light' | 'dark';
  labels?: ILabels;
  pageSize?: number;
  onChange?: (data: IDataItem[]) => void;
  onAdd?: (item: IDataItem) => void;
  onDelete?: (item: IDataItem) => void;
  onEdit?: (oldItem: IDataItem, newItem: IDataItem) => void;
  onExport?: (format: string, data: IDataItem[]) => void;
}

const AccountingDiaryWrapper: React.FC<IAccountingDiaryWrapperProps> = (props) => {
  return (
    <ThemeProvider>
      <GlobalProvider
        labels={props.labels}
        pageSize={props.pageSize}
        onAdd={props.onAdd}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
        onChange={props.onChange}
      >
        <AccountingDiary {...props} />
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default AccountingDiaryWrapper;
