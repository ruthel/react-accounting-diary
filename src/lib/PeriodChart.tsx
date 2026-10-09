import React, { useMemo } from 'react';
import { defaultLabels } from '../types/common';
import type { IDataItem, ILabels, PeriodGranularity } from '../types/common';
import { summarizeByPeriod } from './helpers/transactions';

export interface PeriodChartProps {
  data: IDataItem[];
  periodGranularity?: PeriodGranularity;
  labels?: ILabels;
}

/** Dependency-free bars with a readable, accessible numeric summary. */
const PeriodChart: React.FC<PeriodChartProps> = ({ data, periodGranularity = 'month', labels }) => {
  const text = { ...defaultLabels, ...labels };
  const summary = useMemo(() => summarizeByPeriod(data, periodGranularity), [data, periodGranularity]);
  const scales = useMemo(() => {
    const result = new Map<string, number>();
    for (const row of summary) result.set(row.currency, Math.max(result.get(row.currency) || 0, Math.abs(row.debit), Math.abs(row.credit)));
    return result;
  }, [summary]);
  return (
    <section className="period-chart" aria-label={text.periodSummary}>
      <h2>{text.periodSummary}</h2>
      {summary.length === 0 ? <p>{text.noData}</p> : (
        <div className="period-chart-scroll">
          <table>
            <thead><tr><th scope="col">{text.period}</th><th scope="col">{text.currency}</th><th scope="col">{text.debit}</th><th scope="col">{text.credit}</th><th scope="col">{text.balance}</th></tr></thead>
            <tbody>{summary.map(row => (
              <tr key={JSON.stringify([row.period, row.currency])}>
                <th scope="row">{row.period}</th><td>{row.currency}</td>
                {(['debit', 'credit'] as const).map(kind => (
                  <td key={kind}>
                    <span className={`period-bar ${kind}`} aria-hidden="true" style={{ width: `${Math.abs(row[kind]) / (scales.get(row.currency) || 1) * 100}%` }} />
                    <span>{row[kind].toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </td>
                ))}
                <td>{row.balance.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default PeriodChart;
