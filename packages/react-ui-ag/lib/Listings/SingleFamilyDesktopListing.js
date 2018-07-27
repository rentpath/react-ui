'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactUiCore = require('@rentpath/react-ui-core');

var _Listing = require('./Listing');

var _Listing2 = _interopRequireDefault(_Listing);

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

var buttonPropTypes = _propTypes2.default.shape({
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  valueLocation: _propTypes2.default.string
});

var SingleFamilyDesktopListing = (_dec = (0, _reactThemed2.default)(['SingleFamilyDesktopListing', 'BedsAndBaths', 'Phone']), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(SingleFamilyDesktopListing, _Component);

  function SingleFamilyDesktopListing() {
    (0, _classCallCheck3.default)(this, SingleFamilyDesktopListing);
    return (0, _possibleConstructorReturn3.default)(this, (SingleFamilyDesktopListing.__proto__ || (0, _getPrototypeOf2.default)(SingleFamilyDesktopListing)).apply(this, arguments));
  }

  (0, _createClass3.default)(SingleFamilyDesktopListing, [{
    key: 'getListingInfoComponents',
    value: function getListingInfoComponents() {
      var _props = this.props,
          theme = _props.theme,
          listing = _props.listing;
      var phone = listing.phone;


      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_reactUiCore.ListingComponents.Price, null),
        _react2.default.createElement(
          'div',
          { className: theme.BedsAndBaths },
          _react2.default.createElement(_reactUiCore.ListingComponents.Bedroom, { 'data-tid': 'bedroom' }),
          '\u2022',
          _react2.default.createElement(_reactUiCore.ListingComponents.Bathroom, null)
        ),
        _react2.default.createElement(_reactUiCore.ListingComponents.Availability, null),
        _react2.default.createElement(_reactUiCore.ListingComponents.Address, null),
        phone && _react2.default.createElement(
          'div',
          { className: theme.Phone, 'data-tid': 'phone' },
          phone
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.props.theme;


      return _react2.default.createElement(_Listing2.default, (0, _extends3.default)({}, this.props, {
        className: theme.SingleFamilyDesktopListing,
        listingInfoComponents: this.getListingInfoComponents
      }));
    }
  }]);
  return SingleFamilyDesktopListing;
}(_react.Component), _class3.propTypes = {
  index: _propTypes2.default.number,
  listing: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  photos: _propTypes2.default.object,
  ratings: _propTypes2.default.object,
  ctaButtons: _propTypes2.default.arrayOf(buttonPropTypes),
  favoriteButton: buttonPropTypes,
  lazyLoad: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  isActive: _propTypes2.default.bool
}, _class3.defaultProps = {
  isActive: true,
  lazyLoad: true,
  theme: {},
  listing: {},
  ratings: {},
  photos: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'getListingInfoComponents', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getListingInfoComponents'), _class2.prototype)), _class2)) || _class);
exports.default = SingleFamilyDesktopListing;