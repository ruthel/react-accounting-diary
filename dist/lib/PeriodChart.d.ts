import { default as React } from 'react';
import { IDataItem, ILabels, PeriodGranularity } from '../types/common';
export interface PeriodChartProps {
    data: IDataItem[];
    periodGranularity?: PeriodGranularity;
    labels?: ILabels;
}
/** Dependency-free bars with a readable, accessible numeric summary. */
declare const PeriodChart: React.FC<PeriodChartProps>;
export default PeriodChart;
