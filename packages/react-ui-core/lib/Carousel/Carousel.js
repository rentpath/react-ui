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

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactImageGallery = require('react-image-gallery');

var _reactImageGallery2 = _interopRequireDefault(_reactImageGallery);

var _reactLazyload = require('react-lazyload');

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _Button = require('../Button');

var _CarouselNavigation = require('./CarouselNavigation');

var _CarouselNavigation2 = _interopRequireDefault(_CarouselNavigation);

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

var PAGE_SIZE = 30;
var FIRST_PAGE = 1;

var Carousel = (_dec = (0, _reactThemed2.default)(['Carousel', 'Carousel-next', 'Carousel-previous']), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(Carousel, _Component);

  function Carousel() {
    (0, _classCallCheck3.default)(this, Carousel);
    return (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedIndex !== nextProps.selectedIndex) {
        this.slideToIndex(nextProps.selectedIndex);
      }
    }
  }, {
    key: 'onSlide',
    value: function onSlide(index) {
      var onSlide = this.props.onSlide;


      if (onSlide) onSlide(index);
      (0, _reactLazyload.forceCheck)();
    }
  }, {
    key: 'slideToIndex',
    value: function slideToIndex(index) {
      if (this.carousel && this.props.items[index]) {
        this.carousel.slideToIndex(index);
      }
    }
  }, {
    key: 'previousPageClick',
    value: function previousPageClick(onClick) {
      var _this2 = this;

      var pageNumber = this.pageInfo.pageNumber;

      var index = pageNumber > 2 ? 1 : 0;

      return function (event) {
        if (onClick) onClick(event, index, _this2.slideToIndex);
      };
    }
  }, {
    key: 'nextPageClick',
    value: function nextPageClick(onClick) {
      var _this3 = this;

      var _pageInfo = this.pageInfo,
          pageNumber = _pageInfo.pageNumber,
          total = _pageInfo.total;

      var added = pageNumber === 1 ? 1 : 2;

      return function (event) {
        if (onClick) onClick(event, total + added, _this3.slideToIndex);
      };
    }
  }, {
    key: 'pageCount',
    value: function pageCount(key, pageSize) {
      if (key === 'previous') return pageSize;
      return this.remainder < pageSize ? this.remainder : pageSize;
    }
  }, {
    key: 'paginationCard',
    value: function paginationCard(key) {
      var _props = this.props,
          pagination = _props.pagination,
          theme = _props.theme;
      var pageSize = this.pageInfo.pageSize;

      var name = 'carousel-pagination-' + key;

      var _parseArgs = (0, _reactUiUtils.parseArgs)(pagination[key], _Button.Button, {
        count: this.pageCount(key, pageSize),
        'data-tid': name,
        key: (0, _reactUiUtils.randomId)(name),
        className: theme['Carousel_' + key]
      }),
          _parseArgs2 = (0, _slicedToArray3.default)(_parseArgs, 2),
          paginationNav = _parseArgs2[0],
          props = _parseArgs2[1];

      return (0, _react.createElement)(paginationNav, (0, _extends3.default)({}, props, { onClick: this[key + 'PageClick'](props.onClick) }));
    }
  }, {
    key: 'renderNavigationButton',
    value: function renderNavigationButton(key) {
      var navigation = this.props.navigation;

      var _parseArgs3 = (0, _reactUiUtils.parseArgs)(navigation[key], _CarouselNavigation2.default),
          _parseArgs4 = (0, _slicedToArray3.default)(_parseArgs3, 2),
          Navigation = _parseArgs4[0],
          props = _parseArgs4[1];

      return function (onClick, disabled) {
        return _react2.default.createElement(Navigation, (0, _extends3.default)({
          disabled: disabled
        }, props, {
          direction: key,
          onClick: onClick
        }));
      };
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      return item;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          onSlide = _props2.onSlide,
          selectedIndex = _props2.selectedIndex,
          className = _props2.className,
          theme = _props2.theme,
          items = _props2.items,
          navigation = _props2.navigation,
          pagination = _props2.pagination,
          rest = (0, _objectWithoutProperties3.default)(_props2, ['onSlide', 'selectedIndex', 'className', 'theme', 'items', 'navigation', 'pagination']);


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, theme.Carousel),
          'data-tid': 'carousel'
        },
        _react2.default.createElement(_reactImageGallery2.default, (0, _extends3.default)({
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
            _this4.carousel = carousel;
          }
        }))
      );
    }
  }, {
    key: 'pageInfo',
    get: function get() {
      var _props$pagination = this.props.pagination,
          _props$pagination$pag = _props$pagination.pageSize,
          pageSize = _props$pagination$pag === undefined ? PAGE_SIZE : _props$pagination$pag,
          _props$pagination$pag2 = _props$pagination.pageNumber,
          pageNumber = _props$pagination$pag2 === undefined ? FIRST_PAGE : _props$pagination$pag2,
          _props$pagination$tot = _props$pagination.total,
          total = _props$pagination$tot === undefined ? this.props.items.length : _props$pagination$tot,
          rest = (0, _objectWithoutProperties3.default)(_props$pagination, ['pageSize', 'pageNumber', 'total']);


      return (0, _extends3.default)({ pageSize: pageSize, pageNumber: pageNumber, total: total }, rest);
    }
  }, {
    key: 'remainder',
    get: function get() {
      var _pageInfo2 = this.pageInfo,
          total = _pageInfo2.total,
          pageNumber = _pageInfo2.pageNumber,
          pageSize = _pageInfo2.pageSize;

      return total - pageNumber * pageSize;
    }
  }, {
    key: 'items',
    get: function get() {
      var _props3 = this.props,
          pagination = _props3.pagination,
          items = _props3.items;


      if (pagination) {
        var _pageInfo3 = this.pageInfo,
            pageNumber = _pageInfo3.pageNumber,
            pageSize = _pageInfo3.pageSize;

        var prepend = pageNumber > 1 ? this.paginationCard('previous') : [];
        var append = this.remainder >= pageSize ? this.paginationCard('next') : [];

        return [].concat(prepend, items, append);
      }

      return items;
    }
  }, {
    key: 'navigation',
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
}(_react.Component), _class3.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  items: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object])),
  lazyLoad: _propTypes2.default.bool,
  selectedIndex: _propTypes2.default.number,
  onSlide: _propTypes2.default.func,
  showNav: _propTypes2.default.bool,
  navigation: _propTypes2.default.shape({
    previous: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
    next: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object])
  }),
  pagination: _propTypes2.default.shape({
    pageSize: _propTypes2.default.number,
    pageNumber: _propTypes2.default.number,
    total: _propTypes2.default.number,
    previous: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
    next: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object])
  })
}, _class3.defaultProps = {
  showNav: false,
  lazyLoad: false,
  theme: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'onSlide', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'onSlide'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'previousPageClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'previousPageClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'nextPageClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'nextPageClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'renderItem', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'renderItem'), _class2.prototype)), _class2)) || _class);
exports.default = Carousel;