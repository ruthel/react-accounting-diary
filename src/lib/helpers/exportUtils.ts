import { IDataItem } from '../../types/common';

export const exportToCSV = (data: IDataItem[], filename = 'accounting-diary.csv') => {
  const headers = ['Date', 'Account', 'Description', 'Debit', 'Credit', 'Currency', 'Reconciled'];
  const csvContent = [
    headers.join(','),
    ...data.map(item => [
      item.date,
      `"${(item.account || '').replace(/"/g, '""')}"`,
      `"${(item.text || '').replace(/"/g, '""')}"`,
      item.isDebit ? item.amount : '',
      !item.isDebit ? item.amount : '',
      item.currency || 'USD',
      item.reconciled === true
    ].join(','))
  ].join('\n');

  downloadBlob(csvContent, filename, 'text/csv;charset=utf-8;');
};

export const exportToExcel = (data: IDataItem[], filename = 'accounting-diary.xls') => {
  const escape = (v: string | number) =>
    String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const rows = data.map(item =>
    `<tr>
      <td>${escape(item.date)}</td>
      <td>${escape(item.account)}</td>
      <td>${escape(item.text)}</td>
      <td>${item.isDebit ? item.amount : ''}</td>
      <td>${!item.isDebit ? item.amount : ''}</td>
      <td>${escape(item.currency || 'USD')}</td>
      <td>${item.reconciled === true}</td>
    </tr>`
  ).join('');

  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
    <head><meta charset="UTF-8"></head>
    <body>
      <table>
        <thead><tr><th>Date</th><th>Account</th><th>Description</th><th>Debit</th><th>Credit</th><th>Currency</th><th>Reconciled</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </body>
    </html>`;

  downloadBlob(html, filename, 'application/vnd.ms-excel;charset=utf-8;');
};

export const importFromCSV = (file: File): Promise<IDataItem[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csv = e.target?.result as string;
        const lines = parseCSV(csv);
        const reconciledColumn = lines[0]?.findIndex(value => value.trim().toLowerCase() === 'reconciled') ?? -1;

        const data: IDataItem[] = lines.slice(1)
          .filter(values => values.some(value => value.trim()))
          .map(values => {
            const debit = parseFloat(values[3]) || 0;
            const credit = parseFloat(values[4]) || 0;

            return {
              date: values[0],
              account: values[1],
              text: values[2],
              amount: debit || credit,
              isDebit: debit > 0,
              currency: (values[5] || 'USD').trim(),
              ...(reconciledColumn >= 0 ? { reconciled: values[reconciledColumn]?.trim().toLowerCase() === 'true' } : {})
            };
          });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsText(file);
  });
};

export const exportToJSON = (data: IDataItem[], filename = 'accounting-diary.json') => {
  downloadBlob(JSON.stringify(data, null, 2), filename, 'application/json;charset=utf-8;');
};

export const importFromJSON = (file: File): Promise<IDataItem[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        const items = (Array.isArray(parsed) ? parsed : [parsed]) as IDataItem[];
        resolve(items);
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsText(file);
  });
};

function downloadBlob(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

// Read quoted commas, escaped quotes and multiline descriptions written by exportToCSV.
function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [], value = '', quoted = false;
  for (let index = 0; index < csv.length; index++) {
    const char = csv[index];
    if (char === '"') {
      if (quoted && csv[index + 1] === '"') { value += '"'; index++; }
      else quoted = !quoted;
    } else if (char === ',' && !quoted) { row.push(value); value = ''; }
    else if (char === '\n' && !quoted) { row.push(value.replace(/\r$/, '')); rows.push(row); row = []; value = ''; }
    else value += char;
  }
  row.push(value.replace(/\r$/, ''));
  rows.push(row);
  return rows;
}
