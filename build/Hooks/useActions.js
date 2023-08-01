"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _react = require("react");
var useActions = function useActions(actions) {
  var dispatch = (0, _reactRedux.useDispatch)();
  return (0, _react.useMemo)(function () {
    if (Array.isArray(actions)) {
      return actions.map(function (a) {
        return (0, _redux.bindActionCreators)(a, dispatch);
      });
    }
    return (0, _redux.bindActionCreators)(actions, dispatch);
  }, [actions, dispatch]);
};
var _default = useActions;
exports.default = _default;