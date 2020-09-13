"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _Title = require("../Title");

var _Text = require("../Text");

var _Card = require("../Card");

var _Button = require("../Button");

var _dec, _class, _class2, _temp;

var buttonType = _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]);

var FilterCard = (_dec = (0, _reactThemed.default)(/^FilterCard/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(FilterCard, _PureComponent);

  function FilterCard() {
    (0, _classCallCheck2.default)(this, FilterCard);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FilterCard).apply(this, arguments));
  }

  (0, _createClass2.default)(FilterCard, [{
    key: "renderButton",
    value: function renderButton(button, DefaultButton) {
      var _parseArgs = (0, _reactUiUtils.parseArgs)(this.props[button], DefaultButton),
          _parseArgs2 = (0, _slicedToArray2.default)(_parseArgs, 2),
          FilterButton = _parseArgs2[0],
          props = _parseArgs2[1];

      return _react.default.createElement(FilterButton, (0, _extends2.default)({}, props, {
        value: this.props.value
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          children = _this$props.children,
          title = _this$props.title,
          description = _this$props.description,
          applyButton = _this$props.applyButton,
          cancelButton = _this$props.cancelButton,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "theme", "children", "title", "description", "applyButton", "cancelButton"]);
      return _react.default.createElement(_Card.Card, (0, _extends2.default)({
        className: (0, _classnames.default)(theme.FilterCard, className)
      }, props), (title || description) && _react.default.createElement("div", {
        className: theme.FilterCard_Header
      }, title && _react.default.createElement(_Title.Title, {
        className: theme.FilterCard_Title
      }, title), description && _react.default.createElement(_Text.Text, {
        className: theme.FilterCard_Description
      }, description)), _react.default.createElement("div", {
        className: theme.FilterCard_Body
      }, children, (applyButton || cancelButton) && _react.default.createElement("div", {
        className: theme.FilterCard_Buttons
      }, applyButton && this.renderButton('applyButton', _Button.ApplyButton), cancelButton && this.renderButton('cancelButton', _Button.CancelButton))));
    }
  }]);
  return FilterCard;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  children: _propTypes.default.node,
  title: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  description: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  applyButton: buttonType,
  cancelButton: buttonType,
  value: _propTypes.default.any
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
exports.default = FilterCard;