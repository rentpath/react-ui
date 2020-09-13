import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { themed } from '@rentpath/react-themed';
import classnames from 'classnames';
import { componentName } from '@rentpath/react-ui-utils';

var validateField = function validateField(Component) {
  var ValidatedField = function ValidatedField(_ref) {
    var theme = _ref.theme,
        isValid = _ref.isValid,
        validationMessage = _ref.validationMessage,
        className = _ref.className,
        validFieldIcon = _ref.validFieldIcon,
        props = _objectWithoutProperties(_ref, ["theme", "isValid", "validationMessage", "className", "validFieldIcon"]);

    return React.createElement("div", {
      className: classnames(theme.ValidatedField, className)
    }, React.createElement(Component, _extends({
      theme: theme
    }, props, {
      variant: isValid ? 'valid' : 'invalid'
    })), isValid && validFieldIcon, validationMessage && React.createElement("div", {
      "data-tid": "validation-message",
      className: theme.ValidatedField_Message
    }, validationMessage));
  };

  ValidatedField.displayName = "Validated(".concat(componentName(Component, 'Field'), ")");
  ValidatedField.propTypes = {
    theme: PropTypes.object,
    isValid: PropTypes.bool,
    validationMessage: PropTypes.node,
    validFieldIcon: PropTypes.node,
    className: PropTypes.string
  };
  ValidatedField.defaultProps = {
    theme: {}
  };
  return themed(/^ValidatedField/)(ValidatedField);
};

export default validateField;