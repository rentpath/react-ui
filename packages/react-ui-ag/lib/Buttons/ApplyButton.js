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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactUiCore = require('@rentpath/react-ui-core');

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

var ApplyButton = (_dec = (0, _reactThemed2.default)(['ApplyButton'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(ApplyButton, _PureComponent);

  function ApplyButton() {
    (0, _classCallCheck3.default)(this, ApplyButton);
    return (0, _possibleConstructorReturn3.default)(this, (ApplyButton.__proto__ || (0, _getPrototypeOf2.default)(ApplyButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(ApplyButton, [{
    key: 'handleClick',
    value: function handleClick() {
      var onClick = this.props.onClick;


      if (onClick) onClick(this.props.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          name = _props.name,
          className = _props.className,
          onClick = _props.onClick,
          value = _props.value,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'name', 'className', 'onClick', 'value']);


      if (!onClick) return null;

      return _react2.default.createElement(
        _reactUiCore.Button,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.ApplyButton, className),
          onClick: this.handleClick,
          'data-tid': 'apply-button'
        }, props),
        name
      );
    }
  }]);
  return ApplyButton;
}(_react.PureComponent), _class3.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  theme: _propTypes2.default.object,
  name: _propTypes2.default.node,
  value: _propTypes2.default.any
}, _class3.defaultProps = {
  theme: {},
  name: 'Apply'
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleClick'), _class2.prototype)), _class2)) || _class);
exports.default = ApplyButton;