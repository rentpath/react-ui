"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactLazyload = _interopRequireDefault(require("react-lazyload"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _Photo = require("../Photo");

var _Carousel = _interopRequireDefault(require("./Carousel"));

var _dec, _class, _class2, _class3, _temp;

var carouselPhoto = _propTypes.default.arrayOf(_propTypes.default.shape({
  caption: _propTypes.default.string,
  path: _propTypes.default.string,
  url: _propTypes.default.string
}));

var PhotoCarousel = (_dec = (0, _reactThemed.default)(['PhotoCarousel', 'PhotoCarousel-empty']), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(PhotoCarousel, _PureComponent);

  function PhotoCarousel() {
    (0, _classCallCheck2.default)(this, PhotoCarousel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PhotoCarousel).apply(this, arguments));
  }

  (0, _createClass2.default)(PhotoCarousel, [{
    key: "photo",
    value: function photo(item) {
      var server = this.props.server;
      var url = item.url,
          path = item.path,
          id = item.id;
      return url || "".concat(server).concat(path || id);
    }
  }, {
    key: "lazyLoadGallery",
    value: function lazyLoadGallery() {
      var lazyLoadGallery = this.props.lazyLoadGallery;
      var props = (0, _typeof2.default)(lazyLoadGallery) === 'object' ? lazyLoadGallery : {};
      return _react.default.createElement(_reactLazyload.default, props, this.renderCarousel());
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var isBackgroundImage = this.props.isBackgroundImage;
      var Component = isBackgroundImage ? _Photo.BackgroundPhoto : _Photo.Photo;
      return _react.default.createElement(Component, (0, _extends2.default)({
        alt: item.caption,
        url: this.photo(item)
      }, item));
    }
  }, {
    key: "renderCarousel",
    value: function renderCarousel() {
      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          items = _this$props.items,
          lazyLoadGallery = _this$props.lazyLoadGallery,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "theme", "items", "lazyLoadGallery"]);
      return _react.default.createElement(_Carousel.default, (0, _extends2.default)({
        items: items,
        infinite: true,
        renderItem: this.renderItem
      }, rest, {
        className: (0, _classnames.default)(theme.PhotoCarousel, className)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          items = _this$props2.items,
          lazyLoadGallery = _this$props2.lazyLoadGallery;

      if (!items || !items.length) {
        return _react.default.createElement("div", {
          className: theme['PhotoCarousel-empty']
        });
      }

      return lazyLoadGallery ? this.lazyLoadGallery() : this.renderCarousel();
    }
  }]);
  return PhotoCarousel;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  items: _propTypes.default.oneOfType([_propTypes.default.arrayOf(carouselPhoto), carouselPhoto]),
  server: _propTypes.default.string.isRequired,
  isBackgroundImage: _propTypes.default.bool,
  lazyLoad: _propTypes.default.bool,
  lazyLoadGallery: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object])
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  lazyLoad: false,
  lazyLoadGallery: false,
  isBackgroundImage: false,
  theme: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "renderItem", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "renderItem"), _class2.prototype)), _class2)) || _class);
exports.default = PhotoCarousel;