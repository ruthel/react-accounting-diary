import { extractDoc } from './pdfLoader';

export default class Func {
  static currency(value: number, currency: string = 'USD', locale: string = 'en-US') {
    return (
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
      }).format(value) || '0.00'
    );
  }

  static number(value: number) {
    return new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(
      value || 0
    );
  }

  static date(value: string | Date) {
    return new Date(value).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  static extractDoc(blob: string) {
    extractDoc(blob);
  }
}
