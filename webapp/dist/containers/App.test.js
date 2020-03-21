"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _App = _interopRequireDefault(require("./App"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});
var PROPOSITION = 'proposition';
var PROPOSITION_VALUE = 'starspins';
describe('Given an App component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react["default"].createElement(_App["default"], {
      proposition: "starspins",
      trackEvent: function trackEvent() {
        return console.log('done!');
      }
    }));
  });
  describe('is renderered', function () {
    it('user is presented with proposition: '.concat(PROPOSITION_VALUE), function () {
      expect(wrapper.prop(PROPOSITION)).toEqual(PROPOSITION_VALUE);
    });
  });
});