'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _Dropdown = require('../Dropdown');

var _MenuWrapper = require('./MenuWrapper');

var _MenuWrapper2 = _interopRequireDefault(_MenuWrapper);

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

var DropdownMenu = (_dec = (0, _reactThemed2.default)(/^DropdownMenu/), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(DropdownMenu, _Component);

  function DropdownMenu(props) {
    (0, _classCallCheck3.default)(this, DropdownMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropdownMenu.__proto__ || (0, _getPrototypeOf2.default)(DropdownMenu)).call(this, props));

    var selectedIndex = _this.selectedIndexFromValue() || _this.props.selectedIndex || 0;
    _this.state = { selectedIndex: selectedIndex };
    return _this;
  }

  (0, _createClass3.default)(DropdownMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedIndex !== nextProps.selectedIndex) {
        this.setState({ selectedIndex: nextProps.selectedIndex });
      } else if (this.props.selectedValue !== nextProps.selectedValue) {
        this.setState({ selectedIndex: this.selectedIndexFromValue(nextProps.selectedValue) });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _props = this.props,
          options = _props.options,
          selectedIndex = _props.selectedIndex,
          selectedValue = _props.selectedValue;


      return !(0, _isEqual2.default)(options, nextProps.options) || selectedIndex !== nextProps.selectedIndex || selectedValue !== nextProps.selectedValue || this.state.selectedIndex !== nextState.selectedIndex;
    }
  }, {
    key: 'selectedIndexFromValue',
    value: function selectedIndexFromValue() {
      var selectedValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.selectedValue;

      var index = this.props.options.findIndex(function (option) {
        return option.value === selectedValue;
      });
      return index === -1 ? 0 : index;
    }
  }, {
    key: 'itemSelectionHandler',
    value: function itemSelectionHandler(item, index) {
      var onItemSelect = this.props.onItemSelect;


      if (onItemSelect) onItemSelect(item, index);

      this.setState({ selectedIndex: index });
    }
  }, {
    key: 'renderAnchorFieldText',
    value: function renderAnchorFieldText() {
      var createAnchorText = this.props.createAnchorText;


      if (createAnchorText) return createAnchorText(this.selectedItemLabel);
      return this.selectedItemLabel;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          theme = _props2.theme,
          className = _props2.className,
          options = _props2.options,
          selectedIndex = _props2.selectedIndex,
          selectedValue = _props2.selectedValue,
          onItemSelect = _props2.onItemSelect,
          createAnchorText = _props2.createAnchorText,
          props = (0, _objectWithoutProperties3.default)(_props2, ['theme', 'className', 'options', 'selectedIndex', 'selectedValue', 'onItemSelect', 'createAnchorText']);


      return _react2.default.createElement(
        _Dropdown.Dropdown,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(className, theme.DropdownMenu),
          anchorField: { children: this.renderAnchorFieldText() }
        }, props),
        _react2.default.createElement(_MenuWrapper2.default, {
          options: options,
          selectedIndex: this.state.selectedIndex,
          onItemSelect: this.itemSelectionHandler
        })
      );
    }
  }, {
    key: 'selectedItem',
    get: function get() {
      return this.props.options[this.state.selectedIndex] || '';
    }
  }, {
    key: 'selectedItemLabel',
    get: function get() {
      var item = this.selectedItem;
      return (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'object' ? item.label : item;
    }
  }]);
  return DropdownMenu;
}(_react.Component), _class3.propTypes = {
  theme: _propTypes2.default.object,
  options: _propTypes2.default.array,
  onItemSelect: _propTypes2.default.func,
  className: _propTypes2.default.string,
  selectedIndex: _propTypes2.default.number,
  selectedValue: _propTypes2.default.node,
  createAnchorText: _propTypes2.default.func
}, _class3.defaultProps = {
  theme: {},
  options: [],
  selectedIndex: 0,
  selectedValue: null,
  onItemSelect: function onItemSelect() {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'itemSelectionHandler', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'itemSelectionHandler'), _class2.prototype)), _class2)) || _class);
exports.default = DropdownMenu;