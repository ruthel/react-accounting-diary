import pdfMake from "pdfmake";

export default class Func {
  static currency(value, devise = 'XAF', local = 'de-DE') {
    return new Intl.NumberFormat(local, {style: 'currency', currency: devise}).format(value) || '0,00'
  }

  static number(value) {
    return new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(value || 0)
  }

  static date(value) {
    return new Date(value).toLocaleDateString("fr-FR", {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  static extractDoc(blob) {
    pdfMake.createPdf({
      pageMargins: 0,
      content: [
        {
          image: blob,
          width: 595
        },
      ],
    }).download();
  }
}
