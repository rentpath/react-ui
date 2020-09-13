import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import startsWith from 'lodash/startsWith';
import pickBy from 'lodash/pickBy';
import { GmapInteraction } from './GmapInteraction';
import withGoogleScript from './withGoogleScript';
import { setupEvents } from './utils/mapEventHelpers';
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
export var Gmap = (_dec = themed(/^Gmap/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Gmap, _PureComponent);

  function Gmap(props) {
    var _this;

    _classCallCheck(this, Gmap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gmap).call(this, props));
    _this.state = {
      map: null
    };
    _this.googleMap = React.createRef();
    return _this;
  }

  _createClass(Gmap, [{
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
      this.map = new window.google.maps.Map(this.googleMap.current, _objectSpread({
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
      setupEvents(this.map, EVENTS, this.props);
      this.setState({
        map: this.map
      });
      GmapInteraction.registerMap(this.map);
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
          rest = _objectWithoutProperties(_this$props3, ["theme", "className", "children"]);

      var attributes = pickBy(rest, function (_, key) {
        return startsWith(key, 'data');
      });
      return React.createElement("div", _extends({
        ref: this.googleMap,
        className: classnames(theme.Gmap, className),
        "data-tid": "google-map"
      }, attributes), map && this.children);
    }
  }, {
    key: "children",
    get: function get() {
      var map = this.state.map;
      var children = React.Children.toArray(this.props.children);
      var props = {
        map: map
      };
      return React.Children.map(children, function (child) {
        return React.cloneElement(child, props);
      });
    }
  }, {
    key: "mapControls",
    get: function get() {
      return _objectSpread({}, MAP_CONTROLS, this.props.mapControls);
    }
  }]);

  return Gmap;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  onBoundsChanged: PropTypes.func,
  onCenterChanged: PropTypes.func,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  onHeadingChanged: PropTypes.func,
  onIdle: PropTypes.func,
  onMaptypeIdChanged: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onProjectionChanged: PropTypes.func,
  onResize: PropTypes.func,
  onRightClick: PropTypes.func,
  onTilesLoaded: PropTypes.func,
  onTiltChanged: PropTypes.func,
  onZoomChanged: PropTypes.func,
  zoom: PropTypes.number,
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  clickableIcons: PropTypes.bool,
  mapControls: PropTypes.shape({
    fullscreenControl: PropTypes.bool,
    mapTypeControl: PropTypes.bool,
    zoomControl: PropTypes.bool,
    streetViewControl: PropTypes.bool,
    scaleControl: PropTypes.bool,
    rotateControl: PropTypes.bool,
    draggable: PropTypes.bool,
    scrollwheel: PropTypes.bool,
    disableDoubleClickZoom: PropTypes.bool
  }),
  stylingFunction: PropTypes.func,
  mapStyles: PropTypes.array,
  zoomControlOptions: PropTypes.shape({
    position: PropTypes.string
  }),
  mapTypeControlOptions: PropTypes.shape({
    style: PropTypes.string,
    position: PropTypes.string
  })
}), _defineProperty(_class2, "defaultProps", {
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
export default withGoogleScript(Gmap);