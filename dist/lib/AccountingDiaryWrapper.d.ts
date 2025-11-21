import { default as React } from 'react';
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
declare const AccountingDiaryWrapper: React.FC<IAccountingDiaryWrapperProps>;
export default AccountingDiaryWrapper;
