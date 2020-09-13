"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _Dropdown = require("../Dropdown");

var _MenuWrapper = _interopRequireDefault(require("./MenuWrapper"));

var _dec, _class, _class2, _class3, _temp;

var DropdownMenu = (_dec = (0, _reactThemed.default)(/^DropdownMenu/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownMenu, _Component);

  function DropdownMenu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DropdownMenu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DropdownMenu).call(this, props));
    var selectedIndex = _this.selectedIndexFromValue() || _this.props.selectedIndex || 0;
    _this.state = {
      selectedIndex: selectedIndex
    };
    return _this;
  }

  (0, _createClass2.default)(DropdownMenu, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedIndex !== nextProps.selectedIndex) {
        this.setState({
          selectedIndex: nextProps.selectedIndex
        });
      } else if (this.props.selectedValue !== nextProps.selectedValue) {
        this.setState({
          selectedIndex: this.selectedIndexFromValue(nextProps.selectedValue)
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props = this.props,
          options = _this$props.options,
          selectedIndex = _this$props.selectedIndex,
          selectedValue = _this$props.selectedValue;
      return !(0, _isEqual.default)(options, nextProps.options) || selectedIndex !== nextProps.selectedIndex || selectedValue !== nextProps.selectedValue || this.state.selectedIndex !== nextState.selectedIndex;
    }
  }, {
    key: "selectedIndexFromValue",
    value: function selectedIndexFromValue() {
      var selectedValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.selectedValue;
      var index = this.props.options.findIndex(function (option) {
        return option.value === selectedValue;
      });
      return index === -1 ? 0 : index;
    }
  }, {
    key: "itemSelectionHandler",
    value: function itemSelectionHandler(item, index) {
      var onItemSelect = this.props.onItemSelect;
      if (onItemSelect) onItemSelect(item, index);
      this.setState({
        selectedIndex: index
      });
    }
  }, {
    key: "renderAnchorFieldText",
    value: function renderAnchorFieldText() {
      var createAnchorText = this.props.createAnchorText;
      if (createAnchorText) return createAnchorText(this.selectedItemLabel);
      return this.selectedItemLabel;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          className = _this$props2.className,
          options = _this$props2.options,
          selectedIndex = _this$props2.selectedIndex,
          selectedValue = _this$props2.selectedValue,
          onItemSelect = _this$props2.onItemSelect,
          createAnchorText = _this$props2.createAnchorText,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["theme", "className", "options", "selectedIndex", "selectedValue", "onItemSelect", "createAnchorText"]);
      return _react.default.createElement(_Dropdown.Dropdown, (0, _extends2.default)({
        className: (0, _classnames.default)(className, theme.DropdownMenu),
        anchorField: {
          children: this.renderAnchorFieldText()
        }
      }, props), _react.default.createElement(_MenuWrapper.default, {
        options: options,
        selectedIndex: this.state.selectedIndex,
        onItemSelect: this.itemSelectionHandler
      }));
    }
  }, {
    key: "selectedItem",
    get: function get() {
      return this.props.options[this.state.selectedIndex] || '';
    }
  }, {
    key: "selectedItemLabel",
    get: function get() {
      var item = this.selectedItem;
      return (0, _typeof2.default)(item) === 'object' ? item.label : item;
    }
  }]);
  return DropdownMenu;
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  theme: _propTypes.default.object,
  options: _propTypes.default.array,
  onItemSelect: _propTypes.default.func,
  className: _propTypes.default.string,
  selectedIndex: _propTypes.default.number,
  selectedValue: _propTypes.default.node,
  createAnchorText: _propTypes.default.func
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {},
  options: [],
  selectedIndex: 0,
  selectedValue: null,
  onItemSelect: function onItemSelect() {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "itemSelectionHandler", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "itemSelectionHandler"), _class2.prototype)), _class2)) || _class);
exports.default = DropdownMenu;