'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _capitalize = require('lodash/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Dropdown = require('../Dropdown');

var _Card = require('../Card');

var _Highlighter = require('../Highlighter');

var _Menu = require('../Menu');

var _Button = require('../Button');

var _Form = require('../Form');

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
var ESCAPE = 27;

var AutoSuggestField = (_dec = (0, _reactThemed2.default)(/^(AutoSuggestField|Button_Clear|Button_Submit)/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(AutoSuggestField, _Component);

  function AutoSuggestField(props) {
    (0, _classCallCheck3.default)(this, AutoSuggestField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AutoSuggestField.__proto__ || (0, _getPrototypeOf2.default)(AutoSuggestField)).call(this, props));

    var value = props.value,
        visible = props.visible,
        onInput = props.onInput;


    _this.onInput = (0, _debounce2.default)(onInput, 300);
    _this.state = {
      value: value,
      visible: visible
    };
    return _this;
  }

  (0, _createClass3.default)(AutoSuggestField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(this.props.value === nextProps.value)) {
        this.setState({
          value: nextProps.value
        });
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
      var suggestions = this.props.suggestions;
      var visible = this.state.visible;

      var code = event.keyCode || event.key || event.keyIndentifier;

      switch (code) {
        case ESCAPE:
          this.handleClear();
          break;
        case ENTER:
          if (!visible || !suggestions || !suggestions.length) {
            this.handleSubmit(this.state.value);
          }
          break;
        default:
      }
    }
  }, {
    key: 'updateValueAndClose',
    value: function updateValueAndClose(value) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      this.handleVisibilityChange(false);
      this.setState({
        value: value
      }, cb);
    }
  }, {
    key: 'handleInput',
    value: function handleInput(event) {
      var value = event.target.value;
      this.setState({ value: value });
      this.handleVisibilityChange(true);
      this.onInput(value);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.onSubmit(this.state.value);
      this.updateValueAndClose(this.state.value);
    }
  }, {
    key: 'handleSuggestionSelection',
    value: function handleSuggestionSelection(value) {
      var _this2 = this;

      var _props = this.props,
          onSubmit = _props.onSubmit,
          onSelection = _props.onSelection,
          submitOnSelection = _props.submitOnSelection,
          onInput = _props.onInput,
          valueSelector = _props.valueSelector;


      onInput(value);
      onSelection(value);

      this.updateValueAndClose(valueSelector(value), function () {
        if (submitOnSelection) onSubmit(_this2.state.value);
      });
    }
  }, {
    key: 'handleVisibilityChange',
    value: function handleVisibilityChange(visible) {
      var onVisibilityChange = this.props.onVisibilityChange;
      this.setState({
        visible: visible
      });
      if (onVisibilityChange) onVisibilityChange(visible);
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      var onAfterClear = this.props.onAfterClear;

      this.updateValueAndClose('');
      if (onAfterClear) onAfterClear();
    }
  }, {
    key: 'renderButton',
    value: function renderButton(button, type, props) {
      var theme = this.props.theme;

      var name = (0, _capitalize2.default)(type);

      if (!button) return null;

      return _react.createElement.apply(undefined, (0, _toConsumableArray3.default)((0, _reactUiUtils.parseArgs)(button, _Button.Button, (0, _extends3.default)({}, props, {
        onClick: this['handle' + name],
        'data-tid': 'autosuggest-' + type + '-button',
        className: theme['Button_' + name]
      }))));
    }
  }, {
    key: 'renderAnchorField',
    value: function renderAnchorField() {
      return (0, _extends3.default)({}, this.props.anchorField, {
        value: this.state.value,
        anchor: _Form.Field,
        onChange: this.handleInput
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          theme = _props2.theme,
          clearButton = _props2.clearButton,
          submitButton = _props2.submitButton,
          anchorField = _props2.anchorField,
          suggestions = _props2.suggestions,
          className = _props2.className,
          onSubmit = _props2.onSubmit,
          onItemMouseOver = _props2.onItemMouseOver,
          onSelection = _props2.onSelection,
          highlight = _props2.highlight,
          valueSelector = _props2.valueSelector,
          value = _props2.value,
          onAfterClear = _props2.onAfterClear,
          submitOnSelection = _props2.submitOnSelection,
          visible = _props2.visible,
          onInput = _props2.onInput,
          onVisibilityChange = _props2.onVisibilityChange,
          props = (0, _objectWithoutProperties3.default)(_props2, ['theme', 'clearButton', 'submitButton', 'anchorField', 'suggestions', 'className', 'onSubmit', 'onItemMouseOver', 'onSelection', 'highlight', 'valueSelector', 'value', 'onAfterClear', 'submitOnSelection', 'visible', 'onInput', 'onVisibilityChange']);


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(theme.AutoSuggestField, className),
          'data-tid': 'autosuggest-field'
        },
        _react2.default.createElement(
          _Dropdown.Dropdown,
          (0, _extends3.default)({
            anchorField: this.renderAnchorField(),
            value: this.state.value,
            visible: this.state.visible,
            onVisibilityChange: this.handleVisibilityChange
          }, props),
          _react2.default.createElement(
            _Card.Card,
            null,
            _react2.default.createElement(_Menu.Menu, {
              listItem: this.highlightedListItem,
              options: suggestions,
              onItemSelect: this.handleSuggestionSelection,
              onItemMouseOver: onItemMouseOver
            })
          )
        ),
        this.renderButton(submitButton, 'submit', props),
        this.renderButton(clearButton, 'clear', props)
      );
    }
  }, {
    key: 'highlightedListItem',
    get: function get() {
      var _this3 = this;

      var highlight = this.props.highlight;


      if (!highlight) return { nodeType: 'div' };
      var indexHighlighted = highlight.indexHighlighted >= 0 ? highlight.indexHighlighted : 1;

      return { nodeType: function nodeType(props) {
          return _react2.default.createElement(_Highlighter.Highlighter, (0, _extends3.default)({
            indexHighlighted: indexHighlighted
          }, props, {
            pattern: _this3.state.value
          }));
        }
      };
    }
  }]);
  return AutoSuggestField;
}(_react.Component), _class3.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  anchorField: _propTypes2.default.object,
  clearButton: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
  submitButton: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
  highlight: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  highlightIndex: _propTypes2.default.number,
  onAfterClear: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onSelection: _propTypes2.default.func,
  onItemMouseOver: _propTypes2.default.func,
  onInput: _propTypes2.default.func,
  submitOnSelection: _propTypes2.default.bool,
  visible: _propTypes2.default.bool,
  onVisibilityChange: _propTypes2.default.func,
  suggestions: _propTypes2.default.node,
  value: _propTypes2.default.string,
  valueSelector: _propTypes2.default.func
}, _class3.defaultProps = {
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
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'onKeyDown', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'onKeyDown'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleInput', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleInput'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSubmit', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleSubmit'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSuggestionSelection', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleSuggestionSelection'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleVisibilityChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleVisibilityChange'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleClear', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleClear'), _class2.prototype)), _class2)) || _class);
exports.default = AutoSuggestField;