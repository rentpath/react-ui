import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { setupMarker as _setupMarker, removeMarker } from './utils/markerHelpers';
var EVENTS = {
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onDragEnd: 'dragend',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRecenter: 'recenter'
};
var EVENT_NAMES = Object.keys(EVENTS);

var NOOP = function NOOP() {
  return {};
};

var Marker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Marker, _PureComponent);

  function Marker() {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Marker).apply(this, arguments));
  }

  _createClass(Marker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupMarker();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.clearMarker();
      this.setupMarker();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearMarker();
    }
  }, {
    key: "setupMarker",
    value: function setupMarker() {
      var map = this.props.map;

      if (map) {
        this.markerInstance = _setupMarker(map, this.marker());
      }
    }
  }, {
    key: "marker",
    value: function marker() {
      var _this$props = this.props,
          map = _this$props.map,
          marker = _this$props.marker,
          rest = _objectWithoutProperties(_this$props, ["map", "marker"]);

      return _objectSpread({}, rest, marker(rest));
    }
  }, {
    key: "clearMarker",
    value: function clearMarker() {
      if (this.props.map && this.markerInstance) {
        removeMarker(this.markerInstance);
        this.markerInstance = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Marker;
}(PureComponent);
/* eslint-disable react/no-unused-prop-types, react/forbid-foreign-prop-types */


_defineProperty(Marker, "propTypes", {
  map: PropTypes.object,
  marker: PropTypes.func
});

_defineProperty(Marker, "defaultProps", {
  marker: NOOP
});

EVENT_NAMES.forEach(function (name) {
  Marker.propTypes[name] = PropTypes.func;
});
/* eslint-enable react/no-unused-prop-types, react/forbid-foreign-prop-types */

export default Marker;