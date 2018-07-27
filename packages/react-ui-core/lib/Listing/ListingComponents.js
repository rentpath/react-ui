'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextComponent = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _Text = require('../Text');

var _Ratings = require('../Ratings');

var _Carousel = require('../Carousel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTextComponent = function createTextComponent(name, contextItem) {
  var _dec, _class, _class2, _temp;

  var TextComponent = (_dec = (0, _reactThemed2.default)([name]), _dec(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(TextComponent, _Component);

    function TextComponent() {
      (0, _classCallCheck3.default)(this, TextComponent);
      return (0, _possibleConstructorReturn3.default)(this, (TextComponent.__proto__ || (0, _getPrototypeOf2.default)(TextComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(TextComponent, [{
      key: 'render',
      value: function render() {
        var item = this.context[contextItem];
        var _props = this.props,
            theme = _props.theme,
            className = _props.className,
            props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'className']);


        if (!item) return null;
        return _react2.default.createElement(
          _Text.Text,
          (0, _extends3.default)({
            className: (0, _classnames2.default)(className, theme[name]),
            'data-tid': name.toLowerCase()
          }, props),
          item
        );
      }
    }]);
    return TextComponent;
  }(_react.Component), _class2.displayName = name, _class2.propTypes = {
    className: _propTypes2.default.string,
    theme: _propTypes2.default.object
  }, _class2.defaultProps = {
    theme: {}
  }, _class2.contextTypes = (0, _defineProperty3.default)({}, contextItem, _propTypes2.default.node), _temp)) || _class);


  return TextComponent;
};

exports.createTextComponent = createTextComponent;
var components = [['Bedroom', 'bedrooms'], ['Bathroom', 'bathrooms'], ['PropertyName', 'name'], ['Price', 'price'], ['Location', 'location'], ['UnitLevelAvailability', 'unitLevelAvailability'], ['Availability', 'availability'], ['Address', 'address'], ['Neighborhood', 'neighborhood']].reduce(function (acc, curr) {
  acc[curr[0]] = createTextComponent.apply(undefined, (0, _toConsumableArray3.default)(curr));return acc;
}, {});

var Ratings = function Ratings(props, _ref) {
  var rating = _ref.rating;
  return rating ? _react2.default.createElement(_Ratings.RatingBar, (0, _extends3.default)({}, props, rating)) : null;
};

Ratings.contextTypes = {
  rating: _propTypes2.default.object
};

var Photos = function Photos(props, _ref2) {
  var photos = _ref2.photos;
  return photos ? _react2.default.createElement(_Carousel.PhotoCarousel, (0, _extends3.default)({}, props, { items: photos })) : null;
};

Photos.contextTypes = {
  photos: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    caption: _propTypes2.default.string,
    path: _propTypes2.default.string
  }))
};

var Photo = function Photo(_ref3, _ref4) {
  var photo = _ref4.photo;
  var className = _ref3.className,
      theme = _ref3.theme,
      props = (0, _objectWithoutProperties3.default)(_ref3, ['className', 'theme']);

  var _ref5 = photo || {},
      url = _ref5.url,
      photoProps = (0, _objectWithoutProperties3.default)(_ref5, ['url']);

  if (!url) return null;
  return _react2.default.createElement('div', (0, _extends3.default)({
    style: { backgroundImage: 'url(' + photo.url + ')' },
    className: (0, _classnames2.default)(className, theme.Photo)
  }, props, photoProps));
};

Photo.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object
};

Photo.defaultProps = {
  theme: {}
};

Photo.contextTypes = {
  photo: _propTypes2.default.object
};

exports.default = (0, _extends3.default)({}, components, {
  Ratings: Ratings,
  Photos: Photos,
  Photo: (0, _reactThemed2.default)(['Photo'])(Photo)
});