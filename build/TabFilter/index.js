"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = require("prop-types");
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DEFAULT_DATA = ['All', 'Stocking', 'OutOfStock', 'Deactive', 'Rejected'];
var TabsFilter = function TabsFilter(_ref) {
  var _ref$onClickActive = _ref.onClickActive,
    onClickActive = _ref$onClickActive === void 0 ? function () {
      return null;
    } : _ref$onClickActive,
    _ref$tabData = _ref.tabData,
    tabData = _ref$tabData === void 0 ? DEFAULT_DATA : _ref$tabData,
    _ref$additionInfo = _ref.additionInfo,
    additionInfo = _ref$additionInfo === void 0 ? {} : _ref$additionInfo,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? '' : _ref$status;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tags"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border"
  }), /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: 30
  }, tabData.map(function (prodStatus) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: prodStatus,
      className: (0, _classnames.default)('tag-item', {
        active: prodStatus.toLowerCase() === status.toLowerCase()
      }),
      onClick: function onClick() {
        return onClickActive(prodStatus);
      }
    }, prodStatus, ' ', "(".concat(additionInfo[prodStatus] || 0, ")"));
  })));
};
TabsFilter.propTypes = {
  onClickActive: _propTypes.func
};
var _default = /*#__PURE__*/_react.default.memo(TabsFilter);
exports.default = _default;