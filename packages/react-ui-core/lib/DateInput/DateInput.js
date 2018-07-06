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

var _reactBasicDatepicker = require('react-basic-datepicker');

var _reactBasicDatepicker2 = _interopRequireDefault(_reactBasicDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateInput = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(DateInput, _Component);

  function DateInput() {
    (0, _classCallCheck3.default)(this, DateInput);
    return (0, _possibleConstructorReturn3.default)(this, (DateInput.__proto__ || (0, _getPrototypeOf2.default)(DateInput)).apply(this, arguments));
  }

  (0, _createClass3.default)(DateInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          className = _props.className,
          name = _props.name,
          rest = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'className', 'name']);


      return _react2.default.createElement(_reactBasicDatepicker2.default, (0, _extends3.default)({
        handleDateChange: onChange,
        datepickerName: name,
        datepickerClassName: className
      }, rest));
    }
  }]);
  return DateInput;
}(_react.Component), _class.propTypes = {
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string
}, _class.defaultProps = {
  placeholderText: 'Date',
  className: 'DatePicker'
}, _temp);
exports.default = DateInput;