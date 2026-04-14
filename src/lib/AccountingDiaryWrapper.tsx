import React, { forwardRef } from 'react';
import AccountingDiary from './AccountingDiary.tsx';
import { GlobalProvider } from './context.tsx';
import { ThemeProvider } from './ThemeProvider.tsx';
import { IDataItem, IStyleConfig, ILabels, AccountingDiaryHandle } from '../types/common';

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
  showLedgerToggle?: boolean;
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
  onBeforeAdd?: (item: IDataItem) => boolean | Promise<boolean>;
  onBeforeEdit?: (oldItem: IDataItem, newItem: IDataItem) => boolean | Promise<boolean>;
  onBeforeDelete?: (item: IDataItem) => boolean | Promise<boolean>;
}

const AccountingDiaryWrapper = forwardRef<AccountingDiaryHandle, IAccountingDiaryWrapperProps>((props, ref) => {
  return (
    <ThemeProvider>
      <GlobalProvider
        labels={props.labels}
        pageSize={props.pageSize}
        onAdd={props.onAdd}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
        onChange={props.onChange}
        onBeforeAdd={props.onBeforeAdd}
        onBeforeEdit={props.onBeforeEdit}
        onBeforeDelete={props.onBeforeDelete}
      >
        <AccountingDiary ref={ref} {...props} />
      </GlobalProvider>
    </ThemeProvider>
  );
});

AccountingDiaryWrapper.displayName = 'AccountingDiaryWrapper';

export default AccountingDiaryWrapper;
