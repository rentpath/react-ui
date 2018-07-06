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

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _Form = require('../../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = (_dec = (0, _reactThemed2.default)(['Label_Textarea'], {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(Message, _PureComponent);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Form.Field, this.props);
    }
  }]);
  return Message;
}(_react.PureComponent), _class2.propTypes = {
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func])
}, _class2.defaultProps = {
  theme: {},
  name: 'message',
  type: 'textarea'
}, _temp)) || _class);
exports.default = Message;