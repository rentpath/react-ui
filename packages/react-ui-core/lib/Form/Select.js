"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _dec, _class, _class2, _class3, _temp;

var Select = (_dec = (0, _reactThemed.default)(/^Select/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Select, _Component);

  function Select(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Select);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Select).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass2.default)(Select, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.value !== nextProps.value) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange;
      if (defaultValue) return;
      this.setValue(event.target.value);
      if (onChange) onChange(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          options = _this$props2.options,
          className = _this$props2.className,
          variant = _this$props2.variant,
          value = _this$props2.value,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["theme", "options", "className", "variant", "value"]);
      return _react.default.createElement("select", (0, _extends2.default)({}, props, this.controlledProps, {
        className: (0, _classnames.default)(className, theme.Select, variant && theme["Select-".concat(variant)])
      }), this.children);
    }
  }, {
    key: "value",
    get: function get() {
      return this.state.value;
    }
  }, {
    key: "children",
    get: function get() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          options = _this$props3.options;
      if (children) return children;
      return options.map(function (opt) {
        return _react.default.createElement("option", {
          key: opt.value,
          value: opt.value
        }, opt.label);
      });
    }
  }, {
    key: "controlledProps",
    get: function get() {
      if (this.props.defaultValue) return {};
      return {
        onChange: this.handleChange,
        value: this.state.value
      };
    }
  }]);
  return Select;
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.string,
    label: _propTypes.default.string
  })),
  variant: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onChange: _propTypes.default.func
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {},
  options: []
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleChange", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleChange"), _class2.prototype)), _class2)) || _class);
exports.default = Select;