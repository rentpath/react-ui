import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import autobind from 'autobind-decorator';
import Slider from 'react-image-gallery';
import { forceCheck } from 'react-lazyload';
import { randomId, parseArgs } from '@rentpath/react-ui-utils';
import { Button } from '../Button';
import CarouselNavigation from './CarouselNavigation';
var PAGE_SIZE = 30;
var FIRST_PAGE = 1;
var carouselItems = PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]));
var Carousel = (_dec = themed(['Carousel', 'Carousel-next', 'Carousel-previous']), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Carousel).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedIndex !== nextProps.selectedIndex) {
        this.slideToIndex(nextProps.selectedIndex);
      }
    }
  }, {
    key: "onSlide",
    value: function onSlide(index) {
      var onSlide = this.props.onSlide;
      if (onSlide) onSlide(index);
      forceCheck();
    }
  }, {
    key: "slideToIndex",
    value: function slideToIndex(index) {
      if (this.carousel && this.props.items[index]) {
        this.carousel.slideToIndex(index);
      }
    }
  }, {
    key: "previousPageClick",
    value: function previousPageClick(onClick) {
      var _this = this;

      var pageNumber = this.pageInfo.pageNumber;
      var index = pageNumber > 2 ? 1 : 0;
      return function (event) {
        if (onClick) onClick(event, index, _this.slideToIndex);
      };
    }
  }, {
    key: "nextPageClick",
    value: function nextPageClick(onClick) {
      var _this2 = this;

      var _this$pageInfo = this.pageInfo,
          pageNumber = _this$pageInfo.pageNumber,
          total = _this$pageInfo.total;
      var added = pageNumber === 1 ? 1 : 2;
      return function (event) {
        if (onClick) onClick(event, total + added, _this2.slideToIndex);
      };
    }
  }, {
    key: "pageCount",
    value: function pageCount(key, pageSize) {
      if (key === 'previous') return pageSize;
      return this.remainder < pageSize ? this.remainder : pageSize;
    }
  }, {
    key: "paginationCard",
    value: function paginationCard(key) {
      var _this$props = this.props,
          pagination = _this$props.pagination,
          theme = _this$props.theme;
      var pageSize = this.pageInfo.pageSize;
      var name = "carousel-pagination-".concat(key);

      var _parseArgs = parseArgs(pagination[key], Button, {
        count: this.pageCount(key, pageSize),
        'data-tid': name,
        key: randomId(name),
        className: theme["Carousel_".concat(key)]
      }),
          _parseArgs2 = _slicedToArray(_parseArgs, 2),
          paginationNav = _parseArgs2[0],
          props = _parseArgs2[1];

      return createElement(paginationNav, _objectSpread({}, props, {
        onClick: this["".concat(key, "PageClick")](props.onClick)
      }));
    }
  }, {
    key: "renderNavigationButton",
    value: function renderNavigationButton(key) {
      var navigation = this.props.navigation;

      var _parseArgs3 = parseArgs(navigation[key], CarouselNavigation),
          _parseArgs4 = _slicedToArray(_parseArgs3, 2),
          Navigation = _parseArgs4[0],
          props = _parseArgs4[1];

      return function (onClick, disabled) {
        return React.createElement(Navigation, _extends({
          disabled: disabled
        }, props, {
          direction: key,
          onClick: onClick
        }));
      };
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      return item;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          onSlide = _this$props2.onSlide,
          selectedIndex = _this$props2.selectedIndex,
          className = _this$props2.className,
          theme = _this$props2.theme,
          items = _this$props2.items,
          navigation = _this$props2.navigation,
          pagination = _this$props2.pagination,
          rest = _objectWithoutProperties(_this$props2, ["onSlide", "selectedIndex", "className", "theme", "items", "navigation", "pagination"]);

      return React.createElement("div", {
        className: classnames(className, theme.Carousel),
        "data-tid": "carousel"
      }, React.createElement(Slider, _extends({
        items: this.items,
        renderItem: this.renderItem,
        onSlide: this.onSlide,
        showThumbnails: false,
        showPlayButton: false,
        showFullscreenButton: false,
        startIndex: selectedIndex,
        infinite: false,
        swipeThreshold: 10,
        preventDefaultTouchmoveEvent: true
      }, rest, this.navigation, {
        ref: function ref(carousel) {
          _this3.carousel = carousel;
        }
      })));
    }
  }, {
    key: "pageInfo",
    get: function get() {
      var _this$props$paginatio = this.props.pagination,
          _this$props$paginatio2 = _this$props$paginatio.pageSize,
          pageSize = _this$props$paginatio2 === void 0 ? PAGE_SIZE : _this$props$paginatio2,
          _this$props$paginatio3 = _this$props$paginatio.pageNumber,
          pageNumber = _this$props$paginatio3 === void 0 ? FIRST_PAGE : _this$props$paginatio3,
          _this$props$paginatio4 = _this$props$paginatio.total,
          total = _this$props$paginatio4 === void 0 ? this.props.items.length : _this$props$paginatio4,
          rest = _objectWithoutProperties(_this$props$paginatio, ["pageSize", "pageNumber", "total"]);

      return _objectSpread({
        pageSize: pageSize,
        pageNumber: pageNumber,
        total: total
      }, rest);
    }
  }, {
    key: "remainder",
    get: function get() {
      var _this$pageInfo2 = this.pageInfo,
          total = _this$pageInfo2.total,
          pageNumber = _this$pageInfo2.pageNumber,
          pageSize = _this$pageInfo2.pageSize;
      return total - pageNumber * pageSize;
    }
  }, {
    key: "items",
    get: function get() {
      var _this$props3 = this.props,
          pagination = _this$props3.pagination,
          items = _this$props3.items;

      if (pagination) {
        var _this$pageInfo3 = this.pageInfo,
            pageNumber = _this$pageInfo3.pageNumber,
            pageSize = _this$pageInfo3.pageSize;
        var prepend = pageNumber > 1 ? this.paginationCard('previous') : [];
        var append = this.remainder >= pageSize ? this.paginationCard('next') : [];
        return [].concat(prepend, items, append);
      }

      return items;
    }
  }, {
    key: "navigation",
    get: function get() {
      var navigation = this.props.navigation;
      if (!navigation) return {};
      return {
        renderLeftNav: this.renderNavigationButton('previous'),
        renderRightNav: this.renderNavigationButton('next'),
        showNav: true
      };
    }
  }]);

  return Carousel;
}(Component), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  theme: PropTypes.object,
  items: PropTypes.oneOfType([PropTypes.arrayOf(carouselItems), carouselItems]),
  lazyLoad: PropTypes.bool,
  selectedIndex: PropTypes.number,
  onSlide: PropTypes.func,
  showNav: PropTypes.bool,
  navigation: PropTypes.shape({
    previous: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
    next: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object])
  }),
  pagination: PropTypes.shape({
    pageSize: PropTypes.number,
    pageNumber: PropTypes.number,
    total: PropTypes.number,
    previous: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
    next: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object])
  })
}), _defineProperty(_class3, "defaultProps", {
  showNav: false,
  lazyLoad: false,
  theme: {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onSlide", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "onSlide"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "previousPageClick", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "previousPageClick"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nextPageClick", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "nextPageClick"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "renderItem", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "renderItem"), _class2.prototype)), _class2)) || _class);
export { Carousel as default };