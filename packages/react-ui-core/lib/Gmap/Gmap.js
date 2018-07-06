'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gmap = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _startsWith = require('lodash/startsWith');

var _startsWith2 = _interopRequireDefault(_startsWith);

var _pickBy = require('lodash/pickBy');

var _pickBy2 = _interopRequireDefault(_pickBy);

var _GmapInteraction = require('./GmapInteraction');

var _withGoogleScript = require('./withGoogleScript');

var _withGoogleScript2 = _interopRequireDefault(_withGoogleScript);

var _mapEventHelpers = require('./utils/mapEventHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_ZOOM = 8;
var DEFAULT_MIN_ZOOM = 5;
var DEFAULT_CENTER = { // Atlanta, GA
  lat: 33.7490,
  lng: -84.3880
};

var EVENTS = {
  onBoundsChanged: 'bounds_changed',
  onCenterChanged: 'center_changed',
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onHeadingChanged: 'heading_changed',
  onIdle: 'idle',
  onMaptypeIdChanged: 'maptypeid_changed',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onProjectionChanged: 'projection_changed',
  onResize: 'resize',
  onRightClick: 'rightclick',
  onTilesLoaded: 'tilesloaded',
  onTiltChanged: 'tilt_changed',
  onZoomChanged: 'zoom_changed'
};

var EVENT_NAMES = (0, _keys2.default)(EVENTS);

var MAP_CONTROLS = {
  fullscreenControl: false,
  streetViewControl: false,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  rotateControl: true

};

var Gmap = exports.Gmap = (_dec = (0, _reactThemed2.default)(/^Gmap/, { pure: true }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(Gmap, _PureComponent);

  function Gmap(props) {
    (0, _classCallCheck3.default)(this, Gmap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Gmap.__proto__ || (0, _getPrototypeOf2.default)(Gmap)).call(this, props));

    _this.state = { map: null };
    _this.googleMap = _react2.default.createRef();
    return _this;
  }

  (0, _createClass3.default)(Gmap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initMap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          center = _props.center,
          zoom = _props.zoom;


      if (this.map) {
        if (this.isCenterChange(prevProps.center, center)) {
          this.map.setCenter(center);
        }

        if (zoom && prevProps.zoom !== zoom) {
          this.map.setZoom(zoom);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.map) {
        window.google.maps.event.clearInstanceListeners(this.map);
      }
    }
  }, {
    key: 'initMap',
    value: function initMap() {
      var _props2 = this.props,
          zoom = _props2.zoom,
          center = _props2.center,
          minZoom = _props2.minZoom,
          maxZoom = _props2.maxZoom,
          clickableIcons = _props2.clickableIcons,
          stylingFunction = _props2.stylingFunction;


      this.map = new window.google.maps.Map(this.googleMap.current, (0, _extends3.default)({
        zoom: zoom,
        clickableIcons: clickableIcons,
        minZoom: minZoom,
        maxZoom: maxZoom,
        center: center
      }, this.mapControls));

      this.map.data.setStyle(stylingFunction);

      (0, _mapEventHelpers.setupEvents)(this.map, EVENTS, this.props);

      this.setState({ map: this.map });
      _GmapInteraction.GmapInteraction.registerMap(this.map);
    }
  }, {
    key: 'isCenterChange',
    value: function isCenterChange(prev, next) {
      var _ref = prev || {},
          plat = _ref.lat,
          plng = _ref.lng;

      var _ref2 = next || {},
          nlat = _ref2.lat,
          nlng = _ref2.lng;

      if (plat && plng && !(nlat && nlng)) return false;
      return plat !== nlat || plng !== nlng;
    }
  }, {
    key: 'render',
    value: function render() {
      var map = this.state.map;
      var _props3 = this.props,
          theme = _props3.theme,
          className = _props3.className,
          children = _props3.children,
          rest = (0, _objectWithoutProperties3.default)(_props3, ['theme', 'className', 'children']);


      var attributes = (0, _pickBy2.default)(rest, function (_, key) {
        return (0, _startsWith2.default)(key, 'data');
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          ref: this.googleMap,
          className: (0, _classnames2.default)(theme.Gmap, className),
          'data-tid': 'google-map'
        }, attributes),
        map && this.children
      );
    }
  }, {
    key: 'children',
    get: function get() {
      var map = this.state.map;

      var children = _react2.default.Children.toArray(this.props.children);
      var props = { map: map };

      return _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, props);
      });
    }
  }, {
    key: 'mapControls',
    get: function get() {
      return (0, _extends3.default)({}, MAP_CONTROLS, this.props.mapControls);
    }
  }]);
  return Gmap;
}(_react.PureComponent), _class2.propTypes = {
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  center: _propTypes2.default.shape({
    lat: _propTypes2.default.number,
    lng: _propTypes2.default.number
  }),
  zoom: _propTypes2.default.number,
  minZoom: _propTypes2.default.number,
  maxZoom: _propTypes2.default.number,
  clickableIcons: _propTypes2.default.bool,
  mapControls: _propTypes2.default.shape({
    fullscreenControl: _propTypes2.default.bool,
    mapTypeControl: _propTypes2.default.bool,
    zoomControl: _propTypes2.default.bool,
    streetViewControl: _propTypes2.default.bool,
    scaleControl: _propTypes2.default.bool,
    rotateControl: _propTypes2.default.bool,
    draggable: _propTypes2.default.bool,
    scrollwheel: _propTypes2.default.bool,
    disableDoubleClickZoom: _propTypes2.default.bool
  }),
  stylingFunction: _propTypes2.default.func
}, _class2.defaultProps = {
  theme: {},
  zoom: DEFAULT_ZOOM,
  minZoom: DEFAULT_MIN_ZOOM,
  center: DEFAULT_CENTER,
  clickableIcons: false,
  stylingFunction: function stylingFunction() {
    return {};
  }
}, _temp)) || _class);


EVENT_NAMES.forEach(function (name) {
  Gmap.propTypes[name] = _propTypes2.default.func;
});

exports.default = (0, _withGoogleScript2.default)(Gmap);