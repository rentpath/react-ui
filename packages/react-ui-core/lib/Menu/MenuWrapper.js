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

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

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

var MenuWrapper = (_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(MenuWrapper, _PureComponent);

  function MenuWrapper() {
    (0, _classCallCheck3.default)(this, MenuWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (MenuWrapper.__proto__ || (0, _getPrototypeOf2.default)(MenuWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuWrapper, [{
    key: 'handleSelection',
    value: function handleSelection(item, index) {
      var _props = this.props,
          onSelect = _props.onSelect,
          onItemSelect = _props.onItemSelect;


      if (onItemSelect) onItemSelect(item, index);
      if (onSelect) onSelect();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onItemSelect = _props2.onItemSelect,
          onSelect = _props2.onSelect,
          props = (0, _objectWithoutProperties3.default)(_props2, ['onItemSelect', 'onSelect']);


      return _react2.default.createElement(_Menu2.default, (0, _extends3.default)({
        onItemSelect: this.handleSelection
      }, props));
    }
  }]);
  return MenuWrapper;
}(_react.PureComponent), _class2.propTypes = {
  onSelect: _propTypes2.default.func,
  onItemSelect: _propTypes2.default.func
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'handleSelection', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'handleSelection'), _class.prototype)), _class);
exports.default = MenuWrapper;