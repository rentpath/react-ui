'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactUiUtils = require('@rentpath/react-ui-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Highlighter = (_dec = (0, _reactThemed2.default)(/^Highlighter/), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Highlighter, _Component);

  function Highlighter() {
    (0, _classCallCheck3.default)(this, Highlighter);
    return (0, _possibleConstructorReturn3.default)(this, (Highlighter.__proto__ || (0, _getPrototypeOf2.default)(Highlighter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Highlighter, [{
    key: 'renderHighlightedText',
    value: function renderHighlightedText() {
      var _this2 = this;

      var _props = this.props,
          pattern = _props.pattern,
          children = _props.children;


      if (!pattern) return children;

      var segments = children.split(pattern);

      return segments.reduce(function (prev, curr, index) {
        return [prev, _this2.renderHighlightedSegment(index), curr];
      });
    }
  }, {
    key: 'renderHighlightedSegment',
    value: function renderHighlightedSegment(index) {
      var _props2 = this.props,
          pattern = _props2.pattern,
          theme = _props2.theme,
          indexHighlighted = _props2.indexHighlighted,
          className = _props2.className;


      if (!indexHighlighted || index === indexHighlighted) {
        return _react2.default.createElement(
          'span',
          {
            'data-tid': 'highlighter-match-' + index,
            className: (0, _classnames2.default)(theme['Highlighter-Match'], className),
            key: (0, _reactUiUtils.randomId)()
          },
          pattern
        );
      }
      return pattern;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          theme = _props3.theme,
          className = _props3.className,
          indexHighlighted = _props3.indexHighlighted,
          pattern = _props3.pattern,
          props = (0, _objectWithoutProperties3.default)(_props3, ['theme', 'className', 'indexHighlighted', 'pattern']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.Highlighter, className)
        }, props),
        this.renderHighlightedText()
      );
    }
  }, {
    key: 'indexHighlighted',
    get: function get() {
      return this.props.indexHighlighted + 1;
    }
  }]);
  return Highlighter;
}(_react.Component), _class2.propTypes = {
  className: _propTypes2.default.string,
  pattern: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  indexHighlighted: _propTypes2.default.number
}, _class2.defaultProps = {
  text: '',
  children: '',
  theme: {}
}, _temp)) || _class);
exports.default = Highlighter;