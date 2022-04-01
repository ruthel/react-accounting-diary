export default class Func {
  static currency(value, devise = 'cfa') {
    return new Intl.NumberFormat('de-DE', {style: 'currency', currency: devise}).format(value) || '0,00 CFA'
  }

  static number(value) {
    return new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(value||0)
  }

  static date(value) {
    return new Date(value).toLocaleDateString("fr-FR", {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
}
