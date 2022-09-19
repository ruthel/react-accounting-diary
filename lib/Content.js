"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _func = _interopRequireDefault(require("./func"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Content extends _react.default.Component {
  render() {
    const {
      value
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "insertion"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "debit",
      style: this.props.account
    }, /*#__PURE__*/_react.default.createElement("div", null, value.isDebit ? value.account : '')), /*#__PURE__*/_react.default.createElement("div", {
      className: "credit flex-col",
      style: this.props.account
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-content"
    }, /*#__PURE__*/_react.default.createElement("div", null, !value.isDebit ? value.account : ''))), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-col description"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "transaction-content",
      style: {
        marginLeft: value.isDebit ? 0 : 72
      }
    }, value.text)), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-debit flex-col",
      style: this.props.amount
    }, /*#__PURE__*/_react.default.createElement("div", null, value.isDebit ? _func.default.currency(value.amount, value.currency, value.local) : '')), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-credit flex-col",
      style: this.props.amount
    }, /*#__PURE__*/_react.default.createElement("div", null, !value.isDebit ? _func.default.currency(value.amount, value.currency, value.local) : '')));
  }

}

exports.default = Content;