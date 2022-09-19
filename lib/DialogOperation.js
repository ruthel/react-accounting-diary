"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/web.dom-collections.iterator.js");

var React = _interopRequireWildcard(require("react"));

require("./styles/DialogOperation.scss");

require("./styles/styles.scss");

var _context = require("./context");

var _reactFeather = require("react-feather");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DialogOperation extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleClickOpen", () => this.setState({
      open: true
    }));

    _defineProperty(this, "handleClose", () => this.setState({
      open: false
    }));

    this.data = props.data;
    this.setData = props.setData;
  }

  render() {
    return /*#__PURE__*/React.createElement(_context.GlobalContext.Consumer, null, context => {
      const handleSave = () => {
        let validators = [this.state.amount, this.state.account, this.state.isDebit, this.state.text, this.state.date];

        if (!validators.includes("") && !validators.includes(null) && !validators.includes(undefined)) {
          let value = [...context.state.data];
          value.push({
            amount: this.state.amount,
            account: this.state.account,
            isDebit: this.state.isDebit,
            text: this.state.text,
            date: this.state.date
          });
          context.setState({
            data: value
          });
          this.handleClose();
        } else {// context.setState({openSb: true, messageSb: "Please malke sure to fill all the fields", severitySb: "warning"})
        }
      };

      return /*#__PURE__*/React.createElement("div", null, !this.state.open && /*#__PURE__*/React.createElement("button", {
        onClick: this.handleClickOpen,
        className: "btn-add-accounting"
      }, /*#__PURE__*/React.createElement(_reactFeather.FilePlus, null)), this.state.open && /*#__PURE__*/React.createElement("div", {
        className: "dialog-container"
      }, /*#__PURE__*/React.createElement("h3", {
        style: {
          paddingBottom: 4
        },
        className: "dialog-title"
      }, "Add transaction"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Insert a new transaction to your accounting diary"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "control"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "name"
      }, "Amount"), /*#__PURE__*/React.createElement("input", {
        id: "name",
        placeholder: "Amount",
        type: "number",
        value: this.state.amount || "",
        onChange: e => {
          this.setState({
            amount: e.target.value
          });
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "control"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "account"
      }, "Account"), /*#__PURE__*/React.createElement("input", {
        autoFocus: true,
        id: "account",
        placeholder: "Account number",
        type: "number",
        value: this.state.account || "",
        onChange: e => this.setState({
          account: e.target.value
        })
      })), /*#__PURE__*/React.createElement("div", {
        className: "control"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "date"
      }, "Operation date"), /*#__PURE__*/React.createElement("input", {
        id: "date",
        placeholder: "Operation date",
        type: "date",
        value: this.state.date,
        onChange: e => this.setState({
          date: e.target.value
        })
      })), /*#__PURE__*/React.createElement("div", {
        className: "control"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "description"
      }, "Description"), /*#__PURE__*/React.createElement("textarea", {
        id: "description",
        rows: 5,
        placeholder: "Description of the opeation",
        value: this.state.text || "",
        onChange: e => this.setState({
          text: e.target.value
        })
      })), /*#__PURE__*/React.createElement("div", {
        className: "control-check"
      }, /*#__PURE__*/React.createElement("label", null, "Is this operation a debit ?"), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: this.state.isDebit || false,
        style: {
          marginLeft: 2,
          marginRight: 2
        },
        onChange: e => this.setState({
          isDebit: e.target.checked
        })
      })))), /*#__PURE__*/React.createElement("div", {
        className: "btn-action"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: this.handleClose,
        color: "error"
      }, "Cancel"), /*#__PURE__*/React.createElement("button", {
        onClick: handleSave,
        color: "success"
      }, "Save"))));
    });
  }

}

exports.default = DialogOperation;