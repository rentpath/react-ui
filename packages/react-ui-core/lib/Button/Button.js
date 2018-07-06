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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (_dec = (0, _reactThemed2.default)(/^Button/, {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          color = _props.color,
          theme = _props.theme,
          className = _props.className,
          NodeType = _props.nodeType,
          props = (0, _objectWithoutProperties3.default)(_props, ['size', 'color', 'theme', 'className', 'nodeType']);


      return _react2.default.createElement(NodeType, (0, _extends3.default)({
        'data-tid': 'button'
      }, props, {
        className: (0, _classnames2.default)(className, theme.Button, color && theme['Button-' + color], size && theme['Button-' + size])
      }));
    }
  }]);
  return Button;
}(_react.Component), _class2.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.string,
  color: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  nodeType: _propTypes2.default.string
}, _class2.defaultProps = {
  theme: {},
  nodeType: 'button'
}, _temp)) || _class);
exports.default = Button;