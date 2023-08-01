"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles.scss");
var _icons = require("@ant-design/icons");
var _Avatar = _interopRequireDefault(require("../../../Avatar"));
var _Dropdown = _interopRequireDefault(require("../../../Dropdown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var UserInfoMenu = function UserInfoMenu(_ref) {
  var userInfo = _ref.userInfo,
    languageData = _ref.languageData,
    menu = _ref.menu,
    avatar = _ref.avatar;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    className: "user-info-menu-dropdown",
    overlay: menu,
    getPopupContainer: function getPopupContainer() {
      return document.getElementById('user-info-menu-popup');
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user-info-menu-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user-info-menu"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    src: avatar
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "welcome"
  }, languageData.WELCOME), /*#__PURE__*/_react.default.createElement("div", {
    className: "user-name"
  }, userInfo.fullName)), /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
    style: {
      color: '#A2A5B9'
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    id: "user-info-menu-popup"
  }));
};
var _default = UserInfoMenu;
exports.default = _default;