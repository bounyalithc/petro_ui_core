"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./styles.scss");
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _excluded = ["type", "dots", "classNameArrow", "prevIcon", "nextIcon", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PrevArrow = function PrevArrow(props) {
  var className = props.className,
    addClassName = props.addClassName,
    style = props.style,
    onClick = props.onClick,
    icon = props.icon;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [className, addClassName].join(' '),
    onClick: onClick
  }, icon);
};
var NextArrow = function NextArrow(props) {
  var className = props.className,
    addClassName = props.addClassName,
    style = props.style,
    onClick = props.onClick,
    icon = props.icon;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: [className, addClassName].join(' '),
    onClick: onClick
  }, icon);
};
var Carousel = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var type = _ref.type,
    dots = _ref.dots,
    classNameArrow = _ref.classNameArrow,
    prevIcon = _ref.prevIcon,
    nextIcon = _ref.nextIcon,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var carouselAntdRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      goTo: function goTo(idx) {
        var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (carouselAntdRef && carouselAntdRef.current) {
          carouselAntdRef.current.goTo(idx, dontAnimate);
        }
      }
    };
  });
  var props = _objectSpread(_objectSpread({}, rest), {}, {
    dots: dots,
    arrows: true,
    nextArrow: /*#__PURE__*/_react.default.createElement(NextArrow, {
      icon: nextIcon,
      addClassName: classNameArrow
    }),
    prevArrow: /*#__PURE__*/_react.default.createElement(PrevArrow, {
      icon: prevIcon,
      addClassName: classNameArrow
    })
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-custom-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_antd.Carousel, _extends({
    ref: carouselAntdRef,
    className: "carousel-custom ".concat(type)
  }, props), children));
});
Carousel.defaultProps = {
  type: 'primary',
  dots: false,
  classNameArrow: 'banner',
  prevIcon: /*#__PURE__*/_react.default.createElement(_icons.LeftOutlined, null),
  nextIcon: /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, null)
};
var _default = Carousel;
exports.default = _default;