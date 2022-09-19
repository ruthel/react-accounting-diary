"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.split.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Header extends _react.default.Component {
  render() {
    let {
      date,
      index
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "insertion"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "debit",
      style: this.props.account
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "credit flex-col",
      style: this.props.account
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-col description ".concat(index === 0 ? 'border-top' : ' '),
      style: {
        borderTopLeftRadius: index === 0 ? 6 : 0,
        borderTopRightRadius: index === 0 ? 6 : 0,
        borderBottom: 'none'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, date.split('-')[2], "/", date.split('-')[1], "/", date.split('-')[0])), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-debit flex-col",
      style: this.props.amount
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("div", {
      className: "amount-credit flex-col",
      style: this.props.amount
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "date"
    }, "\xA0")));
  }

}

exports.default = Header;