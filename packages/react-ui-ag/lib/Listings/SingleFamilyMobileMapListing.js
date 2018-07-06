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
  className: _propTypes2.default.string
});

var REACT_LAZYLOAD_PROP_DEFAULTS = {
  offset: [250, -100],
  resize: true,
  width: 280,
  height: 120
};

var SingleFamilyMobileMapListing = (_dec = (0, _reactThemed2.default)(/^MobileMapListing/), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(SingleFamilyMobileMapListing, _Component);

  function SingleFamilyMobileMapListing() {
    (0, _classCallCheck3.default)(this, SingleFamilyMobileMapListing);
    return (0, _possibleConstructorReturn3.default)(this, (SingleFamilyMobileMapListing.__proto__ || (0, _getPrototypeOf2.default)(SingleFamilyMobileMapListing)).apply(this, arguments));
  }

  (0, _createClass3.default)(SingleFamilyMobileMapListing, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.isActive !== nextProps.isActive || this.props.listing.id !== nextProps.listing.id;
    }
  }, {
    key: 'handleCardClick',
    value: function handleCardClick() {
      var _props = this.props,
          index = _props.index,
          onClick = _props.onClick;


      if (onClick) onClick(index);
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick(onClick) {
      var _this2 = this;

      var isActive = this.props.isActive;


      return function (event) {
        if (isActive && onClick) {
          onClick(_this2.props.listing);
        } else if (!isActive && _this2.props.onClick) {
          _this2.props.onClick(_this2.props.index);
        }

        var shouldStopPropagation = isActive && event && event.stopPropagation;

        if (shouldStopPropagation) event.stopPropagation();
      };
    }
  }, {
    key: 'handleFavoriteClick',
    value: function handleFavoriteClick(value) {
      var _props2 = this.props,
          isActive = _props2.isActive,
          favoriteButton = _props2.favoriteButton;
      var onClick = favoriteButton.onClick;


      if (isActive && onClick) {
        onClick(this.props.listing, value);
      } else if (!isActive && this.props.onClick) {
        this.props.onClick(this.props.index);
      }
    }
  }, {
    key: 'renderCtaButton',
    value: function renderCtaButton() {
      var _props3 = this.props,
          theme = _props3.theme,
          ctaButton = _props3.ctaButton;
      var onClick = ctaButton.onClick,
          className = ctaButton.className;


      return _react2.default.createElement(_reactUiCore.Button, (0, _extends3.default)({}, ctaButton, {
        className: (0, _classnames2.default)(theme.MobileMapListing_CtaButton, className),
        onClick: this.handleButtonClick(onClick),
        'data-tid': 'cta-button'
      }));
    }
  }, {
    key: 'renderFavoriteButton',
    value: function renderFavoriteButton() {
      var _props4 = this.props,
          theme = _props4.theme,
          favoriteButton = _props4.favoriteButton,
          isActive = _props4.isActive,
          listing = _props4.listing;
      var className = favoriteButton.className;

      return _react2.default.createElement(_reactUiCore.ToggleButton, (0, _extends3.default)({}, favoriteButton, {
        value: listing.isFavorited,
        className: (0, _classnames2.default)(theme.MobileMapListing_FavoriteButton, className),
        onClick: this.handleFavoriteClick,
        inactive: !isActive
      }));
    }
  }, {
    key: 'renderPhotoCarousel',
    value: function renderPhotoCarousel() {
      var _props5 = this.props,
          theme = _props5.theme,
          photos = _props5.photos;
      var lazyLoad = this.props.lazyLoad;


      if (lazyLoad && typeof lazyLoad === 'boolean') {
        lazyLoad = REACT_LAZYLOAD_PROP_DEFAULTS;
      }

      return _react2.default.createElement(
        'div',
        { className: theme.MobileMapListing_Top },
        _react2.default.createElement(_reactUiCore.ListingComponents.Photos, (0, _extends3.default)({
          showNav: true
        }, photos, {
          lazyLoad: lazyLoad,
          className: theme.MobileMapListing_Photos
        }))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          theme = _props6.theme,
          listing = _props6.listing,
          onClick = _props6.onClick,
          className = _props6.className,
          photos = _props6.photos,
          ctaButton = _props6.ctaButton,
          favoriteButton = _props6.favoriteButton,
          isActive = _props6.isActive,
          lazyLoad = _props6.lazyLoad,
          props = (0, _objectWithoutProperties3.default)(_props6, ['theme', 'listing', 'onClick', 'className', 'photos', 'ctaButton', 'favoriteButton', 'isActive', 'lazyLoad']);


      return _react2.default.createElement(
        _reactUiCore.ListingCell,
        (0, _extends3.default)({
          listing: listing,
          onClick: this.handleCardClick,
          className: (0, _classnames2.default)(className, theme.MobileMapListing, theme['MobileMapListing-' + (isActive ? 'active' : 'inactive')]),
          isActive: isActive
        }, props),
        this.renderFavoriteButton(),
        listing.banner && _react2.default.createElement(_Banners.Banner, {
          name: listing.banner,
          className: theme.MobileMapListing_Banner
        }),
        this.renderPhotoCarousel(),
        _react2.default.createElement(
          'div',
          { className: theme.MobileMapListing_Bottom },
          _react2.default.createElement(
            'div',
            { className: theme.MobileMapListing_Info },
            _react2.default.createElement(_reactUiCore.ListingComponents.Price, null),
            _react2.default.createElement(_reactUiCore.ListingComponents.Address, null),
            _react2.default.createElement(
              'div',
              { className: theme.MobileMapListing_BedsAndCta },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactUiCore.ListingComponents.Bedroom, null),
                _react2.default.createElement(_reactUiCore.ListingComponents.Availability, null)
              ),
              this.renderCtaButton()
            )
          )
        )
      );
    }
  }]);
  return SingleFamilyMobileMapListing;
}(_react.Component), _class3.propTypes = {
  index: _propTypes2.default.number,
  listing: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  photos: _propTypes2.default.object,
  ctaButton: buttonPropTypes,
  favoriteButton: buttonPropTypes,
  lazyLoad: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  isActive: _propTypes2.default.bool
}, _class3.defaultProps = {
  theme: {},
  listing: {},
  ctaButton: {},
  isActive: true,
  lazyLoad: true
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleCardClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleCardClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleButtonClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleButtonClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleFavoriteClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleFavoriteClick'), _class2.prototype)), _class2)) || _class);
exports.default = SingleFamilyMobileMapListing;