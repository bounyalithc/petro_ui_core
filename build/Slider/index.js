"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./styles.scss");
var _reactSlider = _interopRequireDefault(require("react-slider"));
var _icons = require("@ant-design/icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Slider = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var trackText = _ref.trackText,
    onFinish = _ref.onFinish,
    cooldownTime = _ref.cooldownTime,
    languageData = _ref.languageData,
    localConstanst = _ref.localConstanst;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    disabled = _useState4[0],
    setDisabled = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    cooldown = _useState6[0],
    setCooldown = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    cooldownInterval = _useState8[0],
    setCooldownInterval = _useState8[1];
  var sliderRef = (0, _react.useRef)(null);
  var blur = false;
  (0, _react.useEffect)(function () {
    var expireCooldownOtpMiliSeconds = localStorage.getItem(localConstanst);
    if (expireCooldownOtpMiliSeconds) {
      var currentMiliSeconds = new Date().getTime();
      if (expireCooldownOtpMiliSeconds > currentMiliSeconds) {
        var seconds = Math.ceil((expireCooldownOtpMiliSeconds - currentMiliSeconds) / 1000);
        if (seconds > 1) {
          startCooldown(seconds);
        }
      }
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (cooldown === 0 && cooldownInterval) {
      setDisabled(false);
      clearInterval(cooldownInterval);
      setCooldownInterval(null);
      localStorage.removeItem(localConstanst);
    }
  }, [cooldown, cooldownInterval]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      resetValue: function resetValue() {
        return _resetValue(value);
      },
      setTrueDisabled: function setTrueDisabled() {
        setDisabled(true);
      },
      setFalseDisabled: function setFalseDisabled() {
        setDisabled(false);
      },
      startCooldown: startCooldown,
      removeLocalCooldown: function removeLocalCooldown() {
        return localStorage.removeItem(localConstanst);
      }
    };
  });
  var _resetValue = function _resetValue(value) {
    setTimeout(function () {
      if (value > 0) {
        setDisabled(true);
        var step = value > 80 ? 3 : value > 50 ? 2 : value > 30 ? 1.5 : 1;
        var newVal = value - step;
        if (newVal < 0) {
          newVal = 0;
        }
        setValue(newVal);
        _resetValue(newVal);
      } else {
        setDisabled(false);
      }
    }, 0);
  };
  var startCooldown = function startCooldown(cdt) {
    if (!cdt) {
      cdt = cooldownTime;
    }
    localStorage.setItem(localConstanst, new Date().getTime() + cdt * 1000);
    setCooldown(cdt);
    if (cooldownInterval) {
      clearInterval(cooldownInterval);
      setCooldownInterval(null);
    }
    var interval = setInterval(function () {
      setDisabled(true);
      setCooldown(function (cooldown) {
        return cooldown - 1;
      });
    }, 1000);
    setCooldownInterval(interval);
  };
  var onChange = function onChange(val) {
    setValue(val);
    if (val >= 100) {
      blur = true;
      sliderRef.current.onBlur();
      if (onFinish) {
        onFinish();
      } else {
        _resetValue(100);
        startCooldown();
      }
    }
  };
  var onAfterChange = function onAfterChange(val) {
    if (blur) {
      blur = false;
      val = 100;
      return;
    }
    if (value > 0 && value < 100) {
      _resetValue(value);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "slider-wrapper-custom"
  }, /*#__PURE__*/_react.default.createElement(_reactSlider.default, {
    ref: sliderRef,
    className: "slider-custom",
    thumbClassName: "thumb-custom",
    trackClassName: "track-custom",
    snapDragDisabled: true,
    disabled: disabled,
    onChange: onChange,
    renderThumb: function renderThumb(props, state) {
      return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement(_icons.DoubleRightOutlined, null));
    },
    value: value,
    onAfterChange: onAfterChange
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "track-text"
  }, /*#__PURE__*/_react.default.createElement("span", null, cooldown > 0 ? "".concat(languageData.WAIT, " ").concat(cooldown, " ").concat(languageData.SECONDS_TO_GET_NEW_CODE) : trackText)));
});
Slider.defaultProps = {
  trackText: '',
  cooldownTime: 60,
  languageData: {
    WAIT: 'Wait',
    SECONDS_TO_GET_NEW_CODE: 'seconds to get new code'
  },
  localConstanst: 'BANANA_EXPIRED_COOLDOWN_OTP'
};
var _default = Slider;
exports.default = _default;