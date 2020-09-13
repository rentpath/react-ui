import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalCloseButton } from '../Modal';
import { LeadForm } from '../LeadForm';

var LeadModal =
/*#__PURE__*/
function (_Component) {
  _inherits(LeadModal, _Component);

  function LeadModal() {
    _classCallCheck(this, LeadModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeadModal).apply(this, arguments));
  }

  _createClass(LeadModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          CloseButton = _this$props.CloseButton,
          props = _objectWithoutProperties(_this$props, ["isOpen", "CloseButton"]);

      if (!isOpen) return null;
      return React.createElement(Modal, {
        isOpen: isOpen,
        CloseButton: CloseButton
      }, React.createElement(LeadForm, props));
    }
  }]);

  return LeadModal;
}(Component);

_defineProperty(LeadModal, "propTypes", {
  isOpen: PropTypes.bool,
  CloseButton: PropTypes.any
});

_defineProperty(LeadModal, "defaultProps", {
  CloseButton: ModalCloseButton
});

export { LeadModal as default };