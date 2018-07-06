'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = require('../Modal');

var _LeadForm = require('../LeadForm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeadModal = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(LeadModal, _Component);

  function LeadModal() {
    (0, _classCallCheck3.default)(this, LeadModal);
    return (0, _possibleConstructorReturn3.default)(this, (LeadModal.__proto__ || (0, _getPrototypeOf2.default)(LeadModal)).apply(this, arguments));
  }

  (0, _createClass3.default)(LeadModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          CloseButton = _props.CloseButton,
          props = (0, _objectWithoutProperties3.default)(_props, ['isOpen', 'CloseButton']);


      if (!isOpen) return null;

      return _react2.default.createElement(
        _Modal.Modal,
        {
          isOpen: isOpen,
          CloseButton: CloseButton
        },
        _react2.default.createElement(_LeadForm.LeadForm, props)
      );
    }
  }]);
  return LeadModal;
}(_react.Component), _class.propTypes = {
  isOpen: _propTypes2.default.bool,
  CloseButton: _propTypes2.default.any
}, _class.defaultProps = {
  CloseButton: _Modal.ModalCloseButton
}, _temp);
exports.default = LeadModal;