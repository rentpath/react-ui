"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Gmap = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _startsWith = _interopRequireDefault(require("lodash/startsWith"));

var _pickBy = _interopRequireDefault(require("lodash/pickBy"));

var _GmapInteraction = require("./GmapInteraction");

var _withGoogleScript = _interopRequireDefault(require("./withGoogleScript"));

var _mapEventHelpers = require("./utils/mapEventHelpers");

var _dec, _class, _class2, _temp;

var DEFAULT_ZOOM = 8;
var DEFAULT_MIN_ZOOM = 5;
var DEFAULT_CENTER = {
  // Atlanta, GA
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
var MAP_CONTROLS = {
  fullscreenControl: false,
  streetViewControl: false,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  rotateControl: true
};
var Gmap = (_dec = (0, _reactThemed.default)(/^Gmap/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Gmap, _PureComponent);

  function Gmap(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Gmap);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Gmap).call(this, props));
    _this.state = {
      map: null
    };
    _this.googleMap = _react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(Gmap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initMap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          center = _this$props.center,
          zoom = _this$props.zoom;

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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.map) {
        window.google.maps.event.clearInstanceListeners(this.map);
      }
    }
  }, {
    key: "zoomControlOptions",
    value: function zoomControlOptions() {
      var position = this.props.zoomControlOptions.position;

      if (window.google.maps.ControlPosition) {
        return {
          position: window.google.maps.ControlPosition[position]
        };
      }

      return null;
    }
  }, {
    key: "mapTypeControlOptions",
    value: function mapTypeControlOptions() {
      var _this$props$mapTypeCo = this.props.mapTypeControlOptions,
          position = _this$props$mapTypeCo.position,
          style = _this$props$mapTypeCo.style;

      if (window.google.maps.ControlPosition && window.google.maps.MapTypeControlStyle) {
        return {
          position: window.google.maps.ControlPosition[position],
          style: window.google.maps.MapTypeControlStyle[style]
        };
      }

      return null;
    }
  }, {
    key: "initMap",
    value: function initMap() {
      var _this$props2 = this.props,
          zoom = _this$props2.zoom,
          center = _this$props2.center,
          minZoom = _this$props2.minZoom,
          maxZoom = _this$props2.maxZoom,
          clickableIcons = _this$props2.clickableIcons,
          stylingFunction = _this$props2.stylingFunction,
          styles = _this$props2.mapStyles;
      var zoomControlOptions = this.zoomControlOptions();
      var mapTypeControlOptions = this.mapTypeControlOptions();
      this.map = new window.google.maps.Map(this.googleMap.current, (0, _objectSpread2.default)({
        zoom: zoom,
        clickableIcons: clickableIcons,
        minZoom: minZoom,
        maxZoom: maxZoom,
        center: center,
        styles: styles,
        zoomControlOptions: zoomControlOptions,
        mapTypeControlOptions: mapTypeControlOptions
      }, this.mapControls));
      this.map.data.setStyle(stylingFunction);
      (0, _mapEventHelpers.setupEvents)(this.map, EVENTS, this.props);
      this.setState({
        map: this.map
      });

      _GmapInteraction.GmapInteraction.registerMap(this.map);
    }
  }, {
    key: "isCenterChange",
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
    key: "render",
    value: function render() {
      var map = this.state.map;
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          className = _this$props3.className,
          children = _this$props3.children,
          rest = (0, _objectWithoutProperties2.default)(_this$props3, ["theme", "className", "children"]);
      var attributes = (0, _pickBy.default)(rest, function (_, key) {
        return (0, _startsWith.default)(key, 'data');
      });
      return _react.default.createElement("div", (0, _extends2.default)({
        ref: this.googleMap,
        className: (0, _classnames.default)(theme.Gmap, className),
        "data-tid": "google-map"
      }, attributes), map && this.children);
    }
  }, {
    key: "children",
    get: function get() {
      var map = this.state.map;

      var children = _react.default.Children.toArray(this.props.children);

      var props = {
        map: map
      };
      return _react.default.Children.map(children, function (child) {
        return _react.default.cloneElement(child, props);
      });
    }
  }, {
    key: "mapControls",
    get: function get() {
      return (0, _objectSpread2.default)({}, MAP_CONTROLS, this.props.mapControls);
    }
  }]);
  return Gmap;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  center: _propTypes.default.shape({
    lat: _propTypes.default.number,
    lng: _propTypes.default.number
  }),
  onBoundsChanged: _propTypes.default.func,
  onCenterChanged: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  onDrag: _propTypes.default.func,
  onDragEnd: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onHeadingChanged: _propTypes.default.func,
  onIdle: _propTypes.default.func,
  onMaptypeIdChanged: _propTypes.default.func,
  onMouseMove: _propTypes.default.func,
  onMouseOut: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  onProjectionChanged: _propTypes.default.func,
  onResize: _propTypes.default.func,
  onRightClick: _propTypes.default.func,
  onTilesLoaded: _propTypes.default.func,
  onTiltChanged: _propTypes.default.func,
  onZoomChanged: _propTypes.default.func,
  zoom: _propTypes.default.number,
  minZoom: _propTypes.default.number,
  maxZoom: _propTypes.default.number,
  clickableIcons: _propTypes.default.bool,
  mapControls: _propTypes.default.shape({
    fullscreenControl: _propTypes.default.bool,
    mapTypeControl: _propTypes.default.bool,
    zoomControl: _propTypes.default.bool,
    streetViewControl: _propTypes.default.bool,
    scaleControl: _propTypes.default.bool,
    rotateControl: _propTypes.default.bool,
    draggable: _propTypes.default.bool,
    scrollwheel: _propTypes.default.bool,
    disableDoubleClickZoom: _propTypes.default.bool
  }),
  stylingFunction: _propTypes.default.func,
  mapStyles: _propTypes.default.array,
  zoomControlOptions: _propTypes.default.shape({
    position: _propTypes.default.string
  }),
  mapTypeControlOptions: _propTypes.default.shape({
    style: _propTypes.default.string,
    position: _propTypes.default.string
  })
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  zoom: DEFAULT_ZOOM,
  minZoom: DEFAULT_MIN_ZOOM,
  center: DEFAULT_CENTER,
  clickableIcons: false,
  stylingFunction: function stylingFunction() {
    return {};
  },
  zoomControlOptions: {
    position: 'RIGHT_BOTTOM'
  },
  mapTypeControlOptions: {
    style: 'HORIZONTAL_BAR',
    position: 'TOP_LEFT'
  }
}), _temp)) || _class);
exports.Gmap = Gmap;

var _default = (0, _withGoogleScript.default)(Gmap);

exports.default = _default;