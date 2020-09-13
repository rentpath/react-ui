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

var _dec, _class, _class2, _temp;

var RatingBar = (_dec = (0, _reactThemed.default)(/^(RatingBar|Label)/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(RatingBar, _PureComponent);

  function RatingBar() {
    (0, _classCallCheck2.default)(this, RatingBar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RatingBar).apply(this, arguments));
  }

  (0, _createClass2.default)(RatingBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          label = _this$props.label,
          className = _this$props.className,
          score = _this$props.score,
          maxScore = _this$props.maxScore,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "label", "className", "score", "maxScore"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(theme.RatingBar, className)
      }, props), this.ratingItems, label && _react.default.createElement("div", {
        className: theme.Label
      }, label));
    }
  }, {
    key: "ratingItems",
    get: function get() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          score = _this$props2.score,
          maxScore = _this$props2.maxScore;
      var calcScore = score / maxScore;
      var scorePercent = (calcScore > 1 ? 1 : calcScore) * 100;
      return _react.default.createElement("div", {
        className: theme.RatingBar_Background
      }, !!scorePercent && _react.default.createElement("div", {
        className: theme.RatingBar_Icons,
        style: {
          width: "".concat(scorePercent, "%")
        }
      }));
    }
  }]);
  return RatingBar;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  maxScore: _propTypes.default.number,
  score: _propTypes.default.number,
  label: _propTypes.default.string
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  score: 0,
  maxScore: 5
}), _temp)) || _class);
exports.default = RatingBar;