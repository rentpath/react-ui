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

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

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

var ListItem = (_dec = (0, _reactThemed2.default)(/^ListItem/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(ListItem, _PureComponent);

  function ListItem() {
    (0, _classCallCheck3.default)(this, ListItem);
    return (0, _possibleConstructorReturn3.default)(this, (ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      var _props = this.props,
          onMouseEnter = _props.onMouseEnter,
          index = _props.index;


      if (onMouseEnter) onMouseEnter(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          theme = _props2.theme,
          className = _props2.className,
          children = _props2.children,
          onMouseEnter = _props2.onMouseEnter,
          index = _props2.index,
          highlight = _props2.highlight,
          selected = _props2.selected,
          NodeType = _props2.nodeType,
          props = (0, _objectWithoutProperties3.default)(_props2, ['theme', 'className', 'children', 'onMouseEnter', 'index', 'highlight', 'selected', 'nodeType']);


      return _react2.default.createElement(
        NodeType,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.ListItem, className, highlight && theme['ListItem-highlight'], selected && theme['ListItem-selected']),
          index: index,
          onMouseEnter: this.handleMouseEnter
        }, props),
        children
      );
    }
  }]);
  return ListItem;
}(_react.PureComponent), _class3.propTypes = {
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  nodeType: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
  children: _propTypes2.default.node,
  onMouseEnter: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  index: _propTypes2.default.number,
  highlight: _propTypes2.default.bool,
  selected: _propTypes2.default.bool
}, _class3.defaultProps = {
  theme: {},
  nodeType: 'li'
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleMouseEnter', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleMouseEnter'), _class2.prototype)), _class2)) || _class);
exports.default = ListItem;