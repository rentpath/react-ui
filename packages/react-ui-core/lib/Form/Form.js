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

var _dec, _class, _class2, _temp2, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _formSerialize = require('form-serialize');

var _formSerialize2 = _interopRequireDefault(_formSerialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = (_dec = (0, _reactThemed2.default)(['Form'], {
  pure: true
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          serialize = _props.serialize,
          className = _props.className,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'serialize', 'className']);


      return _react2.default.createElement('form', (0, _extends3.default)({}, props, {
        onSubmit: this.onSubmit,
        className: (0, _classnames2.default)(className, theme.Form)
      }));
    }
  }]);
  return Form;
}(_react.Component), _class2.propTypes = {
  /**
   * className to apply
   */
  className: _propTypes2.default.string,
  /**
   * The theme to apply.
   */
  theme: _propTypes2.default.object,

  /**
   * The form action.
   */
  action: _propTypes2.default.string,

  /**
   * The form method.
   */
  method: _propTypes2.default.string,

  /**
   * Enables browser validation when false.
   */
  noValidate: _propTypes2.default.bool,

  /**
   * Submit callback.
   */
  onSubmit: _propTypes2.default.func,

  /**
   * Serializes form data when true.
   */
  serialize: _propTypes2.default.bool
}, _class2.defaultProps = {
  theme: {},
  action: '#',
  method: 'POST',
  noValidate: true
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSubmit = function (event) {
    event.preventDefault();

    if (_this2.props.onSubmit) {
      var _props2;

      var args = [event];

      if (_this2.props.serialize) {
        args.push((0, _formSerialize2.default)(event.target, { hash: true }));
      }

      (_props2 = _this2.props).onSubmit.apply(_props2, args);
    }
  };
}, _temp2)) || _class);
exports.default = Form;