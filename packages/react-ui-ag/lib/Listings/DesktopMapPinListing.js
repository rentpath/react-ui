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

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _reactUiCore = require('@rentpath/react-ui-core');

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

var DesktopMapPinListing = (_dec = (0, _reactThemed2.default)(/^DesktopMapPinListing/, { pure: true }), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(DesktopMapPinListing, _PureComponent);

  function DesktopMapPinListing() {
    (0, _classCallCheck3.default)(this, DesktopMapPinListing);
    return (0, _possibleConstructorReturn3.default)(this, (DesktopMapPinListing.__proto__ || (0, _getPrototypeOf2.default)(DesktopMapPinListing)).apply(this, arguments));
  }

  (0, _createClass3.default)(DesktopMapPinListing, [{
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

      return function (event) {
        if (onClick) onClick(_this2.props.listing);
        if (event && event.stopPropagation) event.stopPropagation();
      };
    }
  }, {
    key: 'handleFavoriteClick',
    value: function handleFavoriteClick(value, event) {
      var onClick = this.props.favoriteButton.onClick;


      if (onClick) onClick(this.props.listing, value);
      if (event && event.stopPropagation) event.stopPropagation();
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
      var _props2 = this.props,
          theme = _props2.theme,
          listing = _props2.listing;
      var className = props.className,
          onClick = props.onClick,
          valueLocation = props.valueLocation,
          children = props.children,
          rest = (0, _objectWithoutProperties3.default)(props, ['className', 'onClick', 'valueLocation', 'children']);


      var buttonText = (0, _get2.default)(listing, valueLocation, children);
      var buttonProps = (0, _extends3.default)({}, rest);

      if (!buttonText) return null;

      return _react2.default.createElement(
        _reactUiCore.Button,
        (0, _extends3.default)({}, buttonProps, {
          className: (0, _classnames2.default)(theme.DesktopMapPinListing_CtaButton, className),
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
      var _props3 = this.props,
          theme = _props3.theme,
          favoriteButton = _props3.favoriteButton,
          listing = _props3.listing;
      var className = favoriteButton.className;

      return _react2.default.createElement(_reactUiCore.ToggleButton, (0, _extends3.default)({}, favoriteButton, {
        value: listing.isFavorited,
        className: (0, _classnames2.default)(theme.DesktopMapPinListing_FavoriteButton, className),
        onClick: this.handleFavoriteClick
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          theme = _props4.theme,
          listing = _props4.listing,
          onClick = _props4.onClick,
          className = _props4.className,
          photo = _props4.photo,
          ctaButtons = _props4.ctaButtons,
          favoriteButton = _props4.favoriteButton,
          propertyName = _props4.propertyName,
          props = (0, _objectWithoutProperties3.default)(_props4, ['theme', 'listing', 'onClick', 'className', 'photo', 'ctaButtons', 'favoriteButton', 'propertyName']);


      return _react2.default.createElement(
        _reactUiCore.ListingCell,
        (0, _extends3.default)({
          listing: listing,
          onClick: this.handleCardClick,
          className: (0, _classnames2.default)(className, theme.DesktopMapPinListing)
        }, props),
        _react2.default.createElement(_reactUiCore.ListingComponents.Photo, photo),
        _react2.default.createElement(
          'div',
          { className: theme.DesktopMapPinListing_Details },
          _react2.default.createElement(
            'div',
            { className: theme.DesktopMapPinListing_Top },
            _react2.default.createElement(_reactUiCore.ListingComponents.Price, null),
            this.renderFavoriteButton(),
            _react2.default.createElement(_reactUiCore.ListingComponents.PropertyName, propertyName)
          ),
          _react2.default.createElement(
            'div',
            { className: theme.DesktopMapPinListing_Location },
            _react2.default.createElement(_reactUiCore.ListingComponents.Address, null),
            _react2.default.createElement(_reactUiCore.ListingComponents.Neighborhood, null)
          ),
          _react2.default.createElement(
            'div',
            { className: theme.DesktopMapPinListing_CTAs },
            this.renderCtaButtons()
          )
        )
      );
    }
  }]);
  return DesktopMapPinListing;
}(_react.PureComponent), _class3.propTypes = {
  index: _propTypes2.default.number,
  listing: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  photo: _propTypes2.default.object,
  propertyName: _propTypes2.default.object,
  ctaButtons: _propTypes2.default.arrayOf(buttonPropTypes),
  favoriteButton: buttonPropTypes
}, _class3.defaultProps = {
  theme: {},
  listing: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleCardClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleCardClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleButtonClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleButtonClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleFavoriteClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleFavoriteClick'), _class2.prototype)), _class2)) || _class);
exports.default = DesktopMapPinListing;