"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.split.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Header extends _react.default.Component {
  render() {
    let {
      date,
      index,
      columnHeader,
      length,
      columnHeaderColor,
      columnHeaderBgColor
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "insertion"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "debit",
      style: _objectSpread(_objectSpread({}, this.props.account), {}, {
        borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
        borderBottom: index === 0 && columnHeader ? 'var(--border) solid' : '',
        background: index === 0 && columnHeader ? columnHeaderBgColor : ''
      })
    }, index === 0 && columnHeader ? /*#__PURE__*/_react.default.createElement("div", {
      className: "date",
      style: {
        color: columnHeaderColor
      }
    }, "Debit") : /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "credit flex-col",
      style: _objectSpread(_objectSpread({}, this.props.account), {}, {
        borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
        borderBottom: index === 0 && columnHeader ? 'var(--border) solid' : '',
        background: index === 0 && columnHeader ? columnHeaderBgColor : ''
      })
    }, index === 0 && columnHeader ? /*#__PURE__*/_react.default.createElement("div", {
      className: "date",
      style: {
        color: columnHeaderColor
      }
    }, "Credit") : /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-col description ".concat(index === 0 ? 'border-top' : ' '),
      style: {
        borderTopLeftRadius: index === 0 && !columnHeader ? 6 : 0,
        borderTopRightRadius: index === 0 && !columnHeader ? 6 : 0,
        borderBottom: 'none'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, date.split('-')[2], "/", date.split('-')[1], "/", date.split('-')[0])), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-debit",
      style: _objectSpread(_objectSpread({}, this.props.amount), {}, {
        borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
        borderBottom: index === 0 && columnHeader ? 'var(--border) solid' : '',
        background: index === 0 && columnHeader ? columnHeaderBgColor : ''
      })
    }, index === 0 && columnHeader ? /*#__PURE__*/_react.default.createElement("div", {
      className: "date",
      style: {
        color: columnHeaderColor
      }
    }, "Debit") : /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-credit flex-col",
      style: _objectSpread(_objectSpread({}, this.props.amount), {}, {
        borderTop: index === 0 && columnHeader ? 'var(--border) solid' : '',
        borderBottom: index === 0 && columnHeader ? 'var(--border) solid' : '',
        background: index === 0 && columnHeader ? columnHeaderBgColor : ''
      })
    }, index === 0 && columnHeader ? /*#__PURE__*/_react.default.createElement("div", {
      className: "date",
      style: {
        color: columnHeaderColor
      }
    }, "Credit") : /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, "\xA0")));
  }

}

exports.default = Header;