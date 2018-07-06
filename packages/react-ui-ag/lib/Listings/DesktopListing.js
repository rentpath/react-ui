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

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactUiCore = require('@rentpath/react-ui-core');

var _Listing = require('./Listing');

var _Listing2 = _interopRequireDefault(_Listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DesktopListing = (_dec = (0, _reactThemed2.default)(['DesktopListing', 'BedsAndBaths', 'UnitLevelAvailabilityAndLastUpdated', 'LastUpdated', 'Phone'], { pure: true }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(DesktopListing, _PureComponent);

  function DesktopListing() {
    (0, _classCallCheck3.default)(this, DesktopListing);
    return (0, _possibleConstructorReturn3.default)(this, (DesktopListing.__proto__ || (0, _getPrototypeOf2.default)(DesktopListing)).apply(this, arguments));
  }

  (0, _createClass3.default)(DesktopListing, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          listing = _props.listing,
          ratings = _props.ratings,
          propertyName = _props.propertyName,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'className', 'listing', 'ratings', 'propertyName']);


      return _react2.default.createElement(_Listing2.default, (0, _extends3.default)({
        listing: listing,
        className: (0, _classnames2.default)(className, theme.DesktopListing),
        listingInfoComponents: this.renderInfo
      }, props));
    }
  }, {
    key: 'renderInfo',
    get: function get() {
      var _props2 = this.props,
          theme = _props2.theme,
          listing = _props2.listing,
          ratings = _props2.ratings,
          propertyName = _props2.propertyName;
      var singleFamily = listing.singleFamily,
          rating = listing.rating,
          lastUpdated = listing.lastUpdated,
          phone = listing.phone;


      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_reactUiCore.ListingComponents.Price, null),
        singleFamily ? _react2.default.createElement(_reactUiCore.ListingComponents.Address, null) : _react2.default.createElement(_reactUiCore.ListingComponents.PropertyName, propertyName),
        _react2.default.createElement(
          'div',
          { className: theme.BedsAndBaths },
          _react2.default.createElement(_reactUiCore.ListingComponents.Bedroom, { 'data-tid': 'bedroom' }),
          _react2.default.createElement(_reactUiCore.ListingComponents.Bathroom, null)
        ),
        singleFamily ? _react2.default.createElement(_reactUiCore.ListingComponents.Availability, null) : _react2.default.createElement(
          'div',
          { className: theme.UnitLevelAvailabilityAndLastUpdated },
          _react2.default.createElement(_reactUiCore.ListingComponents.UnitLevelAvailability, null),
          lastUpdated && _react2.default.createElement(
            'div',
            { className: theme.LastUpdated },
            lastUpdated
          )
        ),
        rating && !singleFamily && _react2.default.createElement(_reactUiCore.ListingComponents.Ratings, (0, _extends3.default)({ 'data-tid': 'ratings' }, ratings)),
        phone && !singleFamily && _react2.default.createElement(
          'div',
          { className: theme.Phone, 'data-tid': 'phone' },
          phone
        )
      );
    }
  }]);
  return DesktopListing;
}(_react.PureComponent), _class2.propTypes = {
  listing: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  ratings: _propTypes2.default.object,
  propertyName: _propTypes2.default.object
}, _class2.defaultProps = {
  theme: {},
  listing: {},
  ratings: {},
  propertyName: {}
}, _temp)) || _class);
exports.default = DesktopListing;