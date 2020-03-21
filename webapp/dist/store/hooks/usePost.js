"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _terminalLog = _interopRequireDefault(require("terminal-log"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * @param url
 * @param payload
 * @param config
 * @param onComplete
 * @param onError
 */
var usePost = function usePost(_ref) {
  var url = _ref.url,
      payload = _ref.payload,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      _ref$onComplete = _ref.onComplete,
      onComplete = _ref$onComplete === void 0 ? function () {} : _ref$onComplete,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? function () {} : _ref$onError;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var dispatch = (0, _reactRedux.useDispatch)();

  _terminalLog["default"].info("is processing: ".concat(isLoading));

  _axios["default"].post(url, payload, config).then(function (result) {
    onComplete(result);
    setLoading(false);

    _terminalLog["default"].info("is processing: ".concat(isLoading));
  })["catch"](function (err) {
    onError(err);
    setLoading(false);

    _terminalLog["default"].info("is processing: ".concat(isLoading)); // track event on axios failures


    dispatch({
      type: 'FAILED_AXIOS_POST_CALL',
      payload: payload
    });
  });
};

usePost.propTypes = {
  url: _propTypes["default"].string.isRequired,
  payload: _propTypes["default"].arrayOf(_propTypes["default"].string)
};
var _default = usePost;
exports["default"] = _default;