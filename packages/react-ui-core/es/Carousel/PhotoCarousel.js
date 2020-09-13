import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import LazyLoad from 'react-lazyload';
import autobind from 'autobind-decorator';
import { Photo, BackgroundPhoto } from '../Photo';
import Carousel from './Carousel';
var carouselPhoto = PropTypes.arrayOf(PropTypes.shape({
  caption: PropTypes.string,
  path: PropTypes.string,
  url: PropTypes.string
}));
var PhotoCarousel = (_dec = themed(['PhotoCarousel', 'PhotoCarousel-empty']), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PhotoCarousel, _PureComponent);

  function PhotoCarousel() {
    _classCallCheck(this, PhotoCarousel);

    return _possibleConstructorReturn(this, _getPrototypeOf(PhotoCarousel).apply(this, arguments));
  }

  _createClass(PhotoCarousel, [{
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
      var props = _typeof(lazyLoadGallery) === 'object' ? lazyLoadGallery : {};
      return React.createElement(LazyLoad, props, this.renderCarousel());
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var isBackgroundImage = this.props.isBackgroundImage;
      var Component = isBackgroundImage ? BackgroundPhoto : Photo;
      return React.createElement(Component, _extends({
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
          rest = _objectWithoutProperties(_this$props, ["className", "theme", "items", "lazyLoadGallery"]);

      return React.createElement(Carousel, _extends({
        items: items,
        infinite: true,
        renderItem: this.renderItem
      }, rest, {
        className: classnames(theme.PhotoCarousel, className)
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
        return React.createElement("div", {
          className: theme['PhotoCarousel-empty']
        });
      }

      return lazyLoadGallery ? this.lazyLoadGallery() : this.renderCarousel();
    }
  }]);

  return PhotoCarousel;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  theme: PropTypes.object,
  items: PropTypes.oneOfType([PropTypes.arrayOf(carouselPhoto), carouselPhoto]),
  server: PropTypes.string.isRequired,
  isBackgroundImage: PropTypes.bool,
  lazyLoad: PropTypes.bool,
  lazyLoadGallery: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
}), _defineProperty(_class3, "defaultProps", {
  lazyLoad: false,
  lazyLoadGallery: false,
  isBackgroundImage: false,
  theme: {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "renderItem", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "renderItem"), _class2.prototype)), _class2)) || _class);
export { PhotoCarousel as default };