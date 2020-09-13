"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _mapEventHelpers = require("./utils/mapEventHelpers");

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
  (0, _inherits2.default)(InfoWindow, _PureComponent);

  function InfoWindow(props) {
    var _this;

    (0, _classCallCheck2.default)(this, InfoWindow);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InfoWindow).call(this, props));

    _this.initInfoWindow();

    return _this;
  }

  (0, _createClass2.default)(InfoWindow, [{
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
      (0, _mapEventHelpers.setupEvents)(this.infowindow, EVENTS, this.props);
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
      return _reactDom.default.createPortal(_react.default.Children.only(this.props.children), this.container);
    }
  }]);
  return InfoWindow;
}(_react.PureComponent);
/* NOTE: linter complains about InfoWindow.propTypes.name never used,
 * but it's dynanic so "name" isn't a prop
 */

/* eslint-disable react/no-unused-prop-types, react/forbid-foreign-prop-types */


exports.default = InfoWindow;
(0, _defineProperty2.default)(InfoWindow, "propTypes", {
  map: _propTypes.default.object,
  anchor: _propTypes.default.object,
  children: _propTypes.default.node
});
EVENT_NAMES.forEach(function (name) {
  InfoWindow.propTypes[name] = _propTypes.default.func;
});
/* eslint-enable react/no-unused-prop-types, react/forbid-foreign-prop-types */