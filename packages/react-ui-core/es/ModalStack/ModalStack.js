import _extends from "@babel/runtime/helpers/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import themed from '@rentpath/react-themed';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get'; //
// Expects currentModal to come in as an object that looks like
// {
//   id: modalId,
//   props: { ...modalProps },
// }
//
// Expects modalDefinitions to come in as an object that looks like
// {
//   modalId: {
//     name: modalName,
//     overlay: isOverlayOpen,
//     resolve: () => import(modalPath),
//   },
// }
//

var ModalStack = (_dec = themed(['Overlay-lock'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ModalStack, _PureComponent);

  function ModalStack(props) {
    var _this;

    _classCallCheck(this, ModalStack);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalStack).call(this, props));
    _this.state = {
      currentDefinition: {},
      modals: {}
    };
    return _this;
  }

  _createClass(ModalStack, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupWrapperHost();
      this.loadCurrentModal();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.loadCurrentModal();
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var _this$props = this.props,
          currentModal = _this$props.currentModal,
          onClose = _this$props.onClose;
      if (onClose) onClose(currentModal.id);
    }
  }, {
    key: "getModalComponent",
    value: function getModalComponent(id) {
      return this.state.modals[id];
    }
  }, {
    key: "setupWrapperHost",
    value: function setupWrapperHost() {
      var modalPortalId = this.props.modalPortalId;
      this.modalHost = document.getElementById(modalPortalId);

      if (!this.modalHost) {
        this.modalHost = document.createElement('section');
        this.modalHost.id = modalPortalId;
        document.body.appendChild(this.modalHost);
      }
    }
  }, {
    key: "loadCurrentModal",
    value: function loadCurrentModal() {
      var _this2 = this;

      var _this$props2 = this.props,
          currentModal = _this$props2.currentModal,
          modalDefinitions = _this$props2.modalDefinitions;
      var id = currentModal && currentModal.id;

      if (id && !this.getModalComponent(id)) {
        var modalDefinition = get(id)(modalDefinitions);
        var modals = this.state.modals;

        if (modalDefinition) {
          this.loadModal(modalDefinition).then(function (modal) {
            if (modal) {
              _this2.setState({
                currentDefinition: modalDefinition,
                modals: _objectSpread({}, modals, _defineProperty({}, id, modal))
              });
            }
          });
        }
      }
    }
  }, {
    key: "loadModal",
    value: function () {
      var _loadModal = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(definition) {
        var result;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return definition.resolve();

              case 2:
                result = _context.sent;
                return _context.abrupt("return", result[definition.name] || result.default);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function loadModal(_x) {
        return _loadModal.apply(this, arguments);
      };
    }()
  }, {
    key: "toggleBodyClass",
    value: function toggleBodyClass(toggle) {
      if (this.modalHost) {
        // TODO - does anything still rely on this theme prop? If not remove
        var overlayLockCssClass = this.props.theme['Overlay-lock'];

        if (overlayLockCssClass) {
          document.body.classList.toggle(overlayLockCssClass, toggle);
        }

        document.body.classList.toggle('overflow-hidden', toggle);
      }
    }
  }, {
    key: "renderModals",
    value: function renderModals() {
      var currentModal = this.props.currentModal;
      var currentDefinition = this.state.currentDefinition;
      var ModalComponent = this.getModalComponent(currentModal.id);
      var hasOverlay = currentDefinition.overlay;

      if (ModalComponent) {
        this.toggleBodyClass(true);
        return React.createElement(ModalComponent, _extends({
          key: "modal-".concat(currentModal.id),
          isOpen: true,
          hasOverlay: hasOverlay,
          onClose: this.onClose
        }, currentModal.props));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var currentModal = this.props.currentModal;

      if (currentModal && currentModal.id && this.modalHost) {
        return createPortal(this.renderModals(), this.modalHost);
      }

      this.toggleBodyClass(false);
      return null;
    }
  }]);

  return ModalStack;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  currentModal: PropTypes.object,
  modalDefinitions: PropTypes.object,
  onClose: PropTypes.func,
  modalPortalId: PropTypes.string,
  overlay: PropTypes.bool,
  theme: PropTypes.object
}), _defineProperty(_class3, "defaultProps", {
  overlay: false,
  modalPortalId: 'region-modal',
  onClose: function onClose() {},
  theme: {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onClose", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "onClose"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "renderModals", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "renderModals"), _class2.prototype)), _class2)) || _class);
export { ModalStack as default };