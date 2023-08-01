"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles.scss");
var _Input = _interopRequireDefault(require("../../../Input"));
var _Button = _interopRequireDefault(require("../../../Button"));
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CheckMyOrderStatus = function CheckMyOrderStatus(_ref) {
  var languageData = _ref.languageData,
    onClick = _ref.onClick;
  var onFinish = function onFinish(value) {
    onClick(value.orderId);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "check-my-order-status-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    onFinish: onFinish,
    layout: "vertical",
    size: "large"
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "orderId",
    label: languageData.ORDER_ID
  }, /*#__PURE__*/_react.default.createElement(_Input.default, null)), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    htmlType: "submit"
  }, languageData.CHECK))));
};
var _default = CheckMyOrderStatus;
exports.default = _default;