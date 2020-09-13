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

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _Field = _interopRequireDefault(require("./Field"));

var _dec, _class, _class2, _class3, _temp;

var LabelHidingField = (_dec = (0, _reactThemed.default)(/^LabelHidingField/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LabelHidingField, _Component);

  function LabelHidingField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LabelHidingField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LabelHidingField).call(this, props));
    _this.state = {
      labelVisible: !props.defaultValue && !props.value
    };
    return _this;
  }

  (0, _createClass2.default)(LabelHidingField, [{
    key: "onChange",
    value: function onChange(event) {
      if (event.target.value) {
        if (this.state.labelVisible) {
          this.setState({
            labelVisible: false
          });
        }
      } else {
        this.setState({
          labelVisible: true
        });
      }

      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          label = _this$props.label,
          onChange = _this$props.onChange,
          NodeType = _this$props.nodeType,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "label", "onChange", "nodeType"]);
      return _react.default.createElement(NodeType, (0, _extends2.default)({
        className: theme.LabelHidingField,
        onChange: this.onChange,
        label: this.fieldLabel
      }, props));
    }
  }, {
    key: "fieldLabel",
    get: function get() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          theme = _this$props2.theme;

      if (this.state.labelVisible) {
        return {
          text: label,
          className: theme.LabelHidingField_Label
        };
      }

      return null;
    }
  }]);
  return LabelHidingField;
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  theme: _propTypes.default.object,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func,
  nodeType: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object])
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {},
  nodeType: _Field.default
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onChange", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "onChange"), _class2.prototype)), _class2)) || _class);
exports.default = LabelHidingField;