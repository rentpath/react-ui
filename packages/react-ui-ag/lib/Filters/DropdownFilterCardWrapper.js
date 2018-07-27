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

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

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

var DropdownFilterCardWrapper = (_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(DropdownFilterCardWrapper, _PureComponent);

  function DropdownFilterCardWrapper() {
    (0, _classCallCheck3.default)(this, DropdownFilterCardWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (DropdownFilterCardWrapper.__proto__ || (0, _getPrototypeOf2.default)(DropdownFilterCardWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownFilterCardWrapper, [{
    key: 'handleButtonClick',
    value: function handleButtonClick(value, button) {
      var _props = this.props,
          handleValueChange = _props.handleValueChange,
          onSelect = _props.onSelect;


      if (handleValueChange) handleValueChange(value);
      if (onSelect) onSelect();
      if (button.onClick) button.onClick(value);
    }
  }, {
    key: 'handleApplyClick',
    value: function handleApplyClick(value) {
      this.handleButtonClick(value, this.props.applyButton);
    }
  }, {
    key: 'handleCancelClick',
    value: function handleCancelClick(value) {
      this.handleButtonClick(value, this.props.cancelButton);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          handleValueChange = _props2.handleValueChange,
          applyButton = _props2.applyButton,
          cancelButton = _props2.cancelButton,
          FilterCard = _props2.FilterCard,
          safeProps = (0, _objectWithoutProperties3.default)(_props2, ['handleValueChange', 'applyButton', 'cancelButton', 'FilterCard']);


      return _react2.default.createElement(FilterCard, (0, _extends3.default)({}, safeProps, {
        applyButton: (0, _extends3.default)({}, applyButton, { onClick: this.handleApplyClick }),
        cancelButton: (0, _extends3.default)({}, cancelButton, { onClick: this.handleCancelClick })
      }));
    }
  }]);
  return DropdownFilterCardWrapper;
}(_react.PureComponent), _class2.propTypes = {
  onSelect: _propTypes2.default.func,
  handleValueChange: _propTypes2.default.func,
  applyButton: _propTypes2.default.object,
  cancelButton: _propTypes2.default.object,
  FilterCard: _propTypes2.default.func.isRequired
}, _class2.defaultProps = {
  applyButton: {},
  cancelButton: {}
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'handleApplyClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'handleApplyClick'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleCancelClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'handleCancelClick'), _class.prototype)), _class);
exports.default = DropdownFilterCardWrapper;