import React from 'react';
import AccountingDiary from './AccountingDiary.tsx';
import { GlobalProvider } from './context.tsx';
import { IDataItem, IStyleConfig } from '../types/common';

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
}

const AccountingDiaryWrapper: React.FC<IAccountingDiaryWrapperProps> = (props) => {
  return (
    <GlobalProvider>
      <AccountingDiary {...props} />
    </GlobalProvider>
  );
};

export default AccountingDiaryWrapper;
