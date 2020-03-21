"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultFields = exports.FORM_REDUCER_ACTION_TYPE = exports.STATUS = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STATUS = {
  NEW: 'new',
  UPDATED: 'updated',
  INVALID: 'invalid'
};
exports.STATUS = STATUS;
var FORM_REDUCER_ACTION_TYPE = {
  UPDATE_FIELD: 'update_field',
  CLEAR_FIELD: 'clear_field',
  INVALID_FIELD: 'invalid_field'
};
exports.FORM_REDUCER_ACTION_TYPE = FORM_REDUCER_ACTION_TYPE;
var defaultFields = {
  email: {
    status: STATUS.NEW
  },
  title: {
    status: STATUS.NEW
  },
  firstName: {
    status: STATUS.NEW
  },
  middleName: {
    status: STATUS.NEW
  },
  addressSearch: {
    status: STATUS.NEW,
    color: 'RED'
  },
  street1: {
    status: STATUS.NEW
  },
  street2: {
    status: STATUS.NEW
  },
  town: {
    status: STATUS.NEW
  }
};
exports.defaultFields = defaultFields;

var formReducer = function formReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFields;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      payload = _ref.payload,
      type = _ref.type;

  switch (type) {
    case FORM_REDUCER_ACTION_TYPE.UPDATE_FIELD:
      return _objectSpread({}, state, _defineProperty({}, payload.fieldName, _objectSpread({}, state[payload.fieldName], {}, payload.status)));

    case FORM_REDUCER_ACTION_TYPE.CLEAR_FIELD:
      return _objectSpread({}, state, _defineProperty({}, payload.fieldName, _objectSpread({}, state[payload.fieldName], {}, payload.status)));

    case FORM_REDUCER_ACTION_TYPE.INVALID_FIELD:
      return _objectSpread({}, state, _defineProperty({}, payload.fieldName, _objectSpread({}, state[payload.fieldName], {}, payload.status)));

    default:
      return state;
  }
};

var _default = formReducer;
exports["default"] = _default;