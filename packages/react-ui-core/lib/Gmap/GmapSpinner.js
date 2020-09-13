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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BounceLoader = _interopRequireDefault(require("./spinners/BounceLoader"));

var _dec, _class, _class2, _temp;

var GmapSpinner = (_dec = (0, _reactThemed.default)(['Gmap_Spinner'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(GmapSpinner, _PureComponent);

  function GmapSpinner(props) {
    var _this;

    (0, _classCallCheck2.default)(this, GmapSpinner);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GmapSpinner).call(this, props));
    _this.state = {
      loading: _this.props.loading
    };
    _this.closeTimer = null;
    return _this;
  }

  (0, _createClass2.default)(GmapSpinner, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      if (this.props.loading !== nextProps.loading && nextProps.loading) {
        this.close();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearTimeout(this.closeTimer);
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      var closeDelay = this.props.closeDelay; // add timeout so the gray background isn't the only thing we see

      this.closeTimer = window.setTimeout(function () {
        _this2.setState({
          loading: false
        });
      }, closeDelay);
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          closeDelay = _this$props.closeDelay,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "closeDelay"]);
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(className, theme.Gmap_Spinner)
      }, _react.default.createElement(_BounceLoader.default, (0, _extends2.default)({}, rest, {
        loading: loading
      })));
    }
  }]);
  return GmapSpinner;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  loading: _propTypes.default.bool,
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  closeDelay: _propTypes.default.number,
  color: _propTypes.default.string
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  closeDelay: 0,
  loading: false,
  theme: {},
  color: '#000'
}), _temp)) || _class);
exports.default = GmapSpinner;