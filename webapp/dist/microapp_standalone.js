"use strict";

var _react = _interopRequireDefault(require("react"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactDom = require("react-dom");

var _form = _interopRequireDefault(require("./store/reducer/form"));

var _App = _interopRequireDefault(require("./containers/App"));

var _flowReducer = _interopRequireDefault(require("./store/reducer/flowReducer"));

var _experienceContext = require("./context/experienceContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var QUERY_SEARCH_PARAMS = window.location.search;
var QUERY_SEARCH_PARAMS_OBJ = {
  locale: 'en_GB',
  layout: 'default'
}; // prepare query params

if (QUERY_SEARCH_PARAMS) {
  QUERY_SEARCH_PARAMS.substring(1).split('&').forEach(function (param) {
    var _param$split = param.split('='),
        _param$split2 = _slicedToArray(_param$split, 2),
        key = _param$split2[0],
        value = _param$split2[1];

    QUERY_SEARCH_PARAMS_OBJ[key] = value;
  });
} // default venture name


var PROPOSITION = 'starspins'; // experience

var contract = {
  queryParams: QUERY_SEARCH_PARAMS_OBJ
}; // setup store

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var rootReducer = (0, _redux.combineReducers)({
  form: _form["default"],
  flow: _flowReducer["default"]
});
var store = (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"]))); // render standalone app

(0, _reactDom.render)(_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, _react["default"].createElement(_experienceContext.ExperienceProvider, {
  contract: contract
}, _react["default"].createElement(_App["default"], {
  proposition: PROPOSITION
}))), document.getElementById('root'));