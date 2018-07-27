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

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _List = require('../List');

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

var ENTER = 13;
var ARROW_UP = 38;
var ARROW_DOWN = 40;

var Menu = (_dec = (0, _reactThemed2.default)(['Menu'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(Menu, _PureComponent);

  function Menu(props) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

    _this.state = {
      highlightIndex: -1,
      indexedOptionIndex: -1,
      indexedOptions: _this.generateIndexedOptions()
    };
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
      this.highlightIndexedOption(0);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.highlightIndex !== nextProps.highlightIndex) {
        this.setState({ highlightIndex: nextProps.highlightIndex });
      }

      if (this.props.options !== nextProps.options) {
        this.setState({
          indexedOptions: this.generateIndexedOptions()
        }, this.highlightIndexedOption(0));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      var code = event.keyCode || event.key || event.keyIndentifier;

      switch (code) {
        case ARROW_DOWN:
          this.highlightIndexedOption(this.state.indexedOptionIndex + 1);
          break;
        case ARROW_UP:
          event.preventDefault();
          this.highlightIndexedOption(this.state.indexedOptionIndex - 1);
          break;
        case ENTER:
          event.preventDefault();
          this.handleSelection();
          break;
        default:
      }
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection() {
      var onItemSelect = this.props.onItemSelect;


      var option = this.highlightedOption;

      if (onItemSelect && option && !option.disabled) {
        onItemSelect(option, this.state.highlightIndex);
      }
    }
  }, {
    key: 'highlightOption',
    value: function highlightOption(index) {
      var _this2 = this;

      var onItemMouseOver = this.props.onItemMouseOver;


      if (index < 0 || index >= this.options.length) return;
      this.setState({
        highlightIndex: index
      }, function () {
        if (onItemMouseOver) onItemMouseOver(_this2.highlightedOption);
      });
    }
  }, {
    key: 'highlightIndexedOption',
    value: function highlightIndexedOption(index) {
      var _this3 = this;

      var onItemMouseOver = this.props.onItemMouseOver;


      if (index < 0 || index >= this.state.indexedOptions.length) return;
      this.setState({
        highlightIndex: this.state.indexedOptions[index].index,
        indexedOptionIndex: index
      }, function () {
        if (onItemMouseOver) onItemMouseOver(_this3.highlightedOption);
      });
    }
  }, {
    key: 'generateIndexedOptions',
    value: function generateIndexedOptions() {
      return this.options.map(function (option, index) {
        return {
          disabled: option.disabled,
          index: index
        };
      }).filter(function (option) {
        return option.disabled !== true;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          onItemMouseOver = _props.onItemMouseOver,
          className = _props.className,
          onItemSelect = _props.onItemSelect,
          selectedIndex = _props.selectedIndex,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'onItemMouseOver', 'className', 'onItemSelect', 'selectedIndex']);


      return _react2.default.createElement(_List.List, (0, _extends3.default)({
        role: 'button',
        className: (0, _classnames2.default)(className, theme.Menu),
        items: this.options || [],
        highlightIndex: this.state.highlightIndex,
        selectedIndex: selectedIndex,
        onClick: this.handleSelection,
        onMouseEnter: this.highlightOption
      }, props));
    }
  }, {
    key: 'options',
    get: function get() {
      return this.props.options || [];
    }
  }, {
    key: 'highlightedOption',
    get: function get() {
      return this.options[this.state.highlightIndex || 0];
    }
  }]);
  return Menu;
}(_react.PureComponent), _class3.propTypes = {
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  options: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.shape({
    label: _propTypes2.default.node,
    value: _propTypes2.default.node,
    disabled: _propTypes2.default.bool
  })])),
  onItemSelect: _propTypes2.default.func,
  onItemMouseOver: _propTypes2.default.func,
  nodeType: _propTypes2.default.string,
  listItem: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
  highlightIndex: _propTypes2.default.number,
  selectedIndex: _propTypes2.default.number
}, _class3.defaultProps = {
  theme: {},
  nodeType: 'div',
  listItem: { nodeType: 'div' },
  options: []
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'onKeyDown', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'onKeyDown'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSelection', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleSelection'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'highlightOption', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'highlightOption'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'highlightIndexedOption', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'highlightIndexedOption'), _class2.prototype)), _class2)) || _class);
exports.default = Menu;