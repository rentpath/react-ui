import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { setupEvents } from './utils/mapEventHelpers';
var EVENTS = {
  onAddFeature: 'addfeature',
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRemoveFeature: 'removefeature',
  onRemoveProperty: 'removeproperty',
  onRightClick: 'rightclick',
  onSetGeometry: 'setgeometry',
  onSetProperty: 'setproperty'
};
var EVENT_NAMES = Object.keys(EVENTS);

var Layer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Layer, _PureComponent);

  function Layer(props) {
    var _this;

    _classCallCheck(this, Layer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layer).call(this, props));
    _this.features = new Set();
    return _this;
  }

  _createClass(Layer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var map = this.props.map;

      if (map && map.data) {
        setupEvents(map.data, EVENTS, this.props);
        this.addFeatures();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.geojson !== this.props.geojson) {
        this.removeFeatures();
        if (this.props.geojson) this.addFeatures();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeFeatures();
    }
  }, {
    key: "addFeatures",
    value: function addFeatures() {
      var _this2 = this;

      var _this$props = this.props,
          map = _this$props.map,
          geojson = _this$props.geojson;

      if (map && geojson) {
        map.data.addGeoJson(geojson).forEach(function (feature) {
          _this2.features.add(feature);
        });
      }
    }
  }, {
    key: "removeFeatures",
    value: function removeFeatures() {
      var map = this.props.map;

      if (map) {
        this.features.forEach(function (feature) {
          map.data.remove(feature);
        });
      }

      this.features.clear();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Layer;
}(PureComponent);
/* NOTE: linter complains about Layer.propTypes.name never used,
 * but it's dynanic so "name" isn't a prop
 */

/* eslint-disable react/no-unused-prop-types, react/forbid-foreign-prop-types */


_defineProperty(Layer, "propTypes", {
  map: PropTypes.object,
  geojson: PropTypes.object.isRequired
});

export { Layer as default };
EVENT_NAMES.forEach(function (name) {
  Layer.propTypes[name] = PropTypes.func;
});
/* eslint-enable react/no-unused-prop-types, react/forbid-foreign-prop-types */