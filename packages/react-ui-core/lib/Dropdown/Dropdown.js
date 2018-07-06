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

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DropdownAnchor = require('./DropdownAnchor');

var _DropdownAnchor2 = _interopRequireDefault(_DropdownAnchor);

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

var Dropdown = (_dec = (0, _reactThemed2.default)(/^Dropdown/), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown(props) {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call(this, props));

    _this.state = { visible: props.visible };
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visible !== nextProps.visible) {
        this.setState({ visible: nextProps.visible });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'toggleVisibility',
    value: function toggleVisibility() {
      var _props = this.props,
          onVisibilityChange = _props.onVisibilityChange,
          toggleOnSelect = _props.toggleOnSelect;

      var visible = toggleOnSelect ? !this.state.visible : true;

      this.setState({ visible: visible });
      if (this.state.visible !== visible) {
        onVisibilityChange(visible);
      }
    }
  }, {
    key: 'changeVisibility',
    value: function changeVisibility(visible) {
      this.props.onVisibilityChange(visible);
      this.setState({ visible: visible });
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(event) {
      if (this.state.visible && !this.dropdown.contains(event.target)) {
        this.setState({ visible: false });
        this.props.onVisibilityChange(false);
      }
    }
  }, {
    key: 'renderAnchor',
    value: function renderAnchor() {
      return _react.createElement.apply(undefined, (0, _toConsumableArray3.default)((0, _reactUiUtils.parseArgs)(this.props.anchorField, _DropdownAnchor2.default, {
        'data-tid': 'dropdown-anchor',
        visible: this.state.visible,
        onClick: this.toggleVisibility,
        className: this.props.className
      })));
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var props = { onSelect: this.toggleVisibility };
      var children = _react2.default.Children.toArray(this.props.children);
      return _react2.default.Children.map(children, function (child) {
        return typeof child.type === 'function' ? (0, _react.cloneElement)(child, props) : child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          theme = _props2.theme,
          visible = _props2.visible,
          children = _props2.children,
          anchorField = _props2.anchorField,
          className = _props2.className,
          onVisibilityChange = _props2.onVisibilityChange,
          toggleOnSelect = _props2.toggleOnSelect,
          props = (0, _objectWithoutProperties3.default)(_props2, ['theme', 'visible', 'children', 'anchorField', 'className', 'onVisibilityChange', 'toggleOnSelect']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          ref: function ref(_ref) {
            _this2.dropdown = _ref;
          },
          className: (0, _classnames2.default)(theme.Dropdown, className)
        }, props),
        this.renderAnchor(),
        this.state.visible && _react2.default.createElement(
          'div',
          { 'data-tid': 'dropdown-body', className: theme.Dropdown_Body },
          this.renderChildren()
        )
      );
    }
  }]);
  return Dropdown;
}(_react.Component), _class3.propTypes = {
  className: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  children: _propTypes2.default.node,
  onVisibilityChange: _propTypes2.default.func,
  anchorField: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
  toggleOnSelect: _propTypes2.default.bool
}, _class3.defaultProps = {
  toggleOnSelect: true,
  visible: false,
  theme: {},
  onVisibilityChange: function onVisibilityChange() {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'toggleVisibility', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'toggleVisibility'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'changeVisibility', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'changeVisibility'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleDocumentClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleDocumentClick'), _class2.prototype)), _class2)) || _class);
exports.default = Dropdown;