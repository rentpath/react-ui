"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dec, _class, _class2, _temp;

var OverlayView = (_dec = (0, _reactThemed.default)(/^Gmap_OverlayView/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(OverlayView, _PureComponent);

  function OverlayView(props) {
    var _this;

    (0, _classCallCheck2.default)(this, OverlayView);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OverlayView).call(this, props));
    _this.state = {
      initialized: false
    };
    return _this;
  }

  (0, _createClass2.default)(OverlayView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initOverlayView();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          anchor = _this$props.anchor,
          theme = _this$props.theme,
          className = _this$props.className;

      if (this.overlay && anchor !== prevProps.anchor) {
        this.drawOverlay();
      }

      if (this.container && (theme !== prevProps.theme || className !== prevProps.className)) {
        this.container.className = (0, _classnames.default)(className, theme.Gmap_OverlayView);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.overlay) {
        this.overlay.setMap(null);
      }
    }
  }, {
    key: "initOverlayView",
    value: function initOverlayView() {
      var _this$props2 = this.props,
          map = _this$props2.map,
          theme = _this$props2.theme,
          className = _this$props2.className,
          preventBubbleEvents = _this$props2.preventBubbleEvents;
      this.container = document.createElement('div');
      this.container.style.position = 'absolute';
      this.container.style.display = 'none';
      this.container.style.cursor = 'auto';
      this.container.className = (0, _classnames.default)(className, theme.Gmap_OverlayView);
      if (preventBubbleEvents) this.preventBubbleEvents();
      this.overlay = new window.google.maps.OverlayView();
      this.overlay.onAdd = this.addChildren.bind(this);
      this.overlay.onRemove = this.removeChildren.bind(this);
      this.overlay.draw = this.drawOverlay.bind(this);
      this.overlay.setMap(map);
      this.setState({
        initialized: true
      });
    }
  }, {
    key: "preventBubbleEvents",
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
    key: "addChildren",
    value: function addChildren() {
      var panes = this.overlay.getPanes();
      panes.floatPane.appendChild(this.container);
    }
  }, {
    key: "removeChildren",
    value: function removeChildren() {
      if (this.container.parentElement) {
        this.container.parentElement.removeChild(this.container);
      }
    }
  }, {
    key: "drawOverlay",
    value: function drawOverlay() {
      var position = this.position;
      var display = 'none';

      if (position) {
        var projection = this.overlay.getProjection(); // Projection is undefined if map has not yet initialized

        if (!projection) return;

        var _projection$fromLatLn = projection.fromLatLngToDivPixel(position),
            x = _projection$fromLatLn.x,
            y = _projection$fromLatLn.y; // Show overlay only when it is in view.


        if (Math.abs(x) < 4000 && Math.abs(y) < 4000) {
          display = 'block';
          this.container.style.left = "".concat(x, "px");
          this.container.style.top = "".concat(y, "px");
        }
      }

      if (this.container.style.display !== display) {
        this.container.style.display = display;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.container || !this.state.initialized) return null;
      return _reactDom.default.createPortal(_react.default.Children.only(this.props.children), this.container);
    }
  }, {
    key: "eventBlacklist",
    get: function get() {
      return ['click', 'contextmenu', 'dblclick', 'mousedown', 'mousemove', 'pointerdown', 'touchend', 'touchmove', 'touchstart', 'wheel'];
    }
  }, {
    key: "position",
    get: function get() {
      var anchor = this.props.anchor;

      if (anchor) {
        return anchor.getPosition();
      }

      return null;
    }
  }]);
  return OverlayView;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  map: _propTypes.default.object,
  anchor: _propTypes.default.object,
  children: _propTypes.default.node.isRequired,
  preventBubbleEvents: _propTypes.default.bool,
  className: _propTypes.default.string,
  theme: _propTypes.default.object
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  preventBubbleEvents: true,
  className: '',
  theme: {}
}), _temp)) || _class);
exports.default = OverlayView;