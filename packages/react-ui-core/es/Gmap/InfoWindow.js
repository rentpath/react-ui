import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { setupEvents } from './utils/mapEventHelpers';
var EVENTS = {
  onCloseClick: 'closeclick',
  onContentChanged: 'content_changed',
  onDomReady: 'domready',
  onPositionChanged: 'position_changed',
  onZIndexChanged: 'zindex_changed'
};
var EVENT_NAMES = Object.keys(EVENTS);

var InfoWindow =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InfoWindow, _PureComponent);

  function InfoWindow(props) {
    var _this;

    _classCallCheck(this, InfoWindow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfoWindow).call(this, props));

    _this.initInfoWindow();

    return _this;
  }

  _createClass(InfoWindow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.infowindow.setContent(this.container);
      this.openWindow();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var anchor = this.props.anchor;

      if (anchor && prevProps.anchor !== anchor) {
        this.openWindow();
      } else {
        this.closeWindow();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.closeWindow();
    }
  }, {
    key: "initInfoWindow",
    value: function initInfoWindow() {
      this.container = document.createElement('div');
      this.infowindow = new window.google.maps.InfoWindow();
      setupEvents(this.infowindow, EVENTS, this.props);
    }
  }, {
    key: "openWindow",
    value: function openWindow() {
      var _this$props = this.props,
          map = _this$props.map,
          anchor = _this$props.anchor;

      if (this.infowindow && anchor) {
        this.infowindow.open(map, anchor);
      }
    }
  }, {
    key: "closeWindow",
    value: function closeWindow() {
      if (this.infowindow) {
        this.infowindow.close();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return ReactDOM.createPortal(React.Children.only(this.props.children), this.container);
    }
  }]);

  return InfoWindow;
}(PureComponent);
/* NOTE: linter complains about InfoWindow.propTypes.name never used,
 * but it's dynanic so "name" isn't a prop
 */

/* eslint-disable react/no-unused-prop-types, react/forbid-foreign-prop-types */


_defineProperty(InfoWindow, "propTypes", {
  map: PropTypes.object,
  anchor: PropTypes.object,
  children: PropTypes.node
});

export { InfoWindow as default };
EVENT_NAMES.forEach(function (name) {
  InfoWindow.propTypes[name] = PropTypes.func;
});
/* eslint-enable react/no-unused-prop-types, react/forbid-foreign-prop-types */