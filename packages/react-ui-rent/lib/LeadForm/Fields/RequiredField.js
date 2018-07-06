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

var _reactUiCore = require('@rentpath/react-ui-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequiredField = (_dec = (0, _reactThemed2.default)(/^RequiredField/), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(RequiredField, _Component);

  function RequiredField(props) {
    (0, _classCallCheck3.default)(this, RequiredField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RequiredField.__proto__ || (0, _getPrototypeOf2.default)(RequiredField)).call(this, props));

    _this.inputChange = _this.inputChange.bind(_this);
    _this.state = {
      labelVisible: !props.defaultValue && !props.value
    };
    return _this;
  }

  (0, _createClass3.default)(RequiredField, [{
    key: 'inputChange',
    value: function inputChange(event) {
      if (event.target.value) {
        if (this.state.labelVisible) {
          this.setState({ labelVisible: false });
        }
      } else {
        this.setState({ labelVisible: true });
      }
      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          placeholder = _props.placeholder,
          onChange = _props.onChange,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'placeholder', 'onChange']);


      return _react2.default.createElement(_reactUiCore.Field, (0, _extends3.default)({
        className: theme.RequiredField,
        onChange: this.inputChange,
        label: this.fieldLabel
      }, props));
    }
  }, {
    key: 'fieldLabel',
    get: function get() {
      var _props2 = this.props,
          placeholder = _props2.placeholder,
          theme = _props2.theme;


      if (this.state.labelVisible) {
        return {
          text: placeholder,
          className: theme.RequiredField_Label
        };
      }

      return null;
    }
  }]);
  return RequiredField;
}(_react.Component), _class2.propTypes = {
  theme: _propTypes2.default.object,
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func
}, _class2.defaultProps = {
  theme: {}
}, _temp)) || _class);
exports.default = RequiredField;