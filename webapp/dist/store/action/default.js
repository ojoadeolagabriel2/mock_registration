"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var formAction = function formAction(actionType, fieldData) {
  return {
    type: actionType,
    payload: fieldData
  };
};

var _default = formAction;
exports["default"] = _default;