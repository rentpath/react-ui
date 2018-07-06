'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactUiCore = require('@rentpath/react-ui-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownAnchorText = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(DropdownAnchorText, _PureComponent);

  function DropdownAnchorText() {
    (0, _classCallCheck3.default)(this, DropdownAnchorText);
    return (0, _possibleConstructorReturn3.default)(this, (DropdownAnchorText.__proto__ || (0, _getPrototypeOf2.default)(DropdownAnchorText)).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownAnchorText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          defaultText = _props.defaultText,
          icon = _props.icon;


      return [_react2.default.createElement(
        _reactUiCore.Text,
        { key: 'dropdown-anchor-text' },
        text || defaultText
      ), _react2.default.createElement(
        'span',
        { key: 'dropdown-anchor-icon' },
        icon
      )];
    }
  }]);
  return DropdownAnchorText;
}(_react.PureComponent), _class.propTypes = {
  text: _propTypes2.default.string,
  defaultText: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.node
}, _class.defaultProps = {
  icon: '⌄'
}, _temp);
exports.default = DropdownAnchorText;