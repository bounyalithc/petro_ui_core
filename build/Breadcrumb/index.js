"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
var _antd = require("antd");
var _excluded = ["type", "className", "breadcrumbs", "breadcrumbItemProps"],
  _excluded2 = ["name"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Breadcrumb = function Breadcrumb(_ref) {
  var type = _ref.type,
    className = _ref.className,
    breadcrumbs = _ref.breadcrumbs,
    breadcrumbItemProps = _ref.breadcrumbItemProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb, _extends({
    className: "breadcrumb-custom ".concat(className, " ").concat(type),
    type: type
  }, rest), breadcrumbs.map(function (_ref2, idx) {
    var name = _ref2.name,
      itemRest = _objectWithoutProperties(_ref2, _excluded2);
    return /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb.Item, _extends({
      key: idx
    }, itemRest, breadcrumbItemProps), name);
  }));
};
Breadcrumb.propTypes = {
  type: _propTypes.default.oneOf(['', 'primary']),
  breadcrumbs: _propTypes.default.array.isRequired,
  className: _propTypes.default.string
};
Breadcrumb.defaultProps = {
  type: 'primary',
  className: '',
  breadcrumbs: []
};
var _default = Breadcrumb;
exports.default = _default;