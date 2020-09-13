import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import { List } from '../List';
export var ENTER = 13;
export var ARROW_UP = 38;
export var ARROW_DOWN = 40;
var Menu = (_dec = themed(['Menu'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Menu, _PureComponent);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function (index) {
      var onItemMouseOver = _this.props.onItemMouseOver;
      if (index < 0 || index >= _this.options.length) return;

      _this.setState({
        highlightIndex: index
      }, function () {
        if (onItemMouseOver) onItemMouseOver(_this.highlightedOption);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelection", function (event) {
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

  _createClass(Menu, [{
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

      if (!isEqual(this.props.options, nextProps.options)) {
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
          props = _objectWithoutProperties(_this$props, ["theme", "onItemMouseOver", "onItemKeyOver", "className", "onItemSelect", "selectedIndex", "options"]);

      return React.createElement(List, _extends({
        role: "button",
        className: classnames(className, theme.Menu),
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
        return disabled !== true ? _toConsumableArray(options).concat([{
          disabled: disabled,
          index: index
        }]) : options;
      }, []);
    }
  }]);

  return Menu;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.node,
    disabled: PropTypes.bool
  })])),
  onItemSelect: PropTypes.func,
  onItemMouseOver: PropTypes.func,
  onItemKeyOver: PropTypes.func,
  nodeType: PropTypes.string,
  listItem: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
  highlightIndex: PropTypes.number,
  selectedIndex: PropTypes.number
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  nodeType: 'div',
  listItem: {
    nodeType: 'div'
  },
  options: []
}), _temp)) || _class);
export { Menu as default };