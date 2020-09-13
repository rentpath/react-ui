import _typeof from "@babel/runtime/helpers/typeof";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import difference from 'lodash/difference';
import { setupMarker, removeMarker } from './utils/markerHelpers';

var MARKER = function MARKER(_ref) {
  var properties = _ref.properties,
      geometry = _ref.geometry;
  return _objectSpread({}, properties, {
    position: {
      lng: geometry.coordinates[0],
      lat: geometry.coordinates[1]
    },
    key: properties.id
  });
};

var Markers =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Markers, _PureComponent);

  function Markers() {
    _classCallCheck(this, Markers);

    return _possibleConstructorReturn(this, _getPrototypeOf(Markers).apply(this, arguments));
  }

  _createClass(Markers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.markers = {};
      this.renderMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.append) this.clearUnusedMarkers();
      this.renderMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearAllMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: "clearAllMarkers",
    value: function clearAllMarkers() {
      var _this = this;

      Object.keys(this.markers).forEach(function (id) {
        removeMarker(_this.markers[id]);
      });
      this.markers = {};
    }
  }, {
    key: "clearUnusedMarkers",
    value: function clearUnusedMarkers() {
      var _this2 = this;

      var geojson = this.props.geojson;

      if (!geojson || !geojson.features || !geojson.features.length) {
        this.clearAllMarkers();
        return;
      }

      var oldIds = Object.keys(this.markers);
      var newIds = geojson.features.map(function (feature) {
        return feature.properties.id;
      });
      var remove = difference(oldIds, newIds);
      remove.forEach(function (id) {
        removeMarker(_this2.markers[id]);
        _this2.markers[id] = null;
      });
    }
  }, {
    key: "marker",
    value: function marker(feature) {
      var props = this.props.marker(feature);
      var defaults = MARKER(feature);

      if (_typeof(props) === 'object') {
        return _objectSpread({}, defaults, props);
      }

      return defaults;
    }
  }, {
    key: "renderMarkers",
    value: function renderMarkers() {
      var _this3 = this;

      var _this$props = this.props,
          map = _this$props.map,
          geojson = _this$props.geojson;
      if (!map || !geojson || !geojson.features) return;
      geojson.features.forEach(function (feature) {
        var id = feature.properties.id;
        if (_this3.markers[id]) return;
        _this3.markers[id] = setupMarker(map, _this3.marker(feature));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Markers;
}(PureComponent);

_defineProperty(Markers, "propTypes", {
  map: PropTypes.object,
  marker: PropTypes.func,
  geojson: PropTypes.object,
  append: PropTypes.bool,
  onMarkersReady: PropTypes.func
});

_defineProperty(Markers, "defaultProps", {
  marker: function marker() {
    return {};
  },
  append: false,
  onMarkersReady: function onMarkersReady() {}
});

export { Markers as default };