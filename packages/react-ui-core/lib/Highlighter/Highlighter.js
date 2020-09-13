"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _dec, _class, _class2, _temp;

var Highlighter = (_dec = (0, _reactThemed.default)(/^Highlighter/), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Highlighter, _PureComponent);

  function Highlighter() {
    (0, _classCallCheck2.default)(this, Highlighter);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Highlighter).apply(this, arguments));
  }

  (0, _createClass2.default)(Highlighter, [{
    key: "renderHighlightedText",
    value: function renderHighlightedText() {
      var _this = this;

      var _this$props = this.props,
          pattern = _this$props.pattern,
          children = _this$props.children;
      if (!pattern) return children;
      var highlightedIndex = 0;
      return children.split(this.pattern).map(function (string) {
        if (pattern.toLowerCase() === string.toLowerCase()) {
          var segment = _this.renderHighlightedSegment(string, highlightedIndex);

          highlightedIndex += 1;
          return segment;
        }

        return string;
      });
    }
  }, {
    key: "renderHighlightedSegment",
    value: function renderHighlightedSegment(string, index) {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          indexHighlighted = _this$props2.indexHighlighted,
          className = _this$props2.className;

      if (isNaN(indexHighlighted) || index === indexHighlighted) {
        return _react.default.createElement("span", {
          "data-tid": "highlighter-match-".concat(index),
          className: (0, _classnames.default)(theme['Highlighter-Match'], className),
          key: (0, _reactUiUtils.randomId)()
        }, string);
      }

      return string;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          className = _this$props3.className,
          indexHighlighted = _this$props3.indexHighlighted,
          pattern = _this$props3.pattern,
          ignoreCase = _this$props3.ignoreCase,
          renderer = _this$props3.renderer,
          props = (0, _objectWithoutProperties2.default)(_this$props3, ["theme", "className", "indexHighlighted", "pattern", "ignoreCase", "renderer"]);
      return renderer(_react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(theme.Highlighter, className)
      }, props), this.renderHighlightedText()));
    }
  }, {
    key: "pattern",
    get: function get() {
      // make characters literal instead of interpretting symbols as valid regex instructions
      // AKA sanitize input
      var pattern = this.props.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return RegExp("(".concat(pattern, ")"), this.props.ignoreCase ? 'i' : '');
    }
  }]);
  return Highlighter;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  pattern: _propTypes.default.string.isRequired,
  ignoreCase: _propTypes.default.bool,
  children: _propTypes.default.string.isRequired,
  theme: _propTypes.default.object,
  indexHighlighted: _propTypes.default.number,
  renderer: _propTypes.default.func
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  renderer: function renderer(node) {
    return node;
  }
}), _temp)) || _class);
exports.default = Highlighter;