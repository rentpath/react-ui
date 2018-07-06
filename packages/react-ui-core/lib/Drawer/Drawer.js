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

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

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

var Drawer = (_dec = (0, _reactThemed2.default)(/^Drawer/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(Drawer, _PureComponent);

  function Drawer(props) {
    (0, _classCallCheck3.default)(this, Drawer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).call(this, props));

    _this.state = { visible: props.visible };
    return _this;
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(this.props.visible === nextProps.visible)) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle(value) {
      this.setState({ visible: value });
      if (this.props.onClick) this.props.onClick(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          height = _props.height,
          className = _props.className,
          children = _props.children,
          movementDamping = _props.movementDamping,
          movementStiffness = _props.movementStiffness,
          closeButtonContents = _props.closeButtonContents,
          openButtonContents = _props.openButtonContents,
          visibleProp = _props.visible,
          onClick = _props.onClick,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'height', 'className', 'children', 'movementDamping', 'movementStiffness', 'closeButtonContents', 'openButtonContents', 'visible', 'onClick']);
      var visible = this.state.visible;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(theme.Drawer, theme[visible ? 'Drawer-on' : 'Drawer-off'], className),
          style: visible ? {} : { transform: 'translateY(' + height + 'px)' },
          'data-tid': 'drawer'
        },
        _react2.default.createElement(
          _Button.ToggleButton,
          (0, _extends3.default)({
            className: (0, _classnames2.default)(theme[visible ? 'Drawer-Button-on' : 'Drawer-Button-off']),
            theme: theme,
            onClick: this.handleToggle,
            value: visible
          }, props),
          visible ? closeButtonContents : openButtonContents
        ),
        _react2.default.createElement(
          'div',
          {
            className: theme.Drawer_Content,
            'data-tid': 'drawer-content'
          },
          children
        )
      );
    }
  }]);
  return Drawer;
}(_react.PureComponent), _class3.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  height: _propTypes2.default.number,
  children: _propTypes2.default.node,
  openButtonContents: _propTypes2.default.node,
  closeButtonContents: _propTypes2.default.node,
  movementDamping: _propTypes2.default.number,
  movementStiffness: _propTypes2.default.number,
  visible: _propTypes2.default.bool
}, _class3.defaultProps = {
  theme: {},
  height: 205,
  movementDamping: null,
  movementStiffness: null,
  visible: true
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleToggle', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleToggle'), _class2.prototype)), _class2)) || _class);
exports.default = Drawer;