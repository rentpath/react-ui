"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _reactImageGallery = _interopRequireDefault(require("react-image-gallery"));

var _reactLazyload = require("react-lazyload");

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _Button = require("../Button");

var _CarouselNavigation = _interopRequireDefault(require("./CarouselNavigation"));

var _dec, _class, _class2, _class3, _temp;

var PAGE_SIZE = 30;
var FIRST_PAGE = 1;

var carouselItems = _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]));

var Carousel = (_dec = (0, _reactThemed.default)(['Carousel', 'Carousel-next', 'Carousel-previous']), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Carousel, _Component);

  function Carousel() {
    (0, _classCallCheck2.default)(this, Carousel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Carousel).apply(this, arguments));
  }

  (0, _createClass2.default)(Carousel, [{
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
      (0, _reactLazyload.forceCheck)();
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

      var _parseArgs = (0, _reactUiUtils.parseArgs)(pagination[key], _Button.Button, {
        count: this.pageCount(key, pageSize),
        'data-tid': name,
        key: (0, _reactUiUtils.randomId)(name),
        className: theme["Carousel_".concat(key)]
      }),
          _parseArgs2 = (0, _slicedToArray2.default)(_parseArgs, 2),
          paginationNav = _parseArgs2[0],
          props = _parseArgs2[1];

      return (0, _react.createElement)(paginationNav, (0, _objectSpread2.default)({}, props, {
        onClick: this["".concat(key, "PageClick")](props.onClick)
      }));
    }
  }, {
    key: "renderNavigationButton",
    value: function renderNavigationButton(key) {
      var navigation = this.props.navigation;

      var _parseArgs3 = (0, _reactUiUtils.parseArgs)(navigation[key], _CarouselNavigation.default),
          _parseArgs4 = (0, _slicedToArray2.default)(_parseArgs3, 2),
          Navigation = _parseArgs4[0],
          props = _parseArgs4[1];

      return function (onClick, disabled) {
        return _react.default.createElement(Navigation, (0, _extends2.default)({
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
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["onSlide", "selectedIndex", "className", "theme", "items", "navigation", "pagination"]);
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(className, theme.Carousel),
        "data-tid": "carousel"
      }, _react.default.createElement(_reactImageGallery.default, (0, _extends2.default)({
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
          rest = (0, _objectWithoutProperties2.default)(_this$props$paginatio, ["pageSize", "pageNumber", "total"]);
      return (0, _objectSpread2.default)({
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
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  items: _propTypes.default.oneOfType([_propTypes.default.arrayOf(carouselItems), carouselItems]),
  lazyLoad: _propTypes.default.bool,
  selectedIndex: _propTypes.default.number,
  onSlide: _propTypes.default.func,
  showNav: _propTypes.default.bool,
  navigation: _propTypes.default.shape({
    previous: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
    next: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object])
  }),
  pagination: _propTypes.default.shape({
    pageSize: _propTypes.default.number,
    pageNumber: _propTypes.default.number,
    total: _propTypes.default.number,
    previous: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
    next: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object])
  })
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  showNav: false,
  lazyLoad: false,
  theme: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onSlide", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "onSlide"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "previousPageClick", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "previousPageClick"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "nextPageClick", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "nextPageClick"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "renderItem", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "renderItem"), _class2.prototype)), _class2)) || _class);
exports.default = Carousel;