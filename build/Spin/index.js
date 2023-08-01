"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoadingScreen = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Spin = function Spin() {
  return /*#__PURE__*/_react.default.createElement(_antd.Spin, null);
};
var _default = Spin;
exports.default = _default;
var loadingWrapper = function loadingWrapper(className) {
  return function () {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, /*#__PURE__*/_react.default.createElement(Spin, null));
  };
};
var LoadingScreen = loadingWrapper('loading-screen');
exports.LoadingScreen = LoadingScreen;