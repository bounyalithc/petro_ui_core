"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles.scss");
var _Image = _interopRequireDefault(require("../Image"));
var _reactQrCode = _interopRequireDefault(require("react-qr-code"));
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DownloadMobile = function DownloadMobile(_ref) {
  var className = _ref.className,
    appStoreSrc = _ref.appStoreSrc,
    googlePlaySrc = _ref.googlePlaySrc;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['download-mobile-wrapper', className].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 11,
    align: "start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "qr-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_reactQrCode.default, {
    size: 80,
    value: "Hello, World!"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "store"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "appstore"
  }, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: appStoreSrc
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: googlePlaySrc
  }))))));
};
DownloadMobile.defaultProps = {
  className: '',
  appStoreSrc: '/images/appstore.png',
  googlePlaySrc: '/images/googleplay.png'
};
var _default = DownloadMobile;
exports.default = _default;