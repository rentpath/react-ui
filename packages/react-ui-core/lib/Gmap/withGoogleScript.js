"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var API_BASE_URL = 'https://maps.googleapis.com/maps/api/js';
var SCRIPT_ID = 'google-maps-api-script';
var EVENT_NAME = 'googleMapsLoaded';

function _default(BaseComponent) {
  var _class, _class2, _temp;

  var Container = (_class = (_temp = _class2 =
  /*#__PURE__*/
  function (_PureComponent) {
    (0, _inherits2.default)(Container, _PureComponent);

    function Container() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Container);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        loaded: _this.props.loaded || false,
        spinner: _this.props.spinner
      });
      return _this;
    }

    (0, _createClass2.default)(Container, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.state.loaded || this.hasExistingScript && this.isInitialized) {
          // no other place to put this due to SSR
          this.setState({
            loaded: true
          }); // eslint-disable-line react/no-did-mount-set-state

          return;
        }

        this.mapLoadedListener();
        this.loadScript();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeLoadedListener();
      }
    }, {
      key: "removeLoadedListener",
      value: function removeLoadedListener() {
        window.removeEventListener(EVENT_NAME, this.loadedHandler);
      }
    }, {
      key: "mapLoadedListener",
      value: function mapLoadedListener() {
        var _this2 = this;

        this.loadedHandler = function () {
          _this2.setState({
            loaded: true
          });

          _this2.removeLoadedListener();
        };

        window.addEventListener(EVENT_NAME, this.loadedHandler);
      }
    }, {
      key: "scriptLoaded",
      value: function scriptLoaded() {
        // NOTE: IE 11 needs a polyfill for CustomEvent
        window.dispatchEvent(new CustomEvent(EVENT_NAME));
      }
    }, {
      key: "loadScript",
      value: function loadScript() {
        if (!this.hasExistingScript) {
          window.google_map_initialize = this.scriptLoaded;
          var script = document.createElement('script');
          script.async = true;
          script.defer = true;
          script.id = SCRIPT_ID;
          script.src = this.api;
          script.onerror = this.props.onScriptLoadError;
          document.head.appendChild(script);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var loaded = this.state.loaded;
        var _this$props = this.props,
            spinner = _this$props.spinner,
            apiKey = _this$props.apiKey,
            libraries = _this$props.libraries,
            version = _this$props.version,
            onScriptLoadError = _this$props.onScriptLoadError,
            rest = (0, _objectWithoutProperties2.default)(_this$props, ["spinner", "apiKey", "libraries", "version", "onScriptLoadError"]);
        return [this.spinner, loaded ? _react.default.createElement(BaseComponent, (0, _extends2.default)({
          key: "google-map"
        }, rest)) : null];
      }
    }, {
      key: "isInitialized",
      get: function get() {
        return !!(window && window.google && window.google.maps);
      }
    }, {
      key: "hasExistingScript",
      get: function get() {
        return !!(document && document.getElementById(SCRIPT_ID));
      }
    }, {
      key: "spinner",
      get: function get() {
        var _this$state = this.state,
            spinner = _this$state.spinner,
            loaded = _this$state.loaded;
        var props = {
          key: 'map-spinner',
          loading: !loaded
        };

        if (spinner) {
          if (_react.default.isValidElement(spinner)) return _react.default.cloneElement(spinner, props);
          return _react.default.createElement.apply(_react.default, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(spinner, 'div', props)));
        }

        return null;
      }
    }, {
      key: "api",
      get: function get() {
        var _this$props2 = this.props,
            apiKey = _this$props2.apiKey,
            libraries = _this$props2.libraries,
            version = _this$props2.version;
        return "".concat(API_BASE_URL, "?key=").concat(apiKey, "&v=").concat(version, "&libraries=").concat(libraries.join(), "&callback=google_map_initialize");
      }
    }]);
    return Container;
  }(_react.PureComponent), (0, _defineProperty2.default)(_class2, "displayName", "withGoogleScript(".concat((0, _reactUiUtils.componentName)(BaseComponent), ")")), (0, _defineProperty2.default)(_class2, "propTypes", {
    apiKey: _propTypes.default.string.isRequired,
    version: _propTypes.default.string,
    libraries: _propTypes.default.arrayOf(_propTypes.default.string),
    spinner: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node, _propTypes.default.object]),
    onScriptLoadError: _propTypes.default.func,
    loaded: _propTypes.default.bool
  }), (0, _defineProperty2.default)(_class2, "defaultProps", {
    libraries: [],
    version: '3',
    onScriptLoadError: function onScriptLoadError(error) {
      window.mapLoadError = error;
    }
  }), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "scriptLoaded", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "scriptLoaded"), _class.prototype)), _class);
  return Container;
}