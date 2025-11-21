import { extractDoc } from './pdfLoader';

export default class Func {
  static currency(value: number, devise: string = 'XAF', local: string = 'de-DE') {
    return (
      new Intl.NumberFormat(local, {
        style: 'currency',
        currency: devise,
      }).format(value) || '0,00'
    );
  }

  static number(value: number) {
    return new Intl.NumberFormat('en-IN', { minimumIntegerDigits: 2 }).format(
      value || 0
    );
  }

  static date(value: string | Date) {
    return new Date(value).toLocaleDateString('fr-FR', {
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
