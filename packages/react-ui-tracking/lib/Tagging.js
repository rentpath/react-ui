"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Tagging =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Tagging, _PureComponent);

  function Tagging(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Tagging);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tagging).call(this, props, context));
    _this.tracker = context.tracker || {
      register: function register() {
        return null;
      },
      unregister: function unregister() {
        return null;
      },
      update: function update() {
        return null;
      }
    };
    return _this;
  }

  (0, _createClass2.default)(Tagging, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tracker.register(this);
      this.tracker.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.tracker.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tracker.unregister(this);
      this.tracker.update();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Tagging;
}(_react.PureComponent);

exports.default = Tagging;
(0, _defineProperty2.default)(Tagging, "contextTypes", {
  tracker: _propTypes.default.shape({
    register: _propTypes.default.func.isRequired,
    unregister: _propTypes.default.func.isRequired,
    update: _propTypes.default.func.isRequired
  })
});