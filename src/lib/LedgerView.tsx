import React, { useContext, useMemo } from 'react';
import { GlobalContext } from './context';
import { IDataItem } from '../types/common';
import Func from './helpers/func.ts';

interface LedgerAccount {
  account: string;
  entries: (IDataItem & { runningBalance: number })[];
  totalDebit: number;
  totalCredit: number;
  balance: number;
}

const LedgerView: React.FC<{ data: IDataItem[] }> = ({ data }) => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { labels } = context;

  const ledger = useMemo<LedgerAccount[]>(() => {
    const grouped: Record<string, IDataItem[]> = {};
    for (const item of data) {
      if (!grouped[item.account]) grouped[item.account] = [];
      grouped[item.account].push(item);
    }
    return Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([account, entries]) => {
        let running = 0;
        const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
        const withBalance = sorted.map(e => {
          running += e.isDebit ? e.amount : -e.amount;
          return { ...e, runningBalance: running };
        });
        return {
          account,
          entries: withBalance,
          totalDebit: entries.filter(e => e.isDebit).reduce((s, e) => s + e.amount, 0),
          totalCredit: entries.filter(e => !e.isDebit).reduce((s, e) => s + e.amount, 0),
          balance: running,
        };
      });
  }, [data]);

  const currency = data[0]?.currency || 'USD';
  const local = data[0]?.local;

  return (
    <div className="ledger-view" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {ledger.map(acct => (
        <div key={acct.account} style={{ border: '1px solid var(--rad-border-color, hsl(220,13%,91%))', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ padding: '10px 14px', fontWeight: 600, fontSize: 14, background: 'var(--rad-surface, #f8f9fa)', borderBottom: '1px solid var(--rad-border-color, hsl(220,13%,91%))' }}>
            {acct.account}
            <span style={{ float: 'right', fontWeight: 500, fontSize: 13, color: acct.balance >= 0 ? '#198754' : '#dc3545' }}>
              {labels.runningBalance}: {Func.currency(Math.abs(acct.balance), currency, local)} {acct.balance >= 0 ? `(${labels.debit})` : `(${labels.credit})`}
            </span>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'var(--rad-surface, #f8f9fa)' }}>
                <th style={thStyle}>{labels.date}</th>
                <th style={thStyle}>{labels.description}</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>{labels.debit}</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>{labels.credit}</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>{labels.runningBalance}</th>
              </tr>
            </thead>
            <tbody>
              {acct.entries.map((e, i) => (
                <tr key={e.id || i} style={{ borderBottom: '1px solid var(--rad-border-color, hsl(220,13%,91%))' }}>
                  <td style={tdStyle}>{e.date}</td>
                  <td style={tdStyle}>{e.text}</td>
                  <td style={{ ...tdStyle, textAlign: 'right' }}>{e.isDebit ? Func.currency(e.amount, currency, local) : ''}</td>
                  <td style={{ ...tdStyle, textAlign: 'right' }}>{!e.isDebit ? Func.currency(e.amount, currency, local) : ''}</td>
                  <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 500, color: e.runningBalance >= 0 ? '#198754' : '#dc3545' }}>
                    {Func.currency(Math.abs(e.runningBalance), currency, local)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ fontWeight: 600, background: 'var(--rad-surface, #f8f9fa)' }}>
                <td style={tdStyle} colSpan={2}>{labels.grandTotal}</td>
                <td style={{ ...tdStyle, textAlign: 'right' }}>{Func.currency(acct.totalDebit, currency, local)}</td>
                <td style={{ ...tdStyle, textAlign: 'right' }}>{Func.currency(acct.totalCredit, currency, local)}</td>
                <td style={tdStyle}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      ))}
    </div>
  );
};

const thStyle: React.CSSProperties = { padding: '8px 12px', textAlign: 'left', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', color: '#6c757d' };
const tdStyle: React.CSSProperties = { padding: '8px 12px' };

export default LedgerView;
