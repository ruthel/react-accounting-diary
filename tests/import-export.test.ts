import { afterEach, expect, it, vi } from 'vitest';
import { exportToCSV, exportToExcel, exportToJSON, importFromCSV, importFromJSON } from '../src/lib/helpers/exportUtils';
import type { IDataItem } from '../src/types/common';

const item: IDataItem = { date: '2026-10-09', account: 'Bank, USD', text: 'Invoice "paid"\nToday', amount: 12.5, currency: 'USD', isDebit: true, reconciled: true };
afterEach(() => vi.restoreAllMocks());

async function captureDownload(exporter: () => void): Promise<Blob> {
  let blob: Blob | undefined;
  Object.defineProperty(URL, 'createObjectURL', { configurable: true, value: vi.fn((value: Blob) => { blob = value; return 'blob:test'; }) });
  Object.defineProperty(URL, 'revokeObjectURL', { configurable: true, value: vi.fn() });
  vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
  exporter();
  return blob!;
}
function read(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(blob);
  });
}
it('round-trips reconciliation and quoted fields through CSV', async () => {
  const blob = await captureDownload(() => exportToCSV([item, { ...item, reconciled: false }]));
  const result = await importFromCSV(new File([blob], 'entries.csv'));
  expect(result).toEqual([item, { ...item, reconciled: false }]);
});
it('still imports six-column legacy CSV with no status', async () => {
  const result = await importFromCSV(new File(['Date,Account,Description,Debit,Credit,Currency\r\n2026-01-01,Bank,Legacy,0,10,USD\r\n'], 'legacy.csv'));
  expect(result[0]).toMatchObject({ amount: 10, isDebit: false, currency: 'USD' });
  expect(result[0].reconciled).toBeUndefined();
});
it('preserves status through JSON and adds it to Excel exports', async () => {
  const json = await captureDownload(() => exportToJSON([item]));
  expect(await importFromJSON(new File([json], 'entries.json'))).toEqual([item]);
  const excel = await captureDownload(() => exportToExcel([item]));
  const html = await read(excel);
  expect(html).toContain('<th>Reconciled</th>');
  expect(html).toContain('<td>true</td>');
});
