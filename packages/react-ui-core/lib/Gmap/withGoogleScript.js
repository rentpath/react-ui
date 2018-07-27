'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

exports.default = function (BaseComponent) {
  var _desc, _value, _class, _class2, _temp2;

  var Container = (_class = (_temp2 = _class2 = function (_PureComponent) {
    (0, _inherits3.default)(Container, _PureComponent);

    function Container() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Container);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        loaded: _this.props.loaded || false,
        spinner: _this.props.spinner
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Container, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.state.loaded || this.hasExistingScript && this.isInitialized) {
          // no other place to put this due to SSR
          this.setState({ loaded: true }); // eslint-disable-line react/no-did-mount-set-state
          return;
        }

        this.mapLoadedListener();
        this.loadScript();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeLoadedListener();
      }
    }, {
      key: 'removeLoadedListener',
      value: function removeLoadedListener() {
        window.removeEventListener(EVENT_NAME, this.loadedHandler);
      }
    }, {
      key: 'mapLoadedListener',
      value: function mapLoadedListener() {
        var _this2 = this;

        this.loadedHandler = function () {
          _this2.setState({ loaded: true });
          _this2.removeLoadedListener();
        };

        window.addEventListener(EVENT_NAME, this.loadedHandler);
      }
    }, {
      key: 'scriptLoaded',
      value: function scriptLoaded() {
        // NOTE: IE 11 needs a polyfill for CustomEvent
        window.dispatchEvent(new CustomEvent(EVENT_NAME));
      }
    }, {
      key: 'loadScript',
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
      key: 'render',
      value: function render() {
        var loaded = this.state.loaded;
        var _props = this.props,
            spinner = _props.spinner,
            apiKey = _props.apiKey,
            libraries = _props.libraries,
            version = _props.version,
            onScriptLoadError = _props.onScriptLoadError,
            rest = (0, _objectWithoutProperties3.default)(_props, ['spinner', 'apiKey', 'libraries', 'version', 'onScriptLoadError']);


        return [this.spinner, loaded ? _react2.default.createElement(BaseComponent, (0, _extends3.default)({ key: 'google-map' }, rest)) : null];
      }
    }, {
      key: 'isInitialized',
      get: function get() {
        return !!(window && window.google && window.google.maps);
      }
    }, {
      key: 'hasExistingScript',
      get: function get() {
        return !!(document && document.getElementById(SCRIPT_ID));
      }
    }, {
      key: 'spinner',
      get: function get() {
        var _state = this.state,
            spinner = _state.spinner,
            loaded = _state.loaded;

        var props = { key: 'map-spinner', loading: !loaded };

        if (spinner) {
          if (_react2.default.isValidElement(spinner)) return _react2.default.cloneElement(spinner, props);
          return _react2.default.createElement.apply(_react2.default, (0, _toConsumableArray3.default)((0, _reactUiUtils.parseArgs)(spinner, 'div', props)));
        }

        return null;
      }
    }, {
      key: 'api',
      get: function get() {
        var _props2 = this.props,
            apiKey = _props2.apiKey,
            libraries = _props2.libraries,
            version = _props2.version;

        return API_BASE_URL + '?key=' + apiKey + '&v=' + version + '&libraries=' + libraries.join() + '&callback=google_map_initialize';
      }
    }]);
    return Container;
  }(_react.PureComponent), _class2.displayName = 'withGoogleScript(' + (0, _getDisplayName2.default)(BaseComponent) + ')', _class2.propTypes = {
    apiKey: _propTypes2.default.string.isRequired,
    version: _propTypes2.default.string,
    libraries: _propTypes2.default.arrayOf(_propTypes2.default.string),
    spinner: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node, _propTypes2.default.object]),
    onScriptLoadError: _propTypes2.default.func,
    loaded: _propTypes2.default.bool
  }, _class2.defaultProps = {
    libraries: [],
    version: '3',
    onScriptLoadError: function onScriptLoadError(error) {
      window.mapLoadError = error;
    }
  }, _temp2), (_applyDecoratedDescriptor(_class.prototype, 'scriptLoaded', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'scriptLoaded'), _class.prototype)), _class);


  return Container;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _getDisplayName = require('./utils/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

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

var API_BASE_URL = 'https://maps.googleapis.com/maps/api/js';
var SCRIPT_ID = 'google-maps-api-script';
var EVENT_NAME = 'googleMapsLoaded';