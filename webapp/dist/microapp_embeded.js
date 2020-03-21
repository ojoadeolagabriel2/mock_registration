"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.bundle = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _singleSpaReact = _interopRequireDefault(require("single-spa-react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("./containers/App"));

var _form = _interopRequireDefault(require("./store/reducer/form"));

var _flowReducer = _interopRequireDefault(require("./store/reducer/flowReducer"));

var _experienceContext = require("./context/experienceContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// default venture name
var PROPOSITION = 'starspins'; // setup store

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var rootReducer = (0, _redux.combineReducers)({
  form: _form["default"],
  flow: _flowReducer["default"]
});
var store = (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"])));

var bundle = function bundle() {
  return _react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, _react["default"].createElement(_experienceContext.ExperienceProvider, null, _react["default"].createElement(_App["default"], {
    proposition: PROPOSITION
  })));
};

exports.bundle = bundle;
var parcel = (0, _singleSpaReact["default"])({
  React: _react["default"],
  ReactDOM: _reactDom["default"],
  rootComponent: bundle
});
var _default = parcel;
exports["default"] = _default;