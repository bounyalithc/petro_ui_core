"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDDMMYY = exports.TIME_DEFAULT = exports.TIME_COMPUTE = void 0;
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TIME_DEFAULT = {
  MIN_TIME: 0,
  MAX_TIMES: 59,
  MAX_HOURS: 23,
  RANGE_MONTH: 'RANGE_MONTH',
  RANGE_LAST_MONTH: 'RANGE_LAST_MONTH',
  RANGE_WEEK: 'RANGE_WEEK',
  TIME_UNIT_WEEK: 'week',
  TIME_UNIT_MONTH: 'month',
  FULL_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss'
};
exports.TIME_DEFAULT = TIME_DEFAULT;
var formatDDMMYY = function formatDDMMYY(isoTime) {
  var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  if (isoTime) {
    return (0, _moment.default)(isoTime).format("DD".concat(gap, "MM").concat(gap, "YYYY"));
  }
  return '';
};
exports.formatDDMMYY = formatDDMMYY;
var TIME_COMPUTE = {
  isInValidTime: function isInValidTime(time) {
    return !time || !(0, _moment.default)(time).isValid();
  },
  getMinTime: function getMinTime(time) {
    if (TIME_COMPUTE.isInValidTime(time)) return '';
    var result = (0, _moment.default)(time).toDate();
    result.setHours(TIME_DEFAULT.MIN_TIME);
    result.setMinutes(TIME_DEFAULT.MIN_TIME);
    result.setSeconds(TIME_DEFAULT.MIN_TIME);
    result.setMilliseconds(TIME_DEFAULT.MIN_TIME);
    return result.toISOString();
  },
  getMaxTime: function getMaxTime(time) {
    if (TIME_COMPUTE.isInValidTime(time)) return '';
    var result = (0, _moment.default)(time).toDate();
    result.setHours(TIME_DEFAULT.MAX_HOURS);
    result.setMinutes(TIME_DEFAULT.MAX_TIMES);
    result.setSeconds(TIME_DEFAULT.MAX_TIMES);
    result.setMilliseconds(TIME_DEFAULT.MAX_TIMES);
    return result.toISOString();
  },
  getRangeDateByUnitTime: function getRangeDateByUnitTime() {
    var unitTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TIME_DEFAULT.TIME_UNIT_MONTH;
    return [TIME_COMPUTE.getMinTime((0, _moment.default)().startOf(unitTime)), TIME_COMPUTE.getMaxTime((0, _moment.default)().endOf(unitTime))];
  },
  getPrevRangeDateByUnitTime: function getPrevRangeDateByUnitTime() {
    var unitTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TIME_DEFAULT.TIME_UNIT_MONTH;
    var regularUnit = "".concat(unitTime, "s");
    var fromDate = (0, _moment.default)().subtract(1, regularUnit).startOf(unitTime);
    var toDate = (0, _moment.default)().subtract(1, regularUnit).endOf(unitTime);
    return [TIME_COMPUTE.getMinTime(fromDate), TIME_COMPUTE.getMaxTime(toDate)];
  },
  isToDayInRangeDate: function isToDayInRangeDate(startDate, endDate) {
    var todayFormat = (0, _moment.default)().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    var startDateFormat = (0, _moment.default)(startDate).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    var endDateFormat = (0, _moment.default)(endDate).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    return (0, _moment.default)(todayFormat).isBetween(startDateFormat, endDateFormat);
  },
  toDayIsAfterDay: function toDayIsAfterDay(date) {
    var dateFormat = (0, _moment.default)(date).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    var toDayFormat = (0, _moment.default)();
    return toDayFormat.isAfter(dateFormat);
  },
  toDayBeforeDay: function toDayBeforeDay(date) {
    var dateFormat = (0, _moment.default)(date).utc().format(TIME_DEFAULT.FULL_TIME_FORMAT);
    var toDayFormat = (0, _moment.default)();
    return toDayFormat.isBefore(dateFormat);
  }
};
exports.TIME_COMPUTE = TIME_COMPUTE;