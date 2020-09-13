"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _Button = require("../Button");

var _dec, _class, _class2, _temp;

var DropdownAnchor = (_dec = (0, _reactThemed.default)(['DropdownAnchor-expand', 'DropdownAnchor-collapse', 'DropdownAnchor'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DropdownAnchor, _PureComponent);

  function DropdownAnchor() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, DropdownAnchor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DropdownAnchor)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          visible = _this$props.visible;
      if (onClick) onClick(visible);
    });
    return _this;
  }

  (0, _createClass2.default)(DropdownAnchor, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          anchor = _this$props2.anchor,
          className = _this$props2.className,
          theme = _this$props2.theme,
          visible = _this$props2.visible,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["anchor", "className", "theme", "visible"]);
      return _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(anchor, _Button.Button, (0, _objectSpread2.default)({
        'data-tid': 'dropdown-anchor',
        className: (0, _classnames.default)(className, theme.DropdownAnchor, theme["DropdownAnchor-".concat(visible ? 'expand' : 'collapse')]),
        onClick: this.handleClick
      }, props))));
    }
  }]);
  return DropdownAnchor;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  onClick: _propTypes.default.func,
  visible: _propTypes.default.bool,
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  changeVisibility: _propTypes.default.func,
  children: _propTypes.default.any,
  anchor: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.node, _propTypes.default.func])
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
exports.default = DropdownAnchor;