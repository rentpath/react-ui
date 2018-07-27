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

var Textarea = (_dec = (0, _reactThemed2.default)(/^Textarea/, {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Textarea, _Component);

  function Textarea() {
    (0, _classCallCheck3.default)(this, Textarea);
    return (0, _possibleConstructorReturn3.default)(this, (Textarea.__proto__ || (0, _getPrototypeOf2.default)(Textarea)).apply(this, arguments));
  }

  (0, _createClass3.default)(Textarea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'className']);


      return _react2.default.createElement('textarea', (0, _extends3.default)({}, props, {
        className: (0, _classnames2.default)(className, theme.Textarea)
      }));
    }
  }]);
  return Textarea;
}(_react.Component), _class2.propTypes = {
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string
}, _class2.defaultProps = {
  theme: {}
}, _temp)) || _class);
exports.default = Textarea;