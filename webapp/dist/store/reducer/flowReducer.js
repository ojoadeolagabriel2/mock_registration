"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ADDRESS_SEARCH_ACTION_TYPE = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flowState = {
  visible: false
};
var ADDRESS_SEARCH_ACTION_TYPE = {
  SHOW_DROPDOWN: 'show_dropdown',
  HIDE_DROPDOWN: 'hide_dropdown'
};
exports.ADDRESS_SEARCH_ACTION_TYPE = ADDRESS_SEARCH_ACTION_TYPE;

var flowReducer = function flowReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : flowState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      payload = _ref.payload,
      type = _ref.type;

  switch (type) {
    case ADDRESS_SEARCH_ACTION_TYPE.SHOW_DROPDOWN:
      return _objectSpread({}, state, {
        visible: payload.visible
      });

    case ADDRESS_SEARCH_ACTION_TYPE.HIDE_DROPDOWN:
      return _objectSpread({}, state, {
        visible: false
      });

    default:
      return state;
  }
};

var _default = flowReducer;
exports["default"] = _default;