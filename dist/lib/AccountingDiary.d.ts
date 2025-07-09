import { default as React } from 'react';
import { IDataItem, IStyleConfig } from '../types/common';
interface IAccountingDiaryProps {
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
declare const AccountingDiary: React.FC<IAccountingDiaryProps>;
export default AccountingDiary;
