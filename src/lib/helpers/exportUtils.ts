import { IDataItem } from '../../types/common';

export const exportToCSV = (data: IDataItem[], filename = 'accounting-diary.csv') => {
  const headers = ['Date', 'Account', 'Description', 'Debit', 'Credit', 'Currency'];
  const csvContent = [
    headers.join(','),
    ...data.map(item => [
      item.date,
      `"${item.account}"`,
      `"${item.text}"`,
      item.isDebit ? item.amount : '',
      !item.isDebit ? item.amount : '',
      item.currency || 'USD'
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

export const exportToExcel = async (data: IDataItem[], filename = 'accounting-diary.xlsx') => {
  // Dynamic import to reduce bundle size
  const XLSX = await import('xlsx');
  
  const worksheet = XLSX.utils.json_to_sheet(
    data.map(item => ({
      Date: item.date,
      Account: item.account,
      Description: item.text,
      Debit: item.isDebit ? item.amount : '',
      Credit: !item.isDebit ? item.amount : '',
      Currency: item.currency || 'USD'
    }))
  );
  
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
  XLSX.writeFile(workbook, filename);
};

export const importFromCSV = (file: File): Promise<IDataItem[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csv = e.target?.result as string;
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        
        const data: IDataItem[] = lines.slice(1)
          .filter(line => line.trim())
          .map(line => {
            const values = line.split(',');
            const debit = parseFloat(values[3]) || 0;
            const credit = parseFloat(values[4]) || 0;
            
            return {
              date: values[0],
              account: values[1].replace(/"/g, ''),
              text: values[2].replace(/"/g, ''),
              amount: debit || credit,
              isDebit: debit > 0,
              currency: values[5] || 'USD'
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