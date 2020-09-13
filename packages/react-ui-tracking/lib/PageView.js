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

var PageView =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(PageView, _PureComponent);

  function PageView(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, PageView);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PageView).call(this, props, context));
    _this.tracker = context.tracker || {
      pageView: function pageView() {
        return null;
      }
    };
    return _this;
  }

  (0, _createClass2.default)(PageView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tracker.pageView(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.tracker.pageView(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return PageView;
}(_react.PureComponent);

exports.default = PageView;
(0, _defineProperty2.default)(PageView, "contextTypes", {
  tracker: _propTypes.default.shape({
    pageView: _propTypes.default.func.isRequired
  })
});