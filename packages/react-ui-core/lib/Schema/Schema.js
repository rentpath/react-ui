'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApartmentComplex = function ApartmentComplex(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ itemType: 'https://schema.org/ApartmentComplex', itemScope: true }, rest),
    children
  );
};

ApartmentComplex.propTypes = {
  children: _propTypes2.default.node
};

var AggregateRating = function AggregateRating(_ref2) {
  var score = _ref2.score,
      count = _ref2.count,
      reviews = _ref2.reviews;

  if (!count && !reviews) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    {
      itemScope: true,
      itemProp: 'aggregateRating',
      itemType: 'https://schema.org/AggregateRating'
    },
    _react2.default.createElement('meta', { itemProp: 'worstRating', content: '1.0' }),
    _react2.default.createElement('meta', { itemProp: 'bestRating', content: '5.0' }),
    _react2.default.createElement('meta', { itemProp: 'ratingValue', content: score }),
    !!count && _react2.default.createElement('meta', { itemProp: 'ratingCount', content: count }),
    !!reviews && _react2.default.createElement('meta', { itemProp: 'reviewCount', content: reviews })
  );
};

AggregateRating.propTypes = {
  score: _propTypes2.default.number,
  count: _propTypes2.default.number,
  reviews: _propTypes2.default.number
};

var Address = function Address(_ref3) {
  var addressLine1 = _ref3.addressLine1,
      city = _ref3.city,
      state = _ref3.state,
      zip = _ref3.zip;
  return _react2.default.createElement(
    'span',
    { itemType: 'https://schema.org/PostalAddress', itemProp: 'address', itemScope: true },
    _react2.default.createElement('meta', { itemProp: 'streetAddress', content: addressLine1 }),
    _react2.default.createElement('meta', { itemProp: 'addressLocality', content: city }),
    _react2.default.createElement('meta', { itemProp: 'addressRegion', content: state }),
    _react2.default.createElement('meta', { itemProp: 'postalCode', content: zip })
  );
};

Address.propTypes = {
  addressLine1: _propTypes2.default.string,
  city: _propTypes2.default.string,
  state: _propTypes2.default.string,
  zip: _propTypes2.default.string
};

var Geo = function Geo(_ref4) {
  var latitude = _ref4.latitude,
      longitude = _ref4.longitude;

  if (!latitude || !longitude) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { itemProp: 'geo', itemScope: true, itemType: 'https://schema.org/GeoCoordinates' },
    _react2.default.createElement('meta', { itemProp: 'latitude', content: latitude }),
    _react2.default.createElement('meta', { itemProp: 'longitude', content: longitude })
  );
};

Geo.propTypes = {
  latitude: _propTypes2.default.number,
  longitude: _propTypes2.default.number
};

var NameAndUrl = (_dec = (0, _reactThemed2.default)(['PropertyLink'], { pure: true }), _dec(_class = function (_PureComponent) {
  (0, _inherits3.default)(NameAndUrl, _PureComponent);

  function NameAndUrl() {
    (0, _classCallCheck3.default)(this, NameAndUrl);
    return (0, _possibleConstructorReturn3.default)(this, (NameAndUrl.__proto__ || (0, _getPrototypeOf2.default)(NameAndUrl)).apply(this, arguments));
  }

  (0, _createClass3.default)(NameAndUrl, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          theme = _props.theme,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        { itemProp: 'name' },
        url ? _react2.default.createElement(
          'a',
          {
            href: url,
            itemProp: 'url',
            target: '_blank',
            className: theme.PropertyLink,
            onClick: function onClick(event) {
              return event.preventDefault();
            }
          },
          children
        ) : children
      );
    }
  }]);
  return NameAndUrl;
}(_react.PureComponent)) || _class);


NameAndUrl.propTypes = {
  url: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  children: _propTypes2.default.node
};

exports.default = {
  Address: Address,
  AggregateRating: AggregateRating,
  ApartmentComplex: ApartmentComplex,
  Geo: Geo,
  NameAndUrl: NameAndUrl
};