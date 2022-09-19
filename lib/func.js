"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Func {
  static currency(value) {
    let devise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cfa';
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: devise
    }).format(value) || '0,00 CFA';
  }

  static number(value) {
    return new Intl.NumberFormat('en-IN', {
      minimumIntegerDigits: 2
    }).format(value || 0);
  }

  static date(value) {
    return new Date(value).toLocaleDateString("fr-FR", {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

}

exports.default = Func;