import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
var OverlayView = (_dec = themed(/^Gmap_OverlayView/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OverlayView, _PureComponent);

  function OverlayView(props) {
    var _this;

    _classCallCheck(this, OverlayView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverlayView).call(this, props));
    _this.state = {
      initialized: false
    };
    return _this;
  }

  _createClass(OverlayView, [{
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
        this.container.className = classnames(className, theme.Gmap_OverlayView);
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
      this.container.className = classnames(className, theme.Gmap_OverlayView);
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
      return ReactDOM.createPortal(React.Children.only(this.props.children), this.container);
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
}(PureComponent), _defineProperty(_class2, "propTypes", {
  map: PropTypes.object,
  anchor: PropTypes.object,
  children: PropTypes.node.isRequired,
  preventBubbleEvents: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.object
}), _defineProperty(_class2, "defaultProps", {
  preventBubbleEvents: true,
  className: '',
  theme: {}
}), _temp)) || _class);
export { OverlayView as default };