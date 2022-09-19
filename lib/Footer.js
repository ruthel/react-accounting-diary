"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Footer extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "insertion"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "debit",
      style: this.props.account
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "credit flex-col",
      style: this.props.account
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-col description border-bottom"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "Transaction text")), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-debit flex-col",
      style: this.props.amount
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-credit flex-col",
      style: this.props.amount
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-title"
    }, "\xA0")));
  }

}

exports.default = Footer;