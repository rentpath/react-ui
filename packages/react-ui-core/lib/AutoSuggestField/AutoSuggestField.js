"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ESCAPE = exports.ENTER = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _capitalize = _interopRequireDefault(require("lodash/capitalize"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Dropdown = require("../Dropdown");

var _Card = require("../Card");

var _Highlighter = require("../Highlighter");

var _Menu = require("../Menu");

var _Button = require("../Button");

var _Form = require("../Form");

var _dec, _class, _class2, _temp;

var ENTER = 13;
exports.ENTER = ENTER;
var ESCAPE = 27;
exports.ESCAPE = ESCAPE;
var AutoSuggestField = (_dec = (0, _reactThemed.default)(/^AutoSuggestField/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(AutoSuggestField, _PureComponent);

  function AutoSuggestField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AutoSuggestField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AutoSuggestField).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onKeyDown", function (event) {
      var code = event.keyCode || event.key || event.keyIndentifier;

      switch (code) {
        case ESCAPE:
          _this.handleClear();

          break;

        case ENTER:
          _this.handleSubmit(event);

          break;

        default:
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onChange", function (event) {
      var valueSelector = _this.props.valueSelector;
      var keyedOverSelection = _this.state.keyedOverSelection;

      if (keyedOverSelection) {
        _this.setState({
          keyedOverSelection: null,
          value: valueSelector(keyedOverSelection)
        });
      }

      var value = event.target.value;

      _this.setState({
        value: value
      });

      _this.handleVisibilityChange(true);

      _this.props.onInput(value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onItemKeyOver", function (value) {
      var onItemKeyOver = _this.props.onItemKeyOver;

      _this.setState({
        keyedOverSelection: value
      });

      if (onItemKeyOver) onItemKeyOver(value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onItemMouseOver", function (value) {
      var onItemMouseOver = _this.props.onItemMouseOver;
      if (onItemMouseOver) onItemMouseOver(value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSubmit", function (event) {
      _this.props.onSubmit(_this.state.value, event.type);

      _this.updateValueAndClose(_this.state.value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSuggestionSelection", function (value, _index, eventType) {
      var _this$props = _this.props,
          onSubmit = _this$props.onSubmit,
          onSelection = _this$props.onSelection,
          submitOnSelection = _this$props.submitOnSelection,
          onInput = _this$props.onInput,
          valueSelector = _this$props.valueSelector;
      onInput(value);
      onSelection(value);

      _this.updateValueAndClose(valueSelector(value), function () {
        if (submitOnSelection) onSubmit(_this.state.value, eventType);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleVisibilityChange", function (visible) {
      var onVisibilityChange = _this.props.onVisibilityChange;

      _this.setState({
        visible: visible
      });

      if (onVisibilityChange) onVisibilityChange(visible);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClear", function () {
      var onAfterClear = _this.props.onAfterClear;

      _this.updateValueAndClose('');

      if (onAfterClear) onAfterClear();
    });
    var _value = props.value,
        _visible = props.visible;
    _this.state = {
      value: _value,
      visible: _visible,
      keyedOverSelection: null
    };
    return _this;
  }

  (0, _createClass2.default)(AutoSuggestField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({
          value: nextProps.value,
          keyedOverSelection: null
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "updateValueAndClose",
    value: function updateValueAndClose(value) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      this.handleVisibilityChange(false);
      this.setState({
        value: value
      }, callback);
    }
  }, {
    key: "renderButton",
    value: function renderButton(button, type, props) {
      var theme = this.props.theme;
      var name = (0, _capitalize.default)(type);
      if (!button) return null;
      return _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(button, _Button.Button, (0, _objectSpread2.default)({}, props, {
        onClick: this["handle".concat(name)],
        'data-tid': "autosuggest-".concat(type, "-button"),
        className: theme["AutoSuggestField_Button".concat(name)]
      }))));
    }
  }, {
    key: "renderAnchorField",
    value: function renderAnchorField() {
      return (0, _objectSpread2.default)({}, this.props.anchorField, {
        value: this.inputValue,
        anchor: _Form.Field,
        onChange: this.onChange
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          clearButton = _this$props2.clearButton,
          submitButton = _this$props2.submitButton,
          anchorField = _this$props2.anchorField,
          suggestions = _this$props2.suggestions,
          className = _this$props2.className,
          onSubmit = _this$props2.onSubmit,
          onItemMouseOver = _this$props2.onItemMouseOver,
          onItemKeyOver = _this$props2.onItemKeyOver,
          onSelection = _this$props2.onSelection,
          highlight = _this$props2.highlight,
          valueSelector = _this$props2.valueSelector,
          value = _this$props2.value,
          onAfterClear = _this$props2.onAfterClear,
          submitOnSelection = _this$props2.submitOnSelection,
          visible = _this$props2.visible,
          onInput = _this$props2.onInput,
          onVisibilityChange = _this$props2.onVisibilityChange,
          showSelectionInInputField = _this$props2.showSelectionInInputField,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["theme", "clearButton", "submitButton", "anchorField", "suggestions", "className", "onSubmit", "onItemMouseOver", "onItemKeyOver", "onSelection", "highlight", "valueSelector", "value", "onAfterClear", "submitOnSelection", "visible", "onInput", "onVisibilityChange", "showSelectionInInputField"]);
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(theme.AutoSuggestField, className),
        "data-tid": "autosuggest-field"
      }, _react.default.createElement(_Dropdown.Dropdown, (0, _extends2.default)({
        anchorField: this.renderAnchorField(),
        value: this.inputValue,
        visible: this.state.visible,
        onVisibilityChange: this.handleVisibilityChange
      }, props), _react.default.createElement(_Card.Card, null, _react.default.createElement(_Menu.Menu, {
        listItem: this.highlightedListItem,
        options: suggestions,
        onItemSelect: this.handleSuggestionSelection,
        onItemMouseOver: this.onItemMouseOver,
        onItemKeyOver: this.onItemKeyOver
      }))), this.renderButton(submitButton, 'submit', props), this.renderButton(clearButton, 'clear', props));
    }
  }, {
    key: "highlightedListItem",
    get: function get() {
      var highlight = this.props.highlight;
      if (!highlight) return {
        nodeType: 'div'
      };
      var indexHighlighted = highlight.indexHighlighted >= 0 ? highlight.indexHighlighted : 0;
      return (0, _objectSpread2.default)({
        nodeType: _Highlighter.Highlighter,
        indexHighlighted: indexHighlighted,
        ignoreCase: true,
        pattern: this.state.value
      }, (0, _typeof2.default)(highlight) === 'object' ? highlight : {});
    }
  }, {
    key: "inputValue",
    get: function get() {
      var _this$state = this.state,
          value = _this$state.value,
          keyedOverSelection = _this$state.keyedOverSelection;
      var _this$props3 = this.props,
          showSelectionInInputField = _this$props3.showSelectionInInputField,
          valueSelector = _this$props3.valueSelector;
      if (!showSelectionInInputField) return value;
      return valueSelector(keyedOverSelection) || value;
    }
  }]);
  return AutoSuggestField;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  anchorField: _propTypes.default.object,
  clearButton: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
  submitButton: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
  highlight: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),
  highlightIndex: _propTypes.default.number,
  onAfterClear: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  onSelection: _propTypes.default.func,
  onItemMouseOver: _propTypes.default.func,
  onItemKeyOver: _propTypes.default.func,
  onInput: _propTypes.default.func,
  submitOnSelection: _propTypes.default.bool,
  visible: _propTypes.default.bool,
  onVisibilityChange: _propTypes.default.func,
  suggestions: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.object), _propTypes.default.node]),
  value: _propTypes.default.string,
  valueSelector: _propTypes.default.func,
  showSelectionInInputField: _propTypes.default.bool
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  anchorField: {},
  value: '',
  onSubmit: function onSubmit() {},
  onInput: function onInput() {},
  onSelection: function onSelection() {},
  valueSelector: function valueSelector(value) {
    return value;
  },
  submitOnSelection: true,
  visible: false,
  highlight: false
}), _temp)) || _class);
exports.default = AutoSuggestField;