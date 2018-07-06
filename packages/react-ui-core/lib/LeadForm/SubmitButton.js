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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitButton = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(SubmitButton, _PureComponent);

  function SubmitButton() {
    (0, _classCallCheck3.default)(this, SubmitButton);
    return (0, _possibleConstructorReturn3.default)(this, (SubmitButton.__proto__ || (0, _getPrototypeOf2.default)(SubmitButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(SubmitButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['type', 'children']);


      return _react2.default.createElement(
        _Button.Button,
        (0, _extends3.default)({
          name: name,
          type: type,
          'data-tid': 'lead-form-submit'
        }, props),
        children
      );
    }
  }]);
  return SubmitButton;
}(_react.PureComponent), _class.propTypes = {
  type: _propTypes2.default.string,
  children: _propTypes2.default.any
}, _class.defaultProps = {
  type: 'submit',
  children: 'Send'
}, _temp);
exports.default = SubmitButton;