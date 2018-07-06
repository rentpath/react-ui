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
  width: 280,
  height: 120
};

var MobileMapListing = (_dec = (0, _reactThemed2.default)(/^MobileMapListing/), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(MobileMapListing, _Component);

  function MobileMapListing(props) {
    (0, _classCallCheck3.default)(this, MobileMapListing);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MobileMapListing.__proto__ || (0, _getPrototypeOf2.default)(MobileMapListing)).call(this, props));

    _this.loadedCarousel = false;
    return _this;
  }

  (0, _createClass3.default)(MobileMapListing, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var listing = this.props.listing;

      return this.props.isActive !== nextProps.isActive || listing.id !== nextProps.listing.id || listing.isFavorited !== nextProps.listing.isFavorited || !(0, _isEqual2.default)(listing.photos, nextProps.listing.photos);
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
      var _props = this.props,
          index = _props.index,
          listing = _props.listing,
          onClick = _props.onClick;


      if (onClick) onClick(index, listing);
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick(onClick) {
      var _this2 = this;

      var _props2 = this.props,
          isActive = _props2.isActive,
          listing = _props2.listing;


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
      var _props3 = this.props,
          isActive = _props3.isActive,
          listing = _props3.listing,
          favoriteButton = _props3.favoriteButton;
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

      this.loadedCarousel = true;
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
      var _props4 = this.props,
          theme = _props4.theme,
          listing = _props4.listing;
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
          className: (0, _classnames2.default)(theme.MobileMapListing_CtaButton, className),
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
      var _props5 = this.props,
          theme = _props5.theme,
          favoriteButton = _props5.favoriteButton,
          isActive = _props5.isActive,
          listing = _props5.listing;
      var className = favoriteButton.className;

      return _react2.default.createElement(_reactUiCore.ToggleButton, (0, _extends3.default)({}, favoriteButton, {
        value: listing.isFavorited,
        className: (0, _classnames2.default)(theme.MobileMapListing_FavoriteButton, className),
        inactive: !isActive,
        onClick: this.handleFavoriteClick
      }));
    }
  }, {
    key: 'renderPhotoCarousel',
    value: function renderPhotoCarousel() {
      var _props6 = this.props,
          listing = _props6.listing,
          theme = _props6.theme,
          photos = _props6.photos,
          isActive = _props6.isActive,
          renderCustomControls = _props6.renderCustomControls;
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
        'div',
        { className: theme.MobileMapListing_Top },
        (isActive || this.loadedCarousel) && _react2.default.createElement(_reactUiCore.ListingComponents.Photos, (0, _extends3.default)({
          showNav: true
        }, photos, {
          lazyLoad: lazyLoad,
          className: theme.MobileMapListing_Photos,
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
      var _props7 = this.props,
          theme = _props7.theme,
          listing = _props7.listing,
          onClick = _props7.onClick,
          className = _props7.className,
          photos = _props7.photos,
          ratings = _props7.ratings,
          ctaButtons = _props7.ctaButtons,
          favoriteButton = _props7.favoriteButton,
          propertyName = _props7.propertyName,
          isActive = _props7.isActive,
          lazyLoad = _props7.lazyLoad,
          onPhotoCarouselSlide = _props7.onPhotoCarouselSlide,
          renderCustomControls = _props7.renderCustomControls,
          props = (0, _objectWithoutProperties3.default)(_props7, ['theme', 'listing', 'onClick', 'className', 'photos', 'ratings', 'ctaButtons', 'favoriteButton', 'propertyName', 'isActive', 'lazyLoad', 'onPhotoCarouselSlide', 'renderCustomControls']);


      return _react2.default.createElement(
        _reactUiCore.ListingCell,
        (0, _extends3.default)({
          listing: listing,
          onClick: this.handleCardClick,
          className: (0, _classnames2.default)(className, theme.MobileMapListing, theme['MobileMapListing-' + (isActive ? 'active' : 'inactive')]),
          isActive: isActive
        }, props),
        this.renderFavoriteButton(),
        listing.banner && _react2.default.createElement(_Banners.Banner, { name: listing.banner, className: theme.MobileMapListing_Banner }),
        this.renderPhotoCarousel(),
        _react2.default.createElement(
          'div',
          { className: theme.MobileMapListing_Bottom },
          _react2.default.createElement(
            'div',
            { className: theme.MobileMapListing_Info },
            _react2.default.createElement(_reactUiCore.ListingComponents.Price, null),
            _react2.default.createElement(_reactUiCore.ListingComponents.PropertyName, propertyName),
            _react2.default.createElement(
              'div',
              { className: theme.MobileMapListing_BedsAndUla },
              _react2.default.createElement(_reactUiCore.ListingComponents.Bedroom, null),
              _react2.default.createElement(_reactUiCore.ListingComponents.UnitLevelAvailability, null)
            ),
            listing.rating ? _react2.default.createElement(_reactUiCore.ListingComponents.Ratings, ratings) : _react2.default.createElement('div', {
              className: theme.MobileMapListing_RatingPlaceHolder,
              'data-tid': 'rating-placeholder'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: theme.MobileMapListing_CTAs },
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
  return MobileMapListing;
}(_react.Component), _class3.propTypes = {
  index: _propTypes2.default.number,
  listing: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  photos: _propTypes2.default.object,
  ratings: _propTypes2.default.object,
  propertyName: _propTypes2.default.object,
  ctaButtons: _propTypes2.default.arrayOf(buttonPropTypes),
  favoriteButton: buttonPropTypes,
  lazyLoad: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  isActive: _propTypes2.default.bool,
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
exports.default = MobileMapListing;