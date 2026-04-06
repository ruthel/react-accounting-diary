import { default as React } from 'react';
import { IDataItem, IStyleConfig } from '../types/common';
interface IFooterProps {
    account?: IStyleConfig;
    columnHeader?: boolean;
    footer?: IStyleConfig;
    amount?: IStyleConfig;
    index?: number;
    data?: IDataItem[];
    showEdit?: boolean;
}
declare const Footer: React.FC<IFooterProps>;
export default Footer;
