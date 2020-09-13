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
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { parseArgs, componentName } from '@rentpath/react-ui-utils';
var API_BASE_URL = 'https://maps.googleapis.com/maps/api/js';
var SCRIPT_ID = 'google-maps-api-script';
var EVENT_NAME = 'googleMapsLoaded';
export default function (BaseComponent) {
  var _class, _class2, _temp;

  var Container = (_class = (_temp = _class2 =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Container, _PureComponent);

    function Container() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Container);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        loaded: _this.props.loaded || false,
        spinner: _this.props.spinner
      });

      return _this;
    }

    _createClass(Container, [{
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
            rest = _objectWithoutProperties(_this$props, ["spinner", "apiKey", "libraries", "version", "onScriptLoadError"]);

        return [this.spinner, loaded ? React.createElement(BaseComponent, _extends({
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
          if (React.isValidElement(spinner)) return React.cloneElement(spinner, props);
          return React.createElement.apply(React, _toConsumableArray(parseArgs(spinner, 'div', props)));
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
  }(PureComponent), _defineProperty(_class2, "displayName", "withGoogleScript(".concat(componentName(BaseComponent), ")")), _defineProperty(_class2, "propTypes", {
    apiKey: PropTypes.string.isRequired,
    version: PropTypes.string,
    libraries: PropTypes.arrayOf(PropTypes.string),
    spinner: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.object]),
    onScriptLoadError: PropTypes.func,
    loaded: PropTypes.bool
  }), _defineProperty(_class2, "defaultProps", {
    libraries: [],
    version: '3',
    onScriptLoadError: function onScriptLoadError(error) {
      window.mapLoadError = error;
    }
  }), _temp), (_applyDecoratedDescriptor(_class.prototype, "scriptLoaded", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "scriptLoaded"), _class.prototype)), _class);
  return Container;
}