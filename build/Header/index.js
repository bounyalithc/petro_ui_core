"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _index = require("../index");
require("./styles.scss");
var _Utilities = require("../Utilities");
var _Cookie = _interopRequireDefault(require("../Cookie"));
var _COOKIE_ENUM = _interopRequireDefault(require("../COOKIE_ENUM"));
var _Image = _interopRequireDefault(require("../Image"));
var _UserInfoMenu = _interopRequireDefault(require("./components/UserInfoMenu"));
var _classnames = _interopRequireDefault(require("classnames"));
var _DownloadMobile = _interopRequireDefault(require("../DownloadMobile"));
var _MyCart = _interopRequireDefault(require("./components/MyCart"));
var _Dropdown = _interopRequireDefault(require("../Dropdown"));
var _MyNotification = _interopRequireDefault(require("./components/MyNotification"));
var _MyMessage = _interopRequireDefault(require("./components/MyMessage"));
var _MenuLogin = _interopRequireDefault(require("../MenuLogin"));
var _CheckMyOrderStatus = _interopRequireDefault(require("./components/CheckMyOrderStatus"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HeaderAntd = _antd.Layout.Header;
var Header = function Header(_ref) {
  var location = _ref.location,
    onChangeSearch = _ref.onChangeSearch,
    onSearch = _ref.onSearch,
    dropdownKeySearch = _ref.dropdownKeySearch,
    onClickLogo = _ref.onClickLogo,
    onClickLogin = _ref.onClickLogin,
    onClickSignup = _ref.onClickSignup,
    handleSelectChange = _ref.handleSelectChange,
    count = _ref.count,
    userInfoMenuProps = _ref.userInfoMenuProps,
    languageData = _ref.languageData,
    languageOptions = _ref.languageOptions,
    menuMyCart = _ref.menuMyCart,
    menuMyNotification = _ref.menuMyNotification,
    menuMyMessage = _ref.menuMyMessage,
    onClickCheckMyOrder = _ref.onClickCheckMyOrder;
  var _useState = (0, _react.useState)(_Cookie.default.getCookie(_COOKIE_ENUM.default.BANANA_LANGUAGE) || 'en'),
    _useState2 = _slicedToArray(_useState, 2),
    language = _useState2[0],
    setLanguage = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var searchWrapperRef = (0, _react.useRef)(null);
  var searchRef = (0, _react.useRef)(null);
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    visibleDropdownSearch = _useState6[0],
    setVisibleDropdownSearch = _useState6[1];
  (0, _react.useEffect)(function () {
    if (visibleDropdownSearch) {
      setVisibleDropdownSearch(false);
    }
    if (location.pathname.indexOf('/search') > -1) {
      var queryTerm = (0, _Utilities.getParamFromUrlSearch)('q');
      handleChangeSearch(queryTerm);
    } else if (location.pathname.indexOf('/category') > -1) {
      handleChangeSearch('');
    }
  }, [location]);
  (0, _react.useEffect)(function () {
    if (searchRef && searchRef.current) {
      searchRef.current.forceUpdate();
    }
  }, [languageData]);
  var onSelectChange = function onSelectChange(val) {
    _Cookie.default.setCookie(_COOKIE_ENUM.default.BANANA_LANGUAGE, val);
    setLanguage(val);
    handleSelectChange(val);
  };
  var handleChangeSearch = function handleChangeSearch(val) {
    setSearchTerm(val);
    onChangeSearch(val);
  };
  return /*#__PURE__*/_react.default.createElement(HeaderAntd, {
    id: "banana-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "first-row"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 25
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    overlay: /*#__PURE__*/_react.default.createElement(_CheckMyOrderStatus.default, {
      languageData: languageData,
      onClick: onClickCheckMyOrder
    })
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "a-item"
  }, languageData.CHECK_MY_ORDER_STATUS)), /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    overlay: /*#__PURE__*/_react.default.createElement(_DownloadMobile.default, {
      className: "download-mobile-popup"
    })
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "a-item"
  }, languageData.DOWNLOAD_MOBILE_APP)), /*#__PURE__*/_react.default.createElement("a", {
    className: "a-item"
  }, languageData.BECOME_A_SELLER), /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 16
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "a-item"
  }, languageData.HELP_CENTER), /*#__PURE__*/_react.default.createElement(_index.Select, {
    className: "select-language",
    value: language,
    options: languageOptions,
    onChange: onSelectChange
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('second-row', {
      'has-user': !!userInfoMenuProps.userInfo
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "second-row-left"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "search-logo-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-website-wrapper",
    onClick: onClickLogo
  }, /*#__PURE__*/_react.default.createElement(_index.LazyImage, {
    src: "/images/logo_horizontal_color.png"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-wrapper",
    ref: searchWrapperRef
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    visible: visibleDropdownSearch,
    overlay: dropdownKeySearch,
    trigger: ['click'],
    onVisibleChange: function onVisibleChange(visible) {
      return setVisibleDropdownSearch(visible);
    }
  }, /*#__PURE__*/_react.default.createElement(_index.Search, {
    ref: searchRef,
    value: searchTerm,
    onChange: function onChange(e) {
      return handleChangeSearch(e.target.value);
    },
    placeholder: languageData.SEARCH_FOR_PRODUCT_BRAND,
    onSearch: onSearch
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "second-row-right"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: userInfoMenuProps.userInfo ? 24 : 37
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 16
  }, /*#__PURE__*/_react.default.createElement(_MyNotification.default, {
    languageData: languageData,
    count: count.notification,
    menu: userInfoMenuProps.userInfo ? menuMyNotification : /*#__PURE__*/_react.default.createElement(_MenuLogin.default, {
      src: "/images/no-notification.png",
      languageData: languageData,
      text: languageData.PLEASE_LOG_IN_TO_VIEW_YOUR_NOTIFICATION,
      onClickLogin: onClickLogin,
      onClickSignUp: onClickSignup
    })
  }), /*#__PURE__*/_react.default.createElement(_MyMessage.default, {
    languageData: languageData,
    count: count.message,
    menu: userInfoMenuProps.userInfo ? menuMyMessage : /*#__PURE__*/_react.default.createElement(_MenuLogin.default, {
      src: "/images/no-message.png",
      languageData: languageData,
      text: languageData.PLEASE_LOG_IN_TO_VIEW_YOUR_MESSAGE,
      onClickLogin: onClickLogin,
      onClickSignUp: onClickSignup
    })
  }), /*#__PURE__*/_react.default.createElement(_MyCart.default, {
    languageData: languageData,
    count: count.cart,
    menu: menuMyCart
  })), !userInfoMenuProps.userInfo ? /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 37
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: onClickLogin
  }, languageData.LOGIN), /*#__PURE__*/_react.default.createElement(_index.Button, {
    onClick: onClickSignup,
    size: "large"
  }, languageData.SIGN_UP)) : /*#__PURE__*/_react.default.createElement(_UserInfoMenu.default, _extends({}, userInfoMenuProps, {
    languageData: languageData
  })))))));
};
Header.defaultProps = {
  location: typeof window !== 'undefined' ? window.location : {
    pathname: ''
  },
  onChangeSearch: function onChangeSearch(val) {},
  onSearch: function onSearch(value, event) {},
  onClickLogin: function onClickLogin() {},
  onClickSignup: function onClickSignup() {},
  handleSelectChange: function handleSelectChange(val) {},
  count: {
    notification: 0,
    message: 0,
    cart: 0
  },
  userInfoMenuProps: {
    userInfo: null
  },
  languageData: {},
  onClickCheckMyOrder: function onClickCheckMyOrder() {},
  menuMyCart: /*#__PURE__*/_react.default.createElement("div", null),
  menuMyNotification: /*#__PURE__*/_react.default.createElement("div", null),
  menuMyMessage: /*#__PURE__*/_react.default.createElement("div", null),
  languageOptions: [{
    id: 'en',
    name: /*#__PURE__*/_react.default.createElement(_antd.Space, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "language-item-image"
    }, /*#__PURE__*/_react.default.createElement(_Image.default, {
      src: "/images/la-eng.svg"
    })), /*#__PURE__*/_react.default.createElement("span", null, "English"))
  }, {
    id: 'lo',
    name: /*#__PURE__*/_react.default.createElement(_antd.Space, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "language-item-image"
    }, /*#__PURE__*/_react.default.createElement(_Image.default, {
      src: "/images/la-laos.svg"
    })), /*#__PURE__*/_react.default.createElement("span", null, "Laos"))
  }],
  dropdownKeySearch: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)
};
var _default = Header;
exports.default = _default;