'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _RadioButton = require('./RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = (_dec = (0, _reactThemed2.default)('*'), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(RadioGroup, _Component);

  function RadioGroup(props) {
    (0, _classCallCheck3.default)(this, RadioGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call(this, props));

    _this.handleValueChange = function (event) {
      _this.setState({
        value: event.target.value
      });

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.handleClick = function (event) {
      // Check if value was already selected, should we unselect it?
      if (_this.props.allowUnselect && _this.state.value === event.target.value) {
        _this.setState({ value: null });
        if (_this.props.onUnselect) {
          _this.props.onUnselect(event);
        }
      }
    };

    _this.state = {
      value: _this.currentlyCheckedValue()
    };
    _this.generateRandomId();
    return _this;
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual2.default)(this.props.fields, nextProps.fields)) {
        this.generateRandomId();

        this.setState({
          value: this.currentlyCheckedValue(nextProps.fields || [])
        });
      }
    }
  }, {
    key: 'currentlyCheckedValue',
    value: function currentlyCheckedValue() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.fields;

      return (fields.find(function (f) {
        return f.checked;
      }) || {}).value;
    }
  }, {
    key: 'generateRandomId',
    value: function generateRandomId() {
      this.id = (0, _reactUiUtils.randomId)('radiogroup');
    }
  }, {
    key: 'renderRadioButton',
    value: function renderRadioButton(index, fieldProps) {
      var props = (0, _pick2.default)(this.props, ['name', 'hideInputElement', 'orientation']);

      return _react2.default.createElement(_RadioButton2.default, (0, _extends3.default)({
        'data-tid': 'radiogroup-radiobutton',
        key: this.id + '-' + index,
        checked: this.state.value === fieldProps.value,
        onChange: this.handleValueChange,
        onClick: this.handleClick
      }, (0, _omit2.default)(fieldProps, 'checked'), props));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          name = _props.name,
          fields = _props.fields,
          hideInputElement = _props.hideInputElement,
          onChange = _props.onChange,
          allowUnselect = _props.allowUnselect,
          onUnselect = _props.onUnselect,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'theme', 'name', 'fields', 'hideInputElement', 'onChange', 'allowUnselect', 'onUnselect']);


      if (!this.fields.length) return null;

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(className, theme.RadioGroup)
        }, props),
        this.fields.map(function (field, index) {
          return _this2.renderRadioButton(index, field);
        })
      );
    }
  }, {
    key: 'fields',
    get: function get() {
      return this.props.fields || [];
    }
  }]);
  return RadioGroup;
}(_react.Component), _class2.propTypes = {
  name: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  orientation: _propTypes2.default.string,
  hideInputElement: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func]),
    checked: _propTypes2.default.bool,
    value: _propTypes2.default.string
  })),
  allowUnselect: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onUnselect: _propTypes2.default.func
}, _class2.defaultProps = {
  theme: {},
  fields: [],
  allowUnselect: false
}, _temp)) || _class);
exports.default = RadioGroup;