'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _const = require('./utils/const');

var _mapEventHelpers = require('./utils/mapEventHelpers');

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

var enableControls = function enableControls() {
  var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    draggable: enable,
    zoomControl: enable,
    scrollwheel: enable,
    disableDoubleClickZoom: enable
  };
};

var FreeDrawLayer = (_dec = (0, _reactThemed2.default)(['Gmap_FreeDrawLayer'], { pure: true }), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(FreeDrawLayer, _PureComponent);

  function FreeDrawLayer(props) {
    (0, _classCallCheck3.default)(this, FreeDrawLayer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FreeDrawLayer.__proto__ || (0, _getPrototypeOf2.default)(FreeDrawLayer)).call(this, props));

    _this.state = { drawing: false };
    _this.addShapes();
    return _this;
  }

  (0, _createClass3.default)(FreeDrawLayer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.shapes !== prevProps.shapes) {
        this.clearAllShapes();
        this.addShapes();
      }
    }
  }, {
    key: 'getPolygonCoords',
    value: function getPolygonCoords(poly) {
      return poly.getPath().getArray().map(function (path) {
        return [path.lng(), path.lat()];
      });
    }
  }, {
    key: 'enableMapControls',
    value: function enableMapControls() {
      var _props = this.props,
          map = _props.map,
          mapControls = _props.mapControls;

      map.setOptions((0, _extends3.default)({}, enableControls(true), mapControls));
      this.setState({
        drawing: false
      });
    }
  }, {
    key: 'disableMapControls',
    value: function disableMapControls() {
      var map = this.props.map;

      map.setOptions(enableControls(false));
      this.setState({ drawing: true });
    }
  }, {
    key: 'enableMapDraw',
    value: function enableMapDraw() {
      var _props2 = this.props,
          map = _props2.map,
          multipleShapes = _props2.multipleShapes;

      this.disableMapControls();

      if (!multipleShapes) {
        this.clearAllShapes();
      }
      this.events = (0, _mapEventHelpers.setupEvents)(map, _const.GMAP_EVENTS, {
        onMouseDown: this.drawFreeHand
      }, true);
    }
  }, {
    key: 'createPolyline',
    value: function createPolyline() {
      var _props3 = this.props,
          map = _props3.map,
          dataStyle = _props3.dataStyle;


      return new window.google.maps.Polyline((0, _extends3.default)({
        map: map,
        clickable: false
      }, dataStyle.polyline));
    }
  }, {
    key: 'createPolygon',
    value: function createPolygon(polyline, attributes) {
      var map = this.props.map;


      return new window.google.maps.Polygon((0, _extends3.default)({
        map: map,
        path: polyline,
        clickable: false
      }, attributes));
    }
  }, {
    key: 'drawFreeHand',
    value: function drawFreeHand() {
      var _this2 = this;

      var _props4 = this.props,
          map = _props4.map,
          dataStyle = _props4.dataStyle,
          onMapDrawStart = _props4.onMapDrawStart,
          onMapDrawEnd = _props4.onMapDrawEnd;

      var polyline = this.createPolyline();
      var polygon = this.createPolygon(polyline.getPath(), dataStyle.polylineFill);

      if (onMapDrawStart) onMapDrawStart();

      var listener = (0, _mapEventHelpers.setupEvents)(map, _const.GMAP_EVENTS, {
        onMouseMove: function onMouseMove(e) {
          return polyline.getPath().push(e.latLng);
        },
        onTouchStart: function onTouchStart(e) {
          return polyline.getPath().push(e.latLng);
        }
      }, false);

      var onMouseUp = function onMouseUp() {
        (0, _mapEventHelpers.removeEvent)(listener.onMouseMove);
        polyline.setMap(null);
        polygon.setMap(null);

        if (onMapDrawEnd) onMapDrawEnd(_this2.getPolygonCoords(polygon));
        _this2.enableMapControls();
      };

      this.events = (0, _mapEventHelpers.setupEvents)(map, _const.GMAP_EVENTS, {
        onMouseUp: onMouseUp,
        onTouchEnd: onMouseUp
      }, true);
    }
  }, {
    key: 'addShapes',
    value: function addShapes() {
      var _this3 = this;

      var shapes = this.formatLongLatToGmapsCoordinates();
      this.polygons = shapes.map(function (path) {
        return _this3.createPolygon(path, (0, _extends3.default)({}, _this3.props.dataStyle.polyline, _this3.props.dataStyle.polygon));
      });
    }
  }, {
    key: 'clearAllShapes',
    value: function clearAllShapes() {
      this.polygons.forEach(function (poly) {
        return poly.setMap(null);
      });
      this.polygons = [];
    }
  }, {
    key: 'formatLongLatToGmapsCoordinates',
    value: function formatLongLatToGmapsCoordinates() {
      // Should be refactored later to
      // over(pipe(allArr, allArr), point => ({lat: point[1], lng: point[0]})(Object.values(shape)

      return (0, _values2.default)(this.props.shapes).map(function (polygon) {
        return polygon.map(function (point) {
          return { lat: point[1], lng: point[0] };
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          theme = _props5.theme,
          disabled = _props5.disabled;
      var drawing = this.state.drawing;
      // This button is temporary - will be replaced with the tool tip when built

      return _react2.default.createElement(
        'button',
        {
          className: theme.Gmap_FreeDrawLayer,
          onClick: this.enableMapDraw,
          disabled: disabled || drawing
        },
        'Click to draw'
      );
    }
  }]);
  return FreeDrawLayer;
}(_react.PureComponent), _class3.propTypes = {
  map: _propTypes2.default.object,
  onMapDrawStart: _propTypes2.default.func,
  onMapDrawEnd: _propTypes2.default.func,
  theme: _propTypes2.default.object,
  mapControls: _propTypes2.default.object,
  shapes: _propTypes2.default.object,
  multipleShapes: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  dataStyle: _propTypes2.default.object
}, _class3.defaultProps = {
  theme: {},
  map: {},
  multipleShapes: false,
  disabled: false,
  shapes: {},
  dataStyle: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'enableMapDraw', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'enableMapDraw'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'drawFreeHand', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'drawFreeHand'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'clearAllShapes', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'clearAllShapes'), _class2.prototype)), _class2)) || _class);
exports.default = FreeDrawLayer;