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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _reactUiCore = require('@rentpath/react-ui-core');

var _FilterCard = require('./FilterCard');

var _FilterCard2 = _interopRequireDefault(_FilterCard);

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

var PriceFilterCard = (_dec = (0, _reactThemed2.default)(/^PriceFilterCard/), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(PriceFilterCard, _Component);

  function PriceFilterCard(props) {
    (0, _classCallCheck3.default)(this, PriceFilterCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PriceFilterCard.__proto__ || (0, _getPrototypeOf2.default)(PriceFilterCard)).call(this, props));

    _this.state = {
      value: null
    };
    return _this;
  }

  (0, _createClass3.default)(PriceFilterCard, [{
    key: 'handlePriceSliderChange',
    value: function handlePriceSliderChange(value) {
      this.setState({ value: value });

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'renderPriceSlider',
    value: function renderPriceSlider() {
      var priceSlider = this.props.priceSlider;

      var _parseArgs = (0, _reactUiUtils.parseArgs)(priceSlider, _reactUiCore.RangeSlider),
          _parseArgs2 = (0, _slicedToArray3.default)(_parseArgs, 2),
          Slider = _parseArgs2[0],
          props = _parseArgs2[1];

      return _react2.default.createElement(Slider, (0, _extends3.default)({}, props, {
        onChangeComplete: this.handlePriceSliderChange,
        'data-tid': 'price-filter-card-slider'
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          priceSlider = _props.priceSlider,
          onChange = _props.onChange,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'className', 'priceSlider', 'onChange']);


      return _react2.default.createElement(
        _FilterCard2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.PriceFilterCard, className, !this.state.value && theme['PriceFilterCard-noValue']),
          'data-tid': 'price-filter-card',
          value: this.state.value
        }, props),
        this.renderPriceSlider()
      );
    }
  }]);
  return PriceFilterCard;
}(_react.Component), _class3.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  priceSlider: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]),
  onChange: _propTypes2.default.func
}, _class3.defaultProps = {
  theme: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handlePriceSliderChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handlePriceSliderChange'), _class2.prototype)), _class2)) || _class);
exports.default = PriceFilterCard;