import { default as React } from 'react';
import { IDataItem, IStyleConfig } from '../types/common';
interface IContentProps {
    value: IDataItem;
    length?: number;
    account?: IStyleConfig;
    amount?: IStyleConfig;
    showEdit?: boolean;
}
declare const Content: React.FC<IContentProps>;
export default Content;
