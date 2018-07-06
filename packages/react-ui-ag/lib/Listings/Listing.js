'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _reactLazyload = require('react-lazyload');

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

var _reactUiCore = require('@rentpath/react-ui-core');

var _Banners = require('../Banners');

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

var REACT_LAZYLOAD_PROP_DEFAULTS = {
  offset: [250, -100],
  resize: true,
  width: 318,
  height: 280
};

var Listing = (_dec = (0, _reactThemed2.default)(/^Listing/), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(Listing, _Component);

  function Listing(props) {
    (0, _classCallCheck3.default)(this, Listing);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Listing.__proto__ || (0, _getPrototypeOf2.default)(Listing)).call(this, props));

    _this.state = {
      loadedCarousel: false
    };
    return _this;
  }

  (0, _createClass3.default)(Listing, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          isActive = _props.isActive,
          listing = _props.listing,
          className = _props.className,
          photoConfig = _props.photos;
      var id = listing.id,
          isFavorited = listing.isFavorited,
          photos = listing.photos;


      return isActive !== nextProps.isActive || id !== nextProps.listing.id || isFavorited !== nextProps.listing.isFavorited || className !== nextProps.className || !(0, _isEqual2.default)(photos, nextProps.listing.photos) || !(0, _isEqual2.default)(photoConfig, nextProps.photos);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isActive !== prevProps.isActive && !prevProps.isActive) {
        (0, _reactLazyload.forceCheck)();
      }
    }
  }, {
    key: 'handleCardClick',
    value: function handleCardClick() {
      var _props2 = this.props,
          index = _props2.index,
          listing = _props2.listing,
          onClick = _props2.onClick;


      if (onClick) onClick(index, listing);
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick(onClick) {
      var _this2 = this;

      var _props3 = this.props,
          isActive = _props3.isActive,
          listing = _props3.listing;


      return function (event) {
        if (isActive && onClick) {
          onClick(_this2.props.listing);
        } else if (!isActive && _this2.props.onClick) {
          _this2.props.onClick(_this2.props.index, listing);
        }

        var shouldStopPropagation = isActive && event && event.stopPropagation;

        if (shouldStopPropagation) event.stopPropagation();
      };
    }
  }, {
    key: 'handleFavoriteClick',
    value: function handleFavoriteClick(value, event) {
      var _props4 = this.props,
          isActive = _props4.isActive,
          listing = _props4.listing,
          favoriteButton = _props4.favoriteButton;
      var onClick = favoriteButton.onClick;


      if (isActive && onClick) {
        onClick(this.props.listing, value);
      } else if (!isActive && this.props.onClick) {
        this.props.onClick(this.props.index, listing);
      }

      var shouldStopPropagation = isActive && event && event.stopPropagation;

      if (shouldStopPropagation) {
        event.stopPropagation();
      }
    }
  }, {
    key: 'handlePhotoCarouselSlide',
    value: function handlePhotoCarouselSlide(index) {
      var onPhotoCarouselSlide = this.props.onPhotoCarouselSlide;


      if (onPhotoCarouselSlide) onPhotoCarouselSlide(index);

      this.setState({
        loadedCarousel: true
      });
    }
  }, {
    key: 'renderCtaButtons',
    value: function renderCtaButtons() {
      var _this3 = this;

      var ctaButtons = this.props.ctaButtons;

      return ctaButtons.map(function (cta, index) {
        return _this3.renderCtaButton(cta, index);
      });
    }
  }, {
    key: 'renderCtaButton',
    value: function renderCtaButton(props, key) {
      var _props5 = this.props,
          theme = _props5.theme,
          listing = _props5.listing;
      var className = props.className,
          onClick = props.onClick,
          valueLocation = props.valueLocation,
          children = props.children,
          rest = (0, _objectWithoutProperties3.default)(props, ['className', 'onClick', 'valueLocation', 'children']);


      var buttonText = (0, _get3.default)(listing, valueLocation, children);
      var buttonProps = (0, _extends3.default)({}, rest);

      if (!buttonText) return null;

      return _react2.default.createElement(
        _reactUiCore.Button,
        (0, _extends3.default)({}, buttonProps, {
          className: (0, _classnames2.default)(theme.Listing_CtaButton, className),
          onClick: this.handleButtonClick(onClick),
          key: key,
          'data-tid': 'cta-button'
        }),
        buttonText
      );
    }
  }, {
    key: 'renderFavoriteButton',
    value: function renderFavoriteButton() {
      var _props6 = this.props,
          theme = _props6.theme,
          favoriteButton = _props6.favoriteButton,
          isActive = _props6.isActive,
          listing = _props6.listing;
      var className = favoriteButton.className;


      return _react2.default.createElement(_reactUiCore.ToggleButton, (0, _extends3.default)({}, favoriteButton, {
        value: listing.isFavorited,
        className: (0, _classnames2.default)(theme.Listing_FavoriteButton, className),
        inactive: !isActive,
        onClick: this.handleFavoriteClick
      }));
    }
  }, {
    key: 'renderBanners',
    value: function renderBanners() {
      var _props7 = this.props,
          listing = _props7.listing,
          theme = _props7.theme;


      return _react2.default.createElement(
        'div',
        { className: theme.Listing_Banner },
        listing.banners.map(function (banner, index) {
          return _react2.default.createElement(_Banners.Banner, { key: banner + '_' + index, name: banner });
        })
      );
    }
  }, {
    key: 'renderPhotoCarousel',
    value: function renderPhotoCarousel() {
      var _props8 = this.props,
          listing = _props8.listing,
          theme = _props8.theme,
          photos = _props8.photos,
          isActive = _props8.isActive,
          renderCustomControls = _props8.renderCustomControls;
      var lazyLoad = this.props.lazyLoad;


      if (lazyLoad && typeof lazyLoad === 'boolean') {
        lazyLoad = typeof lazyLoad === 'boolean' ? REACT_LAZYLOAD_PROP_DEFAULTS : lazyLoad;
      }

      if (!isActive) {
        var server = photos.server,
            dimensions = photos.dimensions;

        var firstPhoto = this.listingPhotos[0] || {};
        listing.photo = { url: '' + server + firstPhoto.path + dimensions };
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        (isActive || this.state.loadedCarousel) && _react2.default.createElement(_reactUiCore.ListingComponents.Photos, (0, _extends3.default)({
          showNav: true
        }, photos, {
          lazyLoad: lazyLoad,
          className: theme.Listing_Photos,
          onSlide: this.handlePhotoCarouselSlide,
          renderCustomControls: renderCustomControls
        })),
        this.renderPhoto(lazyLoad)
      );
    }
  }, {
    key: 'renderPhoto',
    value: function renderPhoto(lazyLoad) {
      if (lazyLoad) {
        return _react2.default.createElement(
          _reactLazyload2.default,
          lazyLoad,
          _react2.default.createElement(_reactUiCore.ListingComponents.Photo, null)
        );
      }

      return _react2.default.createElement(_reactUiCore.ListingComponents.Photo, null);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props9 = this.props,
          theme = _props9.theme,
          listing = _props9.listing,
          onClick = _props9.onClick,
          className = _props9.className,
          photos = _props9.photos,
          ratings = _props9.ratings,
          ctaButtons = _props9.ctaButtons,
          favoriteButton = _props9.favoriteButton,
          isActive = _props9.isActive,
          lazyLoad = _props9.lazyLoad,
          listingInfoComponents = _props9.listingInfoComponents,
          listingTopComponents = _props9.listingTopComponents,
          onPhotoCarouselSlide = _props9.onPhotoCarouselSlide,
          renderCustomControls = _props9.renderCustomControls,
          props = (0, _objectWithoutProperties3.default)(_props9, ['theme', 'listing', 'onClick', 'className', 'photos', 'ratings', 'ctaButtons', 'favoriteButton', 'isActive', 'lazyLoad', 'listingInfoComponents', 'listingTopComponents', 'onPhotoCarouselSlide', 'renderCustomControls']);


      return _react2.default.createElement(
        _reactUiCore.ListingCell,
        (0, _extends3.default)({
          listing: listing,
          onClick: this.handleCardClick,
          className: (0, _classnames2.default)(className, theme.Listing, theme['Listing-' + (isActive ? 'active' : 'inactive')]),
          isActive: isActive
        }, props),
        listing.banners && this.renderBanners(),
        this.renderFavoriteButton(),
        _react2.default.createElement(
          'div',
          { className: theme.Listing_Top },
          this.renderPhotoCarousel(),
          listingTopComponents
        ),
        _react2.default.createElement(
          'div',
          { className: theme.Listing_Bottom },
          _react2.default.createElement(
            'div',
            { className: theme.Listing_Info, 'data-tid': 'listing-info' },
            listingInfoComponents
          ),
          ctaButtons && _react2.default.createElement(
            'div',
            { className: theme.Listing_CTAs },
            this.renderCtaButtons()
          )
        )
      );
    }
  }, {
    key: 'listingPhotos',
    get: function get() {
      return (0, _get3.default)(this.props.listing, 'photos', []);
    }
  }]);
  return Listing;
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
  isActive: _propTypes2.default.bool,
  listingInfoComponents: _propTypes2.default.node,
  listingTopComponents: _propTypes2.default.node,
  onPhotoCarouselSlide: _propTypes2.default.func,
  renderCustomControls: _propTypes2.default.func
}, _class3.defaultProps = {
  isActive: true,
  lazyLoad: true,
  theme: {},
  listing: {},
  ratings: {},
  photos: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleCardClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleCardClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleButtonClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleButtonClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleFavoriteClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleFavoriteClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handlePhotoCarouselSlide', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handlePhotoCarouselSlide'), _class2.prototype)), _class2)) || _class);
exports.default = Listing;