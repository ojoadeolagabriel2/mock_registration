"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addressSearch = _interopRequireDefault(require("./addressSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Address = function Address() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_addressSearch["default"], {
    name: "addressSearch"
  }));
};

var _default = Address;
exports["default"] = _default;