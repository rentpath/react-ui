"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ARROW_DOWN = exports.ARROW_UP = exports.ENTER = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _List = require("../List");

var _dec, _class, _class2, _temp;

var ENTER = 13;
exports.ENTER = ENTER;
var ARROW_UP = 38;
exports.ARROW_UP = ARROW_UP;
var ARROW_DOWN = 40;
exports.ARROW_DOWN = ARROW_DOWN;
var Menu = (_dec = (0, _reactThemed.default)(['Menu'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Menu, _PureComponent);

  function Menu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Menu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Menu).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onKeyDown", function (event) {
      var code = event.keyCode || event.key || event.keyIndentifier;

      switch (code) {
        case ARROW_DOWN:
          event.preventDefault();

          _this.highlightOptionAtIndex(_this.state.indexedOptionIndex + 1);

          break;

        case ARROW_UP:
          event.preventDefault();

          _this.highlightOptionAtIndex(_this.state.indexedOptionIndex - 1);

          break;

        case ENTER:
          event.preventDefault();

          _this.handleSelection(event);

          break;

        default:
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onMouseEnter", function (index) {
      var onItemMouseOver = _this.props.onItemMouseOver;
      if (index < 0 || index >= _this.options.length) return;

      _this.setState({
        highlightIndex: index
      }, function () {
        if (onItemMouseOver) onItemMouseOver(_this.highlightedOption);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelection", function (event) {
      var onItemSelect = _this.props.onItemSelect;
      var option = _this.highlightedOption;

      if (onItemSelect && option && !option.disabled) {
        onItemSelect(option, _this.state.highlightIndex, event.type || 'keydown');
      }
    });
    _this.state = {
      highlightIndex: -1,
      indexedOptionIndex: -1
    };
    return _this;
  }

  (0, _createClass2.default)(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
      if (!this.props.highlightIndex) this.resetHighlightedIndex();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.highlightIndex !== nextProps.highlightIndex) {
        this.setState({
          highlightIndex: nextProps.highlightIndex
        });
      }

      if (!(0, _isEqual.default)(this.props.options, nextProps.options)) {
        this.resetHighlightedIndex();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "resetHighlightedIndex",
    value: function resetHighlightedIndex() {
      this.setState({
        highlightIndex: -1,
        indexedOptionIndex: -1
      });
    }
  }, {
    key: "highlightOptionAtIndex",
    value: function highlightOptionAtIndex(index) {
      var _this2 = this;

      var onItemKeyOver = this.props.onItemKeyOver;
      var indexedOptions = this.indexedOptions;
      if (index < 0 || index >= indexedOptions.length) return;
      this.setState({
        highlightIndex: indexedOptions[index].index,
        indexedOptionIndex: index
      }, function () {
        if (onItemKeyOver) onItemKeyOver(_this2.highlightedOption);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          onItemMouseOver = _this$props.onItemMouseOver,
          onItemKeyOver = _this$props.onItemKeyOver,
          className = _this$props.className,
          onItemSelect = _this$props.onItemSelect,
          selectedIndex = _this$props.selectedIndex,
          options = _this$props.options,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "onItemMouseOver", "onItemKeyOver", "className", "onItemSelect", "selectedIndex", "options"]);
      return _react.default.createElement(_List.List, (0, _extends2.default)({
        role: "button",
        className: (0, _classnames.default)(className, theme.Menu),
        items: this.options,
        highlightIndex: this.state.highlightIndex,
        selectedIndex: selectedIndex,
        onClick: this.handleSelection,
        onMouseEnter: this.onMouseEnter
      }, props));
    }
  }, {
    key: "options",
    get: function get() {
      return this.props.options || [];
    }
  }, {
    key: "highlightedOption",
    get: function get() {
      return this.options[this.state.highlightIndex];
    }
  }, {
    key: "indexedOptions",
    get: function get() {
      return this.options.reduce(function (options, _ref, index) {
        var disabled = _ref.disabled;
        return disabled !== true ? (0, _toConsumableArray2.default)(options).concat([{
          disabled: disabled,
          index: index
        }]) : options;
      }, []);
    }
  }]);
  return Menu;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.shape({
    label: _propTypes.default.node,
    value: _propTypes.default.node,
    disabled: _propTypes.default.bool
  })])),
  onItemSelect: _propTypes.default.func,
  onItemMouseOver: _propTypes.default.func,
  onItemKeyOver: _propTypes.default.func,
  nodeType: _propTypes.default.string,
  listItem: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
  highlightIndex: _propTypes.default.number,
  selectedIndex: _propTypes.default.number
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  nodeType: 'div',
  listItem: {
    nodeType: 'div'
  },
  options: []
}), _temp)) || _class);
exports.default = Menu;