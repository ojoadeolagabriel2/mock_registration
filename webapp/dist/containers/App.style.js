"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    body {\n        box-sizing: border-box;\n        margin: 10;\n        padding: 10;\n        font-family:Helvetica, Arial, sans-serif;\n    }\n\n    *,\n    ::before,\n    ::after {\n        box-sizing: inherit;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.createGlobalStyle)(_templateObject());

exports["default"] = _default;