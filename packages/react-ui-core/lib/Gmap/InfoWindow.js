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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mapEventHelpers = require('./utils/mapEventHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EVENTS = {
  onCloseClick: 'closeclick',
  onContentChanged: 'content_changed',
  onDomReady: 'domready',
  onPositionChanged: 'position_changed',
  onZIndexChanged: 'zindex_changed'
};

var EVENT_NAMES = (0, _keys2.default)(EVENTS);

var InfoWindow = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(InfoWindow, _PureComponent);

  function InfoWindow(props) {
    (0, _classCallCheck3.default)(this, InfoWindow);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InfoWindow.__proto__ || (0, _getPrototypeOf2.default)(InfoWindow)).call(this, props));

    _this.initInfoWindow();
    return _this;
  }

  (0, _createClass3.default)(InfoWindow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.infowindow.setContent(this.container);
      this.openWindow();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var anchor = this.props.anchor;


      if (anchor && prevProps.anchor !== anchor) {
        this.openWindow();
      } else {
        this.closeWindow();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.closeWindow();
    }
  }, {
    key: 'initInfoWindow',
    value: function initInfoWindow() {
      this.container = document.createElement('div');
      this.infowindow = new window.google.maps.InfoWindow();

      (0, _mapEventHelpers.setupEvents)(this.infowindow, EVENTS, this.props);
    }
  }, {
    key: 'openWindow',
    value: function openWindow() {
      var _props = this.props,
          map = _props.map,
          anchor = _props.anchor;


      if (this.infowindow && anchor) {
        this.infowindow.open(map, anchor);
      }
    }
  }, {
    key: 'closeWindow',
    value: function closeWindow() {
      if (this.infowindow) {
        this.infowindow.close();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _reactDom2.default.createPortal(_react2.default.Children.only(this.props.children), this.container);
    }
  }]);
  return InfoWindow;
}(_react.PureComponent), _class.propTypes = {
  map: _propTypes2.default.object,
  anchor: _propTypes2.default.object,
  children: _propTypes2.default.node
}, _temp);
exports.default = InfoWindow;


EVENT_NAMES.forEach(function (name) {
  InfoWindow.propTypes[name] = _propTypes2.default.func;
});