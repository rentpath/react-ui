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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _reactThemed = require('react-themed');

var _reactUiCore = require('@rentpath/react-ui-core');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _Listings = require('../Listings');

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

var DEBOUNCE_WAIT = 550;

var ListingCarousel = (_dec = (0, _reactThemed.themed)(/^ListingCarousel/, { pure: true }), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(ListingCarousel, _PureComponent);

  function ListingCarousel(props) {
    (0, _classCallCheck3.default)(this, ListingCarousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ListingCarousel.__proto__ || (0, _getPrototypeOf2.default)(ListingCarousel)).call(this, props));

    _this.state = { selectedIndex: _this.props.selectedIndex };
    return _this;
  }

  (0, _createClass3.default)(ListingCarousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.listingClickHandler = (0, _debounce2.default)(this.listingClickHandler, DEBOUNCE_WAIT, {
        leading: true,
        trailing: false,
        maxWait: DEBOUNCE_WAIT
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectedIndex !== this.props.selectedIndex) {
        this.updateSelectedIndex(nextProps.selectedIndex);
      }
    }
  }, {
    key: 'updateSelectedIndex',
    value: function updateSelectedIndex(selectedIndex) {
      var _props = this.props,
          onSlide = _props.onSlide,
          listings = _props.listings;

      this.setState({ selectedIndex: selectedIndex });
      if (onSlide) onSlide(listings[selectedIndex], selectedIndex);
    }
  }, {
    key: 'listingClickHandler',
    value: function listingClickHandler(index) {
      if (index !== this.state.selectedIndex) {
        this.updateSelectedIndex(index);
      } else if (this.props.listingProps.onClick) {
        var listings = this.props.listings;

        this.props.listingProps.onClick(index, listings[index]);
      }
    }
  }, {
    key: 'renderListing',
    value: function renderListing(listing, index) {
      var _props2 = this.props,
          listingProps = _props2.listingProps,
          singleFamilyListingProps = _props2.singleFamilyListingProps;

      var ListingComponent = listing.singleFamily ? _Listings.SingleFamilyMobileMapListing : _Listings.MobileMapListing;
      var props = listing.singleFamily ? singleFamilyListingProps : listingProps;
      return _react2.default.createElement(ListingComponent, (0, _extends3.default)({
        index: index,
        listing: listing
      }, props, {
        isActive: index === this.state.selectedIndex,
        onClick: this.listingClickHandler
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          className = _props3.className,
          theme = _props3.theme,
          listings = _props3.listings,
          selectedIndex = _props3.selectedIndex,
          onSlide = _props3.onSlide,
          props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'theme', 'listings', 'selectedIndex', 'onSlide']);


      return _react2.default.createElement(_reactUiCore.Carousel, (0, _extends3.default)({
        className: (0, _classnames2.default)(className, theme.ListingCarousel),
        selectedIndex: this.state.selectedIndex,
        onSlide: this.updateSelectedIndex,
        items: listings.map(function (listing, i) {
          return _this2.renderListing(listing, i);
        })
      }, props));
    }
  }]);
  return ListingCarousel;
}(_react.PureComponent), _class3.propTypes = {
  listings: _propTypes2.default.arrayOf(_propTypes2.default.object),
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  listingProps: _propTypes2.default.object,
  singleFamilyListingProps: _propTypes2.default.object,
  selectedIndex: _propTypes2.default.number,
  onSlide: _propTypes2.default.func
}, _class3.defaultProps = {
  theme: {},
  selectedIndex: 0
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'updateSelectedIndex', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'updateSelectedIndex'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'listingClickHandler', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'listingClickHandler'), _class2.prototype)), _class2)) || _class);
exports.default = ListingCarousel;