"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var LabelForm = function LabelForm(_ref) {
  var label = _ref.label,
    hideRequireMark = _ref.hideRequireMark;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "label-custom"
  }, label, " ", !hideRequireMark && /*#__PURE__*/_react.default.createElement("span", {
    className: "mark"
  }, "*"));
};
LabelForm.defaultProps = {
  label: '',
  hideRequireMark: false
};
LabelForm.propTypes = {
  label: _propTypes.default.string.isRequired,
  hideRequireMark: _propTypes.default.bool
};
var _default = LabelForm;
exports.default = _default;