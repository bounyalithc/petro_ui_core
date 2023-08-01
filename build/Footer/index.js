"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
require("./styles.scss");
var _DownloadMobile = _interopRequireDefault(require("../DownloadMobile"));
var _LazyImage = _interopRequireDefault(require("../LazyImage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var FooterAntd = _antd.Layout.Footer;
var Footer = function Footer(_ref) {
  var appStoreSrc = _ref.appStoreSrc,
    googlePlaySrc = _ref.googlePlaySrc,
    contactInfo = _ref.contactInfo,
    languageData = _ref.languageData,
    links = _ref.links;
  return /*#__PURE__*/_react.default.createElement(FooterAntd, {
    id: "banana-footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "banana-footer-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-column customer-care"
  }, /*#__PURE__*/_react.default.createElement("h3", null, languageData.CUSTOMER_CARE), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-column-content"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 6,
    direction: "vertical"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "hotline",
    href: "tel:".concat(contactInfo.hotline)
  }, languageData.CUSTOMER_CARE_HOTLINE, ": ", contactInfo.hotline), /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:".concat(contactInfo.customerSupport)
  }, languageData.CUSTOMER_SUPPORT, ": ", contactInfo.customerSupport)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-column about"
  }, /*#__PURE__*/_react.default.createElement("h3", null, languageData.ABOUT_US), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-column-content"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 6,
    direction: "vertical"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: links.aboutBanana
  }, languageData.ABOUT_BANANA_SHOP), /*#__PURE__*/_react.default.createElement("a", {
    href: links.policyPrivacy
  }, languageData.POLICY_PRIVACY)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-column follow-us"
  }, /*#__PURE__*/_react.default.createElement("h3", null, languageData.FOLLOW_US), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-column-content"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 10
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: links.fb
  }, /*#__PURE__*/_react.default.createElement(_LazyImage.default, {
    src: "/social-images/fb.png"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: links.tw
  }, /*#__PURE__*/_react.default.createElement(_LazyImage.default, {
    src: "/social-images/tw.png"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: links.lk
  }, /*#__PURE__*/_react.default.createElement(_LazyImage.default, {
    src: "/social-images/lk.png"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: links.pin
  }, /*#__PURE__*/_react.default.createElement(_LazyImage.default, {
    src: "/social-images/pin.png"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: links.be
  }, /*#__PURE__*/_react.default.createElement(_LazyImage.default, {
    src: "/social-images/be.png"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-column download"
  }, /*#__PURE__*/_react.default.createElement("h3", null, languageData.DOWNLOAD_MOBILE_APP), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-column-content"
  }, /*#__PURE__*/_react.default.createElement(_DownloadMobile.default, {
    appStoreSrc: appStoreSrc,
    googlePlaySrc: googlePlaySrc
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-location"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 20.22,
    align: "start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "location-image"
  }, /*#__PURE__*/_react.default.createElement(_LazyImage.default, {
    src: "/images/location-pin.png"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "address-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 32
  }, /*#__PURE__*/_react.default.createElement("h3", null, languageData.OFFICE_ADDRESS, ": ", contactInfo.officeAddress)), /*#__PURE__*/_react.default.createElement("div", {
    className: "address"
  }, /*#__PURE__*/_react.default.createElement("span", null, contactInfo.officeAddress)))))));
};
Footer.defaultProps = {
  appStoreSrc: '/images/appstore.png',
  googlePlaySrc: '/images/googleplay.png',
  contactInfo: {
    hotline: '555 - 555444',
    officeAddress: '123 Wall Street, Laos',
    customerSupport: 'customer@bananashop.com',
    securityReport: 'security@bananashop.com'
  },
  languageData: {},
  links: {}
};
var _default = Footer;
exports.default = _default;