'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _Button = require('../Button');

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

var DropdownAnchor = (_dec = (0, _reactThemed2.default)(['DropdownAnchor-expand', 'DropdownAnchor-collapse', 'DropdownAnchor'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(DropdownAnchor, _PureComponent);

  function DropdownAnchor() {
    (0, _classCallCheck3.default)(this, DropdownAnchor);
    return (0, _possibleConstructorReturn3.default)(this, (DropdownAnchor.__proto__ || (0, _getPrototypeOf2.default)(DropdownAnchor)).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownAnchor, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          onClick = _props.onClick,
          visible = _props.visible;


      if (onClick) onClick(visible);
    }
  }, {
    key: 'renderAnchor',
    value: function renderAnchor() {
      var _props2 = this.props,
          anchor = _props2.anchor,
          className = _props2.className,
          theme = _props2.theme,
          visible = _props2.visible,
          props = (0, _objectWithoutProperties3.default)(_props2, ['anchor', 'className', 'theme', 'visible']);


      return _react.createElement.apply(undefined, (0, _toConsumableArray3.default)((0, _reactUiUtils.parseArgs)(anchor, _Button.Button, (0, _extends3.default)({
        'data-tid': 'dropdown-anchor',
        className: (0, _classnames2.default)(className, theme.DropdownAnchor, theme['DropdownAnchor-' + (visible ? 'expand' : 'collapse')]),
        onClick: this.handleClick
      }, props))));
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderAnchor();
    }
  }]);
  return DropdownAnchor;
}(_react.PureComponent), _class3.propTypes = {
  onClick: _propTypes2.default.func,
  visible: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  changeVisibility: _propTypes2.default.func,
  children: _propTypes2.default.any,
  anchor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.node, _propTypes2.default.func])
}, _class3.defaultProps = {
  theme: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleClick'), _class2.prototype)), _class2)) || _class);
exports.default = DropdownAnchor;