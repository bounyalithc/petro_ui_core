"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles.scss");
var _antd = require("antd");
var _Image = _interopRequireDefault(require("../Image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MenuLogin = function MenuLogin(_ref) {
  var src = _ref.src,
    onClickLogin = _ref.onClickLogin,
    onClickSignUp = _ref.onClickSignUp,
    text = _ref.text,
    languageData = _ref.languageData;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-login-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-login-alert"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-img"
  }, /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: src
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "alert-content"
  }, text)), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-login-footer"
  }, /*#__PURE__*/_react.default.createElement(_antd.Row, null, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 12
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "btn",
    onClick: onClickLogin
  }, languageData.LOG_IN)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 12
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "btn",
    onClick: onClickSignUp
  }, languageData.SIGN_UP)))));
};
var _default = MenuLogin;
exports.default = _default;