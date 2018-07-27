'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Marker = require('./Marker');

var _Marker2 = _interopRequireDefault(_Marker);

var _Gmap = require('./Gmap');

var _Gmap2 = _interopRequireDefault(_Gmap);

var _markerIcons = require('./markerIcons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PdpMap = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(PdpMap, _PureComponent);

  function PdpMap() {
    (0, _classCallCheck3.default)(this, PdpMap);
    return (0, _possibleConstructorReturn3.default)(this, (PdpMap.__proto__ || (0, _getPrototypeOf2.default)(PdpMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(PdpMap, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          listing = _props.listing,
          rest = (0, _objectWithoutProperties3.default)(_props, ['listing']);


      return _react2.default.createElement(
        _Gmap2.default,
        (0, _extends3.default)({
          center: this.position,
          zoom: 13
        }, rest),
        _react2.default.createElement(_Marker2.default, { marker: this.marker })
      );
    }
  }, {
    key: 'position',
    get: function get() {
      var _props$listing$locati = this.props.listing.location,
          location = _props$listing$locati === undefined ? {} : _props$listing$locati;

      return {
        lat: location.latitude,
        lng: location.longitude
      };
    }
  }, {
    key: 'marker',
    get: function get() {
      var _this2 = this;

      var _props2 = this.props,
          listing = _props2.listing,
          rest = (0, _objectWithoutProperties3.default)(_props2, ['listing']);


      return function () {
        return (0, _extends3.default)({
          icon: (0, _markerIcons.blackDotIconWithBalloon)()
        }, rest, {
          position: _this2.position
        });
      };
    }
  }]);
  return PdpMap;
}(_react.PureComponent), _class.propTypes = {
  listing: _propTypes2.default.object.isRequired
}, _temp);
exports.default = PdpMap;