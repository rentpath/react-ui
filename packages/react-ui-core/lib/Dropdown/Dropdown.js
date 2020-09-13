"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropdownAnchor = _interopRequireDefault(require("./DropdownAnchor"));

var _dec, _class, _class2, _class3, _temp;

var Dropdown = (_dec = (0, _reactThemed.default)(/^Dropdown/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Dropdown);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Dropdown).call(this, props));
    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  (0, _createClass2.default)(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visible !== nextProps.visible) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility() {
      var _this$props = this.props,
          onVisibilityChange = _this$props.onVisibilityChange,
          toggleOnSelect = _this$props.toggleOnSelect;
      var visible = toggleOnSelect ? !this.state.visible : true;

      if (this.state.visible !== visible) {
        onVisibilityChange(visible);
        this.setState({
          visible: visible
        });
      }
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(event) {
      var eventTarget = event.target;
      var parentTarget = event.target.parentNode;
      var hasParentTarget = this.dropdown.contains(parentTarget);
      var parentIsDropdown = hasParentTarget && parentTarget.dataset.self === 'dropdown';
      var targetIsDropdown = this.dropdown.contains(eventTarget) || parentIsDropdown;
      var shouldFireEvent = this.state.visible && !targetIsDropdown;

      if (shouldFireEvent) {
        this.setState({
          visible: false
        });
        this.props.onVisibilityChange(false);
      }
    }
  }, {
    key: "renderAnchor",
    value: function renderAnchor() {
      return _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(this.props.anchorField, _DropdownAnchor.default, {
        'data-tid': 'dropdown-anchor',
        visible: this.state.visible,
        onClick: this.toggleVisibility,
        className: this.props.className
      })));
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var props = {
        onSelect: this.toggleVisibility
      };

      var children = _react.default.Children.toArray(this.props.children);

      return _react.default.Children.map(children, function (child) {
        return typeof child.type === 'function' ? (0, _react.cloneElement)(child, props) : child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          theme = _this$props2.theme,
          _ = _this$props2.visible,
          children = _this$props2.children,
          anchorField = _this$props2.anchorField,
          className = _this$props2.className,
          onVisibilityChange = _this$props2.onVisibilityChange,
          toggleOnSelect = _this$props2.toggleOnSelect,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["theme", "visible", "children", "anchorField", "className", "onVisibilityChange", "toggleOnSelect"]);
      var visible = this.state.visible;
      return _react.default.createElement("div", (0, _extends2.default)({
        ref: function ref(_ref) {
          _this2.dropdown = _ref;
        },
        className: (0, _classnames.default)(theme.Dropdown, className, theme["Dropdown-".concat(visible ? 'expand' : 'collapse')])
      }, props, {
        "data-self": "dropdown"
      }), this.renderAnchor(), visible && _react.default.createElement("div", {
        "data-tid": "dropdown-body",
        className: theme.Dropdown_Body
      }, this.renderChildren()));
    }
  }]);
  return Dropdown;
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  visible: _propTypes.default.bool,
  theme: _propTypes.default.object,
  children: _propTypes.default.node,
  onVisibilityChange: _propTypes.default.func,
  anchorField: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
  toggleOnSelect: _propTypes.default.bool
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  toggleOnSelect: true,
  visible: false,
  theme: {},
  onVisibilityChange: function onVisibilityChange() {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "toggleVisibility", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "toggleVisibility"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleDocumentClick", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleDocumentClick"), _class2.prototype)), _class2)) || _class);
exports.default = Dropdown;