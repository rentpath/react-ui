'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLazyload = require('react-lazyload');

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

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

var PhotoCarousel = (_dec = (0, _reactThemed2.default)(['PhotoCarousel', 'PhotoCarousel_Image', 'PhotoCarousel-empty']), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(PhotoCarousel, _PureComponent);

  function PhotoCarousel() {
    (0, _classCallCheck3.default)(this, PhotoCarousel);
    return (0, _possibleConstructorReturn3.default)(this, (PhotoCarousel.__proto__ || (0, _getPrototypeOf2.default)(PhotoCarousel)).apply(this, arguments));
  }

  (0, _createClass3.default)(PhotoCarousel, [{
    key: 'photo',
    value: function photo(path) {
      var _props = this.props,
          server = _props.server,
          dimensions = _props.dimensions;

      return '' + server + path + dimensions;
    }
  }, {
    key: 'lazyLoad',
    value: function lazyLoad() {
      var lazyLoad = this.props.lazyLoad;

      var props = (typeof lazyLoad === 'undefined' ? 'undefined' : (0, _typeof3.default)(lazyLoad)) === 'object' ? lazyLoad : {};

      return _react2.default.createElement(
        _reactLazyload2.default,
        props,
        this.renderCarousel()
      );
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      return _react2.default.createElement('img', (0, _extends3.default)({
        alt: item.caption,
        src: this.photo(item.path),
        className: this.props.theme.PhotoCarousel_Image
      }, item.itemProps));
    }
  }, {
    key: 'renderCarousel',
    value: function renderCarousel() {
      var _props2 = this.props,
          className = _props2.className,
          theme = _props2.theme,
          items = _props2.items,
          lazyLoad = _props2.lazyLoad,
          rest = (0, _objectWithoutProperties3.default)(_props2, ['className', 'theme', 'items', 'lazyLoad']);


      return _react2.default.createElement(_Carousel2.default, (0, _extends3.default)({
        items: items,
        infinite: true,
        renderItem: this.renderItem,
        lazyLoad: !!lazyLoad
      }, rest, {
        className: (0, _classnames2.default)(theme.PhotoCarousel, className)
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          theme = _props3.theme,
          items = _props3.items,
          lazyLoad = _props3.lazyLoad;


      if (!items || !items.length) {
        return _react2.default.createElement('div', { className: theme['PhotoCarousel-empty'] });
      }

      return lazyLoad ? this.lazyLoad() : this.renderCarousel();
    }
  }]);
  return PhotoCarousel;
}(_react.PureComponent), _class3.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    caption: _propTypes2.default.string,
    path: _propTypes2.default.string,
    itemProps: _propTypes2.default.object
  })),
  dimensions: _propTypes2.default.string,
  server: _propTypes2.default.string.isRequired,
  lazyLoad: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object])
}, _class3.defaultProps = {
  lazyLoad: false,
  theme: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'renderItem', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'renderItem'), _class2.prototype)), _class2)) || _class);
exports.default = PhotoCarousel;