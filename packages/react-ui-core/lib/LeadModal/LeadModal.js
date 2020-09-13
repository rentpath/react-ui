"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = require("../Modal");

var _LeadForm = require("../LeadForm");

var LeadModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LeadModal, _Component);

  function LeadModal() {
    (0, _classCallCheck2.default)(this, LeadModal);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LeadModal).apply(this, arguments));
  }

  (0, _createClass2.default)(LeadModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          CloseButton = _this$props.CloseButton,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["isOpen", "CloseButton"]);
      if (!isOpen) return null;
      return _react.default.createElement(_Modal.Modal, {
        isOpen: isOpen,
        CloseButton: CloseButton
      }, _react.default.createElement(_LeadForm.LeadForm, props));
    }
  }]);
  return LeadModal;
}(_react.Component);

exports.default = LeadModal;
(0, _defineProperty2.default)(LeadModal, "propTypes", {
  isOpen: _propTypes.default.bool,
  CloseButton: _propTypes.default.any
});
(0, _defineProperty2.default)(LeadModal, "defaultProps", {
  CloseButton: _Modal.ModalCloseButton
});