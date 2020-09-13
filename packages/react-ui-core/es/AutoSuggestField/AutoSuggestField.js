import _typeof from "@babel/runtime/helpers/typeof";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent, createElement } from 'react';
import { parseArgs } from '@rentpath/react-ui-utils';
import capitalize from 'lodash/capitalize';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import { Dropdown } from '../Dropdown';
import { Card } from '../Card';
import { Highlighter } from '../Highlighter';
import { Menu } from '../Menu';
import { Button } from '../Button';
import { Field } from '../Form';
export var ENTER = 13;
export var ESCAPE = 27;
var AutoSuggestField = (_dec = themed(/^AutoSuggestField/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AutoSuggestField, _PureComponent);

  function AutoSuggestField(props) {
    var _this;

    _classCallCheck(this, AutoSuggestField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoSuggestField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onItemKeyOver", function (value) {
      var onItemKeyOver = _this.props.onItemKeyOver;

      _this.setState({
        keyedOverSelection: value
      });

      if (onItemKeyOver) onItemKeyOver(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onItemMouseOver", function (value) {
      var onItemMouseOver = _this.props.onItemMouseOver;
      if (onItemMouseOver) onItemMouseOver(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (event) {
      _this.props.onSubmit(_this.state.value, event.type);

      _this.updateValueAndClose(_this.state.value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSuggestionSelection", function (value, _index, eventType) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleVisibilityChange", function (visible) {
      var onVisibilityChange = _this.props.onVisibilityChange;

      _this.setState({
        visible: visible
      });

      if (onVisibilityChange) onVisibilityChange(visible);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClear", function () {
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

  _createClass(AutoSuggestField, [{
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
      var name = capitalize(type);
      if (!button) return null;
      return createElement.apply(void 0, _toConsumableArray(parseArgs(button, Button, _objectSpread({}, props, {
        onClick: this["handle".concat(name)],
        'data-tid': "autosuggest-".concat(type, "-button"),
        className: theme["AutoSuggestField_Button".concat(name)]
      }))));
    }
  }, {
    key: "renderAnchorField",
    value: function renderAnchorField() {
      return _objectSpread({}, this.props.anchorField, {
        value: this.inputValue,
        anchor: Field,
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
          props = _objectWithoutProperties(_this$props2, ["theme", "clearButton", "submitButton", "anchorField", "suggestions", "className", "onSubmit", "onItemMouseOver", "onItemKeyOver", "onSelection", "highlight", "valueSelector", "value", "onAfterClear", "submitOnSelection", "visible", "onInput", "onVisibilityChange", "showSelectionInInputField"]);

      return React.createElement("div", {
        className: classnames(theme.AutoSuggestField, className),
        "data-tid": "autosuggest-field"
      }, React.createElement(Dropdown, _extends({
        anchorField: this.renderAnchorField(),
        value: this.inputValue,
        visible: this.state.visible,
        onVisibilityChange: this.handleVisibilityChange
      }, props), React.createElement(Card, null, React.createElement(Menu, {
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
      return _objectSpread({
        nodeType: Highlighter,
        indexHighlighted: indexHighlighted,
        ignoreCase: true,
        pattern: this.state.value
      }, _typeof(highlight) === 'object' ? highlight : {});
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
}(PureComponent), _defineProperty(_class2, "propTypes", {
  className: PropTypes.string,
  theme: PropTypes.object,
  anchorField: PropTypes.object,
  clearButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
  submitButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
  highlight: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  highlightIndex: PropTypes.number,
  onAfterClear: PropTypes.func,
  onSubmit: PropTypes.func,
  onSelection: PropTypes.func,
  onItemMouseOver: PropTypes.func,
  onItemKeyOver: PropTypes.func,
  onInput: PropTypes.func,
  submitOnSelection: PropTypes.bool,
  visible: PropTypes.bool,
  onVisibilityChange: PropTypes.func,
  suggestions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.node]),
  value: PropTypes.string,
  valueSelector: PropTypes.func,
  showSelectionInInputField: PropTypes.bool
}), _defineProperty(_class2, "defaultProps", {
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
export { AutoSuggestField as default };