import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { parseArgs } from '@rentpath/react-ui-utils';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import autobind from 'autobind-decorator';
import Overlay from './Overlay';
import ModalCloseButton from './ModalCloseButton';

var dataAttrs = function dataAttrs(props) {
  return Object.keys(props).reduce(function (acc, key) {
    if (/data-tag/.test(key)) acc[key] = props[key];
    return acc;
  }, {});
};

var Modal = (_dec = themed(/^Modal/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen !== this.props.isOpen) {
        this.setState({
          isOpen: nextProps.isOpen
        });
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        isOpen: false
      });
      if (this.props.onClose) this.props.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          theme = _this$props.theme,
          className = _this$props.className,
          children = _this$props.children,
          onClose = _this$props.onClose,
          CloseButton = _this$props.CloseButton,
          hasOverlay = _this$props.hasOverlay,
          closeOnOverlayClick = _this$props.closeOnOverlayClick,
          props = _objectWithoutProperties(_this$props, ["isOpen", "theme", "className", "children", "onClose", "CloseButton", "hasOverlay", "closeOnOverlayClick"]);

      var Wrapper = this.wrapper;
      return React.createElement(Wrapper.Component, Wrapper.props, React.createElement("div", _extends({
        "data-tid": "modal"
      }, props, {
        className: classnames(className, theme["Modal-".concat(isOpen ? 'open' : 'close')], theme.Modal)
      }), this.closeButton, children));
    }
  }, {
    key: "overlayClose",
    get: function get() {
      var closeOnOverlayClick = this.props.closeOnOverlayClick;
      return closeOnOverlayClick ? this.handleClose : undefined;
    }
  }, {
    key: "closeButton",
    get: function get() {
      var CloseButton = this.props.CloseButton;

      if (CloseButton) {
        var _parseArgs = parseArgs(CloseButton, ModalCloseButton),
            _parseArgs2 = _slicedToArray(_parseArgs, 2),
            Close = _parseArgs2[0],
            props = _parseArgs2[1];

        return React.createElement(Close, _extends({
          "data-tid": "close-modal"
        }, props, {
          onClick: this.overlayClose
        }));
      }

      return null;
    }
  }, {
    key: "wrapper",
    get: function get() {
      var hasOverlay = this.props.hasOverlay;
      var isOpen = this.state.isOpen;

      if (hasOverlay) {
        return {
          Component: Overlay,
          props: _objectSpread({
            onClick: this.overlayClose,
            isOpen: isOpen
          }, dataAttrs(this.props))
        };
      }

      return {
        Component: Fragment,
        props: {}
      };
    }
  }]);

  return Modal;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  isOpen: PropTypes.bool,
  theme: PropTypes.object,
  onClose: PropTypes.func,
  closeOnOverlayClick: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  hasOverlay: PropTypes.bool,
  CloseButton: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.object])
}), _defineProperty(_class3, "defaultProps", {
  isOpen: false,
  theme: {},
  hasOverlay: true,
  closeOnOverlayClick: true
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleClose", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClose"), _class2.prototype)), _class2)) || _class);
export { Modal as default };