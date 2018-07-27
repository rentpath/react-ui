'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get = require('lodash/fp/get');

var _get2 = _interopRequireDefault(_get);

var _getOr = require('lodash/fp/getOr');

var _getOr2 = _interopRequireDefault(_getOr);

var _Overlay = require('../Modal/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

//
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

var ModalStack = (_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(ModalStack, _PureComponent);

  function ModalStack(props) {
    (0, _classCallCheck3.default)(this, ModalStack);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ModalStack.__proto__ || (0, _getPrototypeOf2.default)(ModalStack)).call(this, props));

    _this.state = {
      currentDefinition: {},
      modals: {}
    };
    return _this;
  }

  (0, _createClass3.default)(ModalStack, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setupWrapperHost();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      // Change to didRecieveProps in future - though, in async rendering update,
      // can resolve the correct component earlier
      var _props = this.props,
          _props$currentModal$i = _props.currentModal.id,
          id = _props$currentModal$i === undefined ? null : _props$currentModal$i,
          modalDefinitions = _props.modalDefinitions;


      if (id && !this.getModalComponent(id)) {
        var modalDefinition = (0, _get2.default)(id)(modalDefinitions);

        if (modalDefinition) {
          this.loadModal(modalDefinition).then(function (modal) {
            _this2.setState({
              currentDefinition: modalDefinition,
              modals: (0, _extends4.default)({}, _this2.state.modals, (0, _defineProperty3.default)({}, id, (0, _getOr2.default)(modal, 'default')(modal)))
            });
          });
        }
      }
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      var _props2 = this.props,
          currentModal = _props2.currentModal,
          onClose = _props2.onClose;


      if (onClose) onClose(currentModal.id);
    }
  }, {
    key: 'getModalComponent',
    value: function getModalComponent(id) {
      return this.state.modals[id];
    }
  }, {
    key: 'setupWrapperHost',
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
    key: 'getWrapperComponent',
    value: function getWrapperComponent(useOverlay) {
      var currentModal = this.props.currentModal;

      return useOverlay ? {
        Component: _Overlay2.default,
        props: {
          key: 'overlay-' + currentModal.id,
          onClick: this.onClose
        }
      } : {
        Component: _react.Fragment,
        props: {}
      };
    }
  }, {
    key: 'loadModal',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(definition) {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return definition.resolve();

              case 2:
                result = _context.sent;
                return _context.abrupt('return', result[definition.name]);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadModal(_x) {
        return _ref.apply(this, arguments);
      }

      return loadModal;
    }()
  }, {
    key: 'renderModals',
    value: function renderModals() {
      var currentModal = this.props.currentModal;
      var currentDefinition = this.state.currentDefinition;

      var ModalComponent = this.getModalComponent(currentModal.id);

      var Wrapper = this.getWrapperComponent(currentDefinition.overlay);

      if (ModalComponent) {
        return _react2.default.createElement(
          Wrapper.Component,
          Wrapper.props,
          _react2.default.createElement(ModalComponent, (0, _extends4.default)({
            key: 'modal-' + currentModal.id,
            isOpen: true,
            onClose: this.onClose
          }, currentModal.props))
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var currentModal = this.props.currentModal;


      if (currentModal && currentModal.id && this.modalHost) {
        return (0, _reactDom.createPortal)(this.renderModals(), this.modalHost);
      }
      return null;
    }
  }]);
  return ModalStack;
}(_react.PureComponent), _class2.propTypes = {
  currentModal: _propTypes2.default.object,
  modalDefinitions: _propTypes2.default.object,
  onClose: _propTypes2.default.func,
  modalPortalId: _propTypes2.default.string
}, _class2.defaultProps = {
  overlay: false,
  modalPortalId: 'region-modal',
  onClose: function onClose() {}
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'onClose', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onClose'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getWrapperComponent', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'getWrapperComponent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderModals', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'renderModals'), _class.prototype)), _class);
exports.default = ModalStack;