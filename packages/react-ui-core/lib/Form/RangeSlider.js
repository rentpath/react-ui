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

var _reactInputRange = require('react-input-range');

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangeSlider = (_dec = (0, _reactThemed2.default)('*', {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(RangeSlider, _PureComponent);

  function RangeSlider(props) {
    (0, _classCallCheck3.default)(this, RangeSlider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RangeSlider.__proto__ || (0, _getPrototypeOf2.default)(RangeSlider)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.state = { value: props.value };

    _this.setSliderTheme(props.theme);
    return _this;
  }

  (0, _createClass3.default)(RangeSlider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual2.default)(this.props.value, nextProps.value)) {
        this.setState({ value: nextProps.value });
      }

      if (this.props.theme !== nextProps.theme) {
        this.setSliderTheme(nextProps.theme);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      if (this.props.onChange) this.props.onChange(value);
      this.setState({ value: value });
    }
  }, {
    key: 'setSliderTheme',
    value: function setSliderTheme(theme) {
      // NOTE: this ensures react-input-range plays nicely with theme object
      this.sliderTheme = (0, _omit2.default)(theme, '_getCss', '_insertCss', '_getContent');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          onChange = _props.onChange,
          formatHeader = _props.formatHeader,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'className', 'onChange', 'formatHeader']);


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(theme.RangeSlider, className)
        },
        formatHeader && formatHeader(this.state.value),
        _react2.default.createElement(_reactInputRange2.default, (0, _extends3.default)({}, props, {
          onChange: this.onChange,
          value: this.state.value,
          classNames: this.sliderTheme
        }))
      );
    }
  }]);
  return RangeSlider;
}(_react.PureComponent), _class2.propTypes = {
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  formatHeader: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object])
}, _class2.defaultProps = {
  theme: {},
  value: 0
}, _temp)) || _class);
exports.default = RangeSlider;