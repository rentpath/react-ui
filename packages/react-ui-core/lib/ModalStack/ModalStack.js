"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/fp/get"));

var _dec, _class, _class2, _class3, _temp;

var ModalStack = ( //
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
_dec = (0, _reactThemed.default)(['Overlay-lock'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ModalStack, _PureComponent);

  function ModalStack(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ModalStack);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModalStack).call(this, props));
    _this.state = {
      currentDefinition: {},
      modals: {}
    };
    return _this;
  }

  (0, _createClass2.default)(ModalStack, [{
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
        var modalDefinition = (0, _get.default)(id)(modalDefinitions);
        var modals = this.state.modals;

        if (modalDefinition) {
          this.loadModal(modalDefinition).then(function (modal) {
            if (modal) {
              _this2.setState({
                currentDefinition: modalDefinition,
                modals: (0, _objectSpread3.default)({}, modals, (0, _defineProperty2.default)({}, id, modal))
              });
            }
          });
        }
      }
    }
  }, {
    key: "loadModal",
    value: function () {
      var _loadModal = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(definition) {
        var result;
        return _regenerator.default.wrap(function _callee$(_context) {
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
        return _react.default.createElement(ModalComponent, (0, _extends2.default)({
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
        return (0, _reactDom.createPortal)(this.renderModals(), this.modalHost);
      }

      this.toggleBodyClass(false);
      return null;
    }
  }]);
  return ModalStack;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  currentModal: _propTypes.default.object,
  modalDefinitions: _propTypes.default.object,
  onClose: _propTypes.default.func,
  modalPortalId: _propTypes.default.string,
  overlay: _propTypes.default.bool,
  theme: _propTypes.default.object
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  overlay: false,
  modalPortalId: 'region-modal',
  onClose: function onClose() {},
  theme: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onClose", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "onClose"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "renderModals", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "renderModals"), _class2.prototype)), _class2)) || _class);
exports.default = ModalStack;