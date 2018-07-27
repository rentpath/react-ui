'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _Overlay = require('./Overlay');

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

var Modal = (_dec = (0, _reactThemed2.default)(/^Modal/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(Modal, _PureComponent);

  function Modal(props) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));

    _this.state = { isOpen: props.isOpen };
    return _this;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen !== this.props.isOpen) {
        this.setState({ isOpen: nextProps.isOpen });
      }
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ isOpen: false });
      if (this.props.onClose) this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          theme = _props.theme,
          className = _props.className,
          children = _props.children,
          closeOnOverlayClick = _props.closeOnOverlayClick,
          props = (0, _objectWithoutProperties3.default)(_props, ['isOpen', 'theme', 'className', 'children', 'closeOnOverlayClick']);


      return _react2.default.createElement(
        _Overlay2.default,
        {
          onClick: this.overlayClose,
          className: (0, _classnames2.default)(className, theme['Modal-' + (this.state.isOpen ? 'open' : 'close')], theme.Modal)
        },
        _react2.default.createElement(
          _ModalBody2.default,
          (0, _extends3.default)({}, props, { onClose: this.handleClose }),
          children
        )
      );
    }
  }, {
    key: 'overlayClose',
    get: function get() {
      var closeOnOverlayClick = this.props.closeOnOverlayClick;

      return closeOnOverlayClick ? this.handleClose : undefined;
    }
  }]);
  return Modal;
}(_react.PureComponent), _class3.propTypes = {
  isOpen: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  onClose: _propTypes2.default.func,
  closeOnOverlayClick: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  children: _propTypes2.default.any
}, _class3.defaultProps = {
  isOpen: false,
  theme: {},
  onClose: function onClose() {},
  closeOnOverlayClick: true
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleClose', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleClose'), _class2.prototype)), _class2)) || _class);
exports.default = Modal;