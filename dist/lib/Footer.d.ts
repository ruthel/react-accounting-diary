import { default as React } from 'react';
import { IStyleConfig } from '../types/common';
interface IFooterProps {
    account?: IStyleConfig;
    columnHeader?: boolean;
    footer?: IStyleConfig;
    amount?: IStyleConfig;
    index?: number;
}
declare const Footer: React.FC<IFooterProps>;
export default Footer;
