"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useFetch = _interopRequireDefault(require("../../store/hooks/useFetch"));

var _form = require("../../store/reducer/form");

var _flowReducer = require("../../store/reducer/flowReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CHECK_LENGTH = 3;
var TEST_ADDRESS = 'n165ua';

var AddressSearch = function AddressSearch(_ref) {
  var name = _ref.name;
  var field = (0, _reactRedux.useSelector)(function (state) {
    return state.form[name];
  });
  var flow = (0, _reactRedux.useSelector)(function (state) {
    return state.flow;
  });
  var res = (0, _useFetch["default"])('/addresses/lookup', {});
  var dispatcher = (0, _reactRedux.useDispatch)();

  if (res.isLoading) {
    return _react["default"].createElement("div", null, "Loading...");
  }

  function processChange(event) {
    var address = event.target.value;

    if (address.length >= CHECK_LENGTH && address === TEST_ADDRESS) {
      dispatcher({
        type: _form.FORM_REDUCER_ACTION_TYPE.UPDATE_FIELD,
        payload: {
          fieldName: name,
          value: event.target.value,
          status: _form.STATUS.UPDATED
        }
      });

      if (address === TEST_ADDRESS) {
        dispatcher({
          type: _flowReducer.ADDRESS_SEARCH_ACTION_TYPE.SHOW_DROPDOWN,
          payload: {
            visible: true
          }
        });
      }
    }
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("br", null), _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement("label", {
    htmlFor: name
  }, "Enter ", _react["default"].createElement("span", {
    className: "badge badge-secondary"
  }, "UK"), " postcode"), _react["default"].createElement("input", {
    id: name,
    value: field.value,
    onChange: processChange,
    type: "email",
    className: "form-control",
    "aria-describedby": "emailHelp"
  }), _react["default"].createElement("small", {
    id: "emailHelp",
    className: "form-text text-muted"
  }, "We will never share your postcode with anyone.")), _react["default"].createElement("br", null), flow.visible && _react["default"].createElement("div", null, " searching... "));
};

AddressSearch.propTypes = {
  name: _propTypes["default"].string.isRequired
};
var _default = AddressSearch;
exports["default"] = _default;