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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

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

var ListingCell = (_dec = (0, _reactThemed2.default)(/^ListingCell/, { pure: true }), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(ListingCell, _Component);

  function ListingCell() {
    (0, _classCallCheck3.default)(this, ListingCell);
    return (0, _possibleConstructorReturn3.default)(this, (ListingCell.__proto__ || (0, _getPrototypeOf2.default)(ListingCell)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListingCell, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return (0, _pick2.default)(this.props.listing, ['bedrooms', 'bathrooms', 'name', 'location', 'price', 'rating', 'unitLevelAvailability', 'availability', 'address', 'neighborhood', 'photo', 'photos']);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _isEqual2.default)(nextProps.listing, this.props.listing) || this.props.isActive !== nextProps.isActive || this.props.className !== nextProps.className;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var _props = this.props,
          listing = _props.listing,
          onClick = _props.onClick,
          isActive = _props.isActive;

      var nonPropagationTargets = ['BUTTON', 'ANCHOR', 'USE', 'SVG'];

      var target = event.target,
          currentTarget = event.currentTarget;

      var allTargets = [(target.tagName || '').toUpperCase(), (currentTarget.tagName || '').toUpperCase()];
      var anyMatches = (0, _intersection2.default)(nonPropagationTargets, allTargets) || [];

      if (!isActive || !event || !anyMatches.length) {
        if (onClick) onClick(listing);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          theme = _props2.theme,
          className = _props2.className,
          children = _props2.children,
          listing = _props2.listing,
          onClick = _props2.onClick,
          isActive = _props2.isActive,
          props = (0, _objectWithoutProperties3.default)(_props2, ['theme', 'className', 'children', 'listing', 'onClick', 'isActive']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.ListingCell, className),
          'data-tid': 'listing-cell',
          role: 'presentation',
          onClick: this.handleClick
        }, props),
        children
      );
    }
  }]);
  return ListingCell;
}(_react.Component), _class3.propTypes = {
  listing: _propTypes2.default.object,
  children: _propTypes2.default.node,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  isActive: _propTypes2.default.bool
}, _class3.childContextTypes = {
  bedrooms: _propTypes2.default.node,
  bathrooms: _propTypes2.default.node,
  name: _propTypes2.default.node,
  location: _propTypes2.default.object,
  price: _propTypes2.default.node,
  rating: _propTypes2.default.object,
  unitLevelAvailability: _propTypes2.default.node,
  address: _propTypes2.default.node,
  neighborhood: _propTypes2.default.node,
  availability: _propTypes2.default.node,
  photo: _propTypes2.default.shape({
    url: _propTypes2.default.string
  }),
  photos: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    caption: _propTypes2.default.string,
    path: _propTypes2.default.string
  }))
}, _class3.defaultProps = {
  isActive: true,
  theme: {},
  listing: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleClick'), _class2.prototype)), _class2)) || _class);
exports.default = ListingCell;