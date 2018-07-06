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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactUiCore = require('@rentpath/react-ui-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailModal = (_dec = (0, _reactThemed2.default)(/^EmailModal/, { pure: true }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(EmailModal, _PureComponent);

  function EmailModal() {
    (0, _classCallCheck3.default)(this, EmailModal);
    return (0, _possibleConstructorReturn3.default)(this, (EmailModal.__proto__ || (0, _getPrototypeOf2.default)(EmailModal)).apply(this, arguments));
  }

  (0, _createClass3.default)(EmailModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          header = _props.header,
          label = _props.label,
          footer = _props.footer,
          onSubmit = _props.onSubmit,
          error = _props.error,
          email = _props.email,
          fieldProps = _props.fieldProps,
          submitButtonProps = _props.submitButtonProps,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'theme', 'header', 'label', 'footer', 'onSubmit', 'error', 'email', 'fieldProps', 'submitButtonProps']);


      return _react2.default.createElement(
        _reactUiCore.Modal,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(className, theme.EmailModal, error && theme['EmailModal-error']),
          'data-tid': 'email-modal'
        }, props),
        header && _react2.default.createElement(
          'div',
          { className: theme.EmailModal_Header, 'data-tid': 'header' },
          header
        ),
        _react2.default.createElement(
          _reactUiCore.Form,
          { onSubmit: this.props.onSubmit, serialize: true },
          _react2.default.createElement(_reactUiCore.Field, (0, _extends3.default)({
            name: 'email',
            label: label,
            defaultValue: email,
            key: email
          }, fieldProps)),
          error && _react2.default.createElement(
            'span',
            { className: theme.EmailModal_ErrorMessage, 'data-tid': 'error' },
            error
          ),
          _react2.default.createElement(
            'div',
            { className: theme.EmailModal_Submit },
            _react2.default.createElement(_reactUiCore.Button, (0, _extends3.default)({ type: 'submit', name: 'submit' }, this.submitButtonProps))
          )
        ),
        footer && _react2.default.createElement(
          'div',
          { 'data-tid': 'footer', className: theme.EmailModal_Footer },
          footer
        )
      );
    }
  }, {
    key: 'submitButtonProps',
    get: function get() {
      var submitButtonProps = this.props.submitButtonProps;


      return (0, _extends3.default)({
        children: 'Submit'
      }, submitButtonProps);
    }
  }]);
  return EmailModal;
}(_react.PureComponent), _class2.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  header: _propTypes2.default.node,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  footer: _propTypes2.default.node,
  onSubmit: _propTypes2.default.func,
  error: _propTypes2.default.node,
  email: _propTypes2.default.string,
  fieldProps: _propTypes2.default.object,
  submitButtonProps: _propTypes2.default.object
}, _class2.defaultProps = {
  theme: {},
  submitButtonProps: {},
  fieldProps: {}
}, _temp)) || _class);
exports.default = EmailModal;