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

var _Form = require('../../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoveInDate = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(MoveInDate, _PureComponent);

  function MoveInDate() {
    (0, _classCallCheck3.default)(this, MoveInDate);
    return (0, _possibleConstructorReturn3.default)(this, (MoveInDate.__proto__ || (0, _getPrototypeOf2.default)(MoveInDate)).apply(this, arguments));
  }

  (0, _createClass3.default)(MoveInDate, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Form.Field, this.props);
    }
  }]);
  return MoveInDate;
}(_react.PureComponent), _class.propTypes = {
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string
}, _class.defaultProps = {
  name: 'date',
  type: 'date',
  placeholder: 'Move in date'
}, _temp);
exports.default = MoveInDate;