"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Utilities = require("../Utilities");
var _LocalStorage = _interopRequireDefault(require("../LocalStorage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Cookie = /*#__PURE__*/function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }
  _createClass(Cookie, null, [{
    key: "getCookie",
    value: function getCookie(cname) {
      if (_Utilities.isLocalHost) {
        return _LocalStorage.default.getItem(cname);
      }
      var name = cname + '=';
      var decodedCookie = typeof document !== 'undefined' ? decodeURIComponent(document.cookie) : '';
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }
  }, {
    key: "setCookie",
    value: function setCookie(cname, cvalue) {
      var exdays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
      var domain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : process.env.REACT_APP_HOST_DOMAIN;
      if (_Utilities.isLocalHost) {
        return _LocalStorage.default.setItem(cname, cvalue);
      }
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = 'expires=' + d.toUTCString();
      if (typeof document !== 'undefined') {
        document.cookie = cname + '=' + cvalue + ';' + expires + ";domain=.".concat(domain, ";path=/");
      }
    }
  }, {
    key: "removeCookie",
    value: function removeCookie(cname) {
      if (_Utilities.isLocalHost) {
        return _LocalStorage.default.removeItem(cname);
      }
      this.setCookie(cname, '', -10);
    }
  }]);
  return Cookie;
}();
var _default = Cookie;
exports.default = _default;