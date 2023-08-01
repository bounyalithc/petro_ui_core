"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
var _antd = require("antd");
var _Image = _interopRequireDefault(require("../Image"));
var _excluded = ["src", "className", "type", "size"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Avatar = function Avatar(_ref) {
  var src = _ref.src,
    className = _ref.className,
    type = _ref.type,
    size = _ref.size,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_antd.Avatar, _extends({}, rest, {
    className: "avatar-custom ".concat(type, " ").concat(className),
    icon: /*#__PURE__*/_react.default.createElement("div", {
      className: "img-custom"
    }, src ? /*#__PURE__*/_react.default.createElement(_Image.default, {
      src: src
    }) : /*#__PURE__*/_react.default.createElement("img", {
      src: "/images/avatar.png",
      alt: "avatar"
    })),
    size: size
  }));
};
Avatar.propTypes = {
  src: _propTypes.default.any,
  className: _propTypes.default.string,
  type: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
Avatar.defaultProps = {
  src: '',
  className: '',
  type: 'primary',
  size: 'large'
};
var _default = Avatar;
exports.default = _default;