"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _antd = require("antd");
require("./styles.scss");
var _excluded = ["options", "onChange", "className", "optionLabel", "filterOption", "optionFilterProp"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Option = _antd.Select.Option;
var Select = function Select(_ref) {
  var options = _ref.options,
    onChange = _ref.onChange,
    className = _ref.className,
    optionLabel = _ref.optionLabel,
    filterOption = _ref.filterOption,
    optionFilterProp = _ref.optionFilterProp,
    selectProps = _objectWithoutProperties(_ref, _excluded);
  var handleChange = function handleChange(value, option) {
    onChange(value, option);
  };
  return /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({}, selectProps, {
    onChange: handleChange,
    className: "custom-select ".concat(className),
    optionFilterProp: optionFilterProp,
    filterOption: filterOption
  }), options.map(function (opt) {
    return /*#__PURE__*/_react.default.createElement(Option, _extends({}, opt, {
      key: opt[optionLabel.value],
      value: opt[optionLabel.value]
    }), opt[optionLabel.label]);
  }));
};
Select.propTypes = {
  className: _propTypes.default.string,
  onChange: _propTypes.default.func,
  optionLabel: _propTypes.default.object,
  options: _propTypes.default.array,
  optionFilterProp: _propTypes.default.string,
  filterOption: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func])
};
Select.defaultProps = {
  className: '',
  options: [],
  onChange: function onChange(f) {
    return f;
  },
  optionLabel: {
    label: 'name',
    value: 'id'
  },
  optionFilterProp: 'children',
  filterOption: function filterOption(input, option) {
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }
};
var _default = Select;
exports.default = _default;