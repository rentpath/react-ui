'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayView = (_dec = (0, _reactThemed2.default)(/^Gmap_OverlayView/, { pure: true }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(OverlayView, _PureComponent);

  function OverlayView() {
    (0, _classCallCheck3.default)(this, OverlayView);
    return (0, _possibleConstructorReturn3.default)(this, (OverlayView.__proto__ || (0, _getPrototypeOf2.default)(OverlayView)).apply(this, arguments));
  }

  (0, _createClass3.default)(OverlayView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initOverlayView();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          anchor = _props.anchor,
          theme = _props.theme,
          className = _props.className;


      if (this.overlay && anchor !== prevProps.anchor) {
        this.drawOverlay();
      }

      if (this.container && (theme !== prevProps.theme || className !== prevProps.className)) {
        this.container.className = (0, _classnames2.default)(className, theme.Gmap_OverlayView);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.overlay) {
        this.overlay.setMap(null);
      }
    }
  }, {
    key: 'initOverlayView',
    value: function initOverlayView() {
      var _props2 = this.props,
          map = _props2.map,
          theme = _props2.theme,
          className = _props2.className,
          preventBubbleEvents = _props2.preventBubbleEvents;


      this.container = document.createElement('div');
      this.container.style.position = 'absolute';
      this.container.style.display = 'none';
      this.container.style.cursor = 'auto';
      this.container.className = (0, _classnames2.default)(className, theme.Gmap_OverlayView);
      if (preventBubbleEvents) this.preventBubbleEvents();

      this.overlay = new window.google.maps.OverlayView();
      this.overlay.onAdd = this.addChildren.bind(this);
      this.overlay.onRemove = this.removeChildren.bind(this);
      this.overlay.draw = this.drawOverlay.bind(this);

      this.overlay.setMap(map);
    }
  }, {
    key: 'preventBubbleEvents',
    value: function preventBubbleEvents() {
      var _this2 = this;

      var stopPropagation = function stopPropagation(e) {
        return e.stopPropagation();
      };
      this.eventBlacklist.forEach(function (event) {
        return _this2.container.addEventListener(event, stopPropagation, false);
      });
    }
  }, {
    key: 'addChildren',
    value: function addChildren() {
      var panes = this.overlay.getPanes();

      panes.floatPane.appendChild(this.container);
    }
  }, {
    key: 'removeChildren',
    value: function removeChildren() {
      if (this.container.parentElement) {
        this.container.parentElement.removeChild(this.container);
      }
    }
  }, {
    key: 'drawOverlay',
    value: function drawOverlay() {
      var position = this.position;
      var display = 'none';

      if (position) {
        var projection = this.overlay.getProjection();

        // Projection is undefined if map has not yet initialized
        if (!projection) return;

        var _projection$fromLatLn = projection.fromLatLngToDivPixel(position),
            x = _projection$fromLatLn.x,
            y = _projection$fromLatLn.y;

        // Show overlay only when it is in view.


        if (Math.abs(x) < 4000 && Math.abs(y) < 4000) {
          display = 'block';
          this.container.style.left = x + 'px';
          this.container.style.top = y + 'px';
        }
      }

      if (this.container.style.display !== display) {
        this.container.style.display = display;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.container) return null;

      return _reactDom2.default.createPortal(_react2.default.Children.only(this.props.children), this.container);
    }
  }, {
    key: 'eventBlacklist',
    get: function get() {
      return ['click', 'contextmenu', 'dblclick', 'mousedown', 'mousemove', 'pointerdown', 'touchend', 'touchmove', 'touchstart', 'wheel'];
    }
  }, {
    key: 'position',
    get: function get() {
      var anchor = this.props.anchor;


      if (anchor) {
        return anchor.getPosition();
      }

      return null;
    }
  }]);
  return OverlayView;
}(_react.PureComponent), _class2.propTypes = {
  map: _propTypes2.default.object,
  anchor: _propTypes2.default.object,
  children: _propTypes2.default.node.isRequired,
  preventBubbleEvents: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object
}, _class2.defaultProps = {
  preventBubbleEvents: true,
  className: '',
  theme: {}
}, _temp)) || _class);
exports.default = OverlayView;