"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Footer extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "insertion"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "debit",
      style: _objectSpread(_objectSpread({}, this.props.account), {}, {
        borderBottom: this.props.columnHeader ? 'var(--border) solid' : ''
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "credit flex-col",
      style: _objectSpread(_objectSpread({}, this.props.account), {}, {
        borderBottom: this.props.columnHeader ? 'var(--border) solid' : ''
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-col description border-bottom",
      style: {
        padding: 0
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title",
      style: _objectSpread(_objectSpread({}, this.props.footer), {}, {
        fontSize: 11,
        marginTop: 7,
        textTransform: 'uppercase'
      })
    }, "transactions entries")), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-debit flex-col",
      style: _objectSpread(_objectSpread({}, this.props.amount), {}, {
        borderBottom: this.props.columnHeader ? 'var(--border) solid' : ''
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-credit flex-col",
      style: _objectSpread(_objectSpread({}, this.props.amount), {}, {
        borderBottom: this.props.columnHeader ? 'var(--border) solid' : ''
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "\xA0")));
  }

}

exports.default = Footer;