"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _Image = _interopRequireDefault(require("../../../Image"));
require("./styles.scss");
var _Dropdown = _interopRequireDefault(require("../../../Dropdown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MyCart = function MyCart(_ref) {
  var languageData = _ref.languageData,
    count = _ref.count,
    menu = _ref.menu;
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    className: "user-info-my-cart-dropdown",
    overlay: menu,
    placement: "bottomRight"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "my-cart-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 6
  }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
    count: count,
    offset: [-3, 0]
  }, /*#__PURE__*/_react.default.createElement(_Image.default, {
    src: "/images/cart.svg"
  })), /*#__PURE__*/_react.default.createElement("span", null, languageData.MY_CART))));
};
var _default = MyCart;
exports.default = _default;