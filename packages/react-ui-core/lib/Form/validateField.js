"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = require("@rentpath/react-themed");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var validateField = function validateField(Component) {
  var ValidatedField = function ValidatedField(_ref) {
    var theme = _ref.theme,
        isValid = _ref.isValid,
        validationMessage = _ref.validationMessage,
        className = _ref.className,
        validFieldIcon = _ref.validFieldIcon,
        props = (0, _objectWithoutProperties2.default)(_ref, ["theme", "isValid", "validationMessage", "className", "validFieldIcon"]);
    return _react.default.createElement("div", {
      className: (0, _classnames.default)(theme.ValidatedField, className)
    }, _react.default.createElement(Component, (0, _extends2.default)({
      theme: theme
    }, props, {
      variant: isValid ? 'valid' : 'invalid'
    })), isValid && validFieldIcon, validationMessage && _react.default.createElement("div", {
      "data-tid": "validation-message",
      className: theme.ValidatedField_Message
    }, validationMessage));
  };

  ValidatedField.displayName = "Validated(".concat((0, _reactUiUtils.componentName)(Component, 'Field'), ")");
  ValidatedField.propTypes = {
    theme: _propTypes.default.object,
    isValid: _propTypes.default.bool,
    validationMessage: _propTypes.default.node,
    validFieldIcon: _propTypes.default.node,
    className: _propTypes.default.string
  };
  ValidatedField.defaultProps = {
    theme: {}
  };
  return (0, _reactThemed.themed)(/^ValidatedField/)(ValidatedField);
};

var _default = validateField;
exports.default = _default;