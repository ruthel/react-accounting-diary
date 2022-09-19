"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.typed-array.uint8-array.js");

require("core-js/modules/es.typed-array.to-locale-string.js");

require("core-js/modules/es.array-buffer.slice.js");

var _react = _interopRequireDefault(require("react"));

require("./styles/styles.scss");

var _DialogOperation = _interopRequireDefault(require("./DialogOperation"));

var _lodash = _interopRequireDefault(require("lodash"));

var htmlToImage = _interopRequireWildcard(require("html-to-image"));

var _reactFeather = require("react-feather");

var _Footer = _interopRequireDefault(require("./Footer"));

var _Header = _interopRequireDefault(require("./Header"));

var _context = require("./context");

var _kendoFileSaver = require("@progress/kendo-file-saver");

var _Content = _interopRequireDefault(require("./Content"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AccountingDiary extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      toFunc: 'toPng'
    });
  }

  getArray(data) {
    let myArray = [];

    let grp = _lodash.default.groupBy(data, 'date');

    let keys = Object.keys(grp);
    keys.forEach(date => {
      myArray.push({
        date,
        content: grp[date]
      });
    });
    return myArray;
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_context.GlobalProvider, null, /*#__PURE__*/_react.default.createElement(_context.GlobalContext.Consumer, null, context => /*#__PURE__*/_react.default.createElement("div", {
      style: {
        border: '1px solid whitesmoke',
        minHeight: '100px',
        height: this.props.height,
        width: this.props.width,
        position: 'relative',
        padding: 24,
        borderRadius: 4,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/_react.default.createElement("select", {
      value: this.state.toFunc,
      onChange: e => this.setState({
        toFunc: e.target.value
      })
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "toJpeg"
    }, "JPEG"), /*#__PURE__*/_react.default.createElement("option", {
      value: "toPng"
    }, "PNG"), /*#__PURE__*/_react.default.createElement("option", {
      value: "toSvg"
    }, "SVG"), /*#__PURE__*/_react.default.createElement("option", {
      value: "toBlob"
    }, "BLOB")), /*#__PURE__*/_react.default.createElement("div", {
      id: "diary",
      style: {
        padding: 8
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 8,
        fontWeight: 600,
        fontSize: 18
      }
    }, "Accounting diary for ", this.props.title), this.getArray(context.state.data || this.props.data).map((elt, i) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, {
      date: elt.date,
      index: i,
      account: this.props.account,
      amount: this.props.amount
    }), _lodash.default.orderBy(elt.content, 'isDebit', "asc").map(row => /*#__PURE__*/_react.default.createElement(_Content.default, {
      value: row,
      account: this.props.account,
      amount: this.props.amount
    })), /*#__PURE__*/_react.default.createElement(_Footer.default, {
      account: this.props.account,
      amount: this.props.amount
    })))), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'end',
        display: 'flex',
        flexDirection: 'column',
        right: 24,
        bottom: 16
      }
    }, /*#__PURE__*/_react.default.createElement(_DialogOperation.default, null), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn-save-accounting",
      style: {
        marginTop: 16,
        backgroundColor: this.props.saveColor
      },
      onClick: () => {
        let node = document.getElementById('diary');
        htmlToImage[this.state.toFunc](node, {
          backgroundColor: '#fff'
        }).then(function (dataUrl) {
          var arr = dataUrl.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          const file = new File([u8arr], 'filename', {
            type: mime
          });
          (0, _kendoFileSaver.saveAs)(file, 'img.' + mime.split('/')[1]);
        }).catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
      }
    }, this.props.saveIcon)))));
  }

}

AccountingDiary.defaultProps = {
  saveColor: "#ffffff",
  saveIcon: /*#__PURE__*/_react.default.createElement(_reactFeather.Download, {
    size: 16
  }),
  title: "Test Model",
  height: 300,
  account: {
    width: 128,
    color: '#646464'
  },
  amount: {
    width: 128,
    color: '#646464'
  }
};
var _default = AccountingDiary;
exports.default = _default;