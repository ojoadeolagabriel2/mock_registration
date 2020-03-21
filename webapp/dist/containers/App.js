"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _terminalLog = _interopRequireDefault(require("terminal-log"));

var _App = _interopRequireDefault(require("./App.style"));

var _address = _interopRequireDefault(require("../components/address/address"));

var _experienceContext = require("../context/experienceContext");

var _usePost = _interopRequireDefault(require("../store/hooks/usePost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Micro-app entry-point
 * @param {*} proposition venture name
 */
var App = function App(_ref) {
  var proposition = _ref.proposition;
  var experience = (0, _experienceContext.useExperience)();
  (0, _usePost["default"])({
    url: 'https://www.google.com',
    payload: {
      id: 1
    },
    config: {
      headers: {
        'X-PAYLOAD': '10001'
      }
    },
    onComplete: function onComplete(result) {
      _terminalLog["default"].info(result);
    }
  });
  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("br", null), _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement(_App["default"], null), "Contact & Security", _react["default"].createElement("br", null), "app: ", proposition, " ", experience.queryParams.locale, _react["default"].createElement("br", null), _react["default"].createElement(_address["default"], {
    name: "searchBar",
    label: "Search"
  }), _react["default"].createElement("br", null))));
};

App.propTypes = {
  proposition: _propTypes["default"].string.isRequired
};
var _default = App;
exports["default"] = _default;