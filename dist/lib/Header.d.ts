import { default as React } from 'react';
import { IStyleConfig } from '../types/common';
interface IHeaderProps {
    date: string;
    index: number;
    columnHeader?: boolean;
    columnHeaderColor?: string;
    columnHeaderBgColor?: string;
    account?: IStyleConfig;
    amount?: IStyleConfig;
    showEdit?: boolean;
}
declare const Header: React.FC<IHeaderProps>;
export default Header;
