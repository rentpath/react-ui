"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _Overlay = _interopRequireDefault(require("./Overlay"));

var _ModalCloseButton = _interopRequireDefault(require("./ModalCloseButton"));

var _dec, _class, _class2, _class3, _temp;

var dataAttrs = function dataAttrs(props) {
  return Object.keys(props).reduce(function (acc, key) {
    if (/data-tag/.test(key)) acc[key] = props[key];
    return acc;
  }, {});
};

var Modal = (_dec = (0, _reactThemed.default)(/^Modal/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Modal).call(this, props));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  (0, _createClass2.default)(Modal, [{
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
          props = (0, _objectWithoutProperties2.default)(_this$props, ["isOpen", "theme", "className", "children", "onClose", "CloseButton", "hasOverlay", "closeOnOverlayClick"]);
      var Wrapper = this.wrapper;
      return _react.default.createElement(Wrapper.Component, Wrapper.props, _react.default.createElement("div", (0, _extends2.default)({
        "data-tid": "modal"
      }, props, {
        className: (0, _classnames.default)(className, theme["Modal-".concat(isOpen ? 'open' : 'close')], theme.Modal)
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
        var _parseArgs = (0, _reactUiUtils.parseArgs)(CloseButton, _ModalCloseButton.default),
            _parseArgs2 = (0, _slicedToArray2.default)(_parseArgs, 2),
            Close = _parseArgs2[0],
            props = _parseArgs2[1];

        return _react.default.createElement(Close, (0, _extends2.default)({
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
          Component: _Overlay.default,
          props: (0, _objectSpread2.default)({
            onClick: this.overlayClose,
            isOpen: isOpen
          }, dataAttrs(this.props))
        };
      }

      return {
        Component: _react.Fragment,
        props: {}
      };
    }
  }]);
  return Modal;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  isOpen: _propTypes.default.bool,
  theme: _propTypes.default.object,
  onClose: _propTypes.default.func,
  closeOnOverlayClick: _propTypes.default.bool,
  className: _propTypes.default.string,
  children: _propTypes.default.any,
  hasOverlay: _propTypes.default.bool,
  CloseButton: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node, _propTypes.default.object])
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  isOpen: false,
  theme: {},
  hasOverlay: true,
  closeOnOverlayClick: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleClose", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClose"), _class2.prototype)), _class2)) || _class);
exports.default = Modal;