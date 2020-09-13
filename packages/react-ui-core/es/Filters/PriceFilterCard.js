import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import themed from '@rentpath/react-themed';
import autobind from 'autobind-decorator';
import { parseArgs } from '@rentpath/react-ui-utils';
import { RangeSlider } from '../Form';
import FilterCard from './FilterCard';
var PriceFilterCard = (_dec = themed(/^PriceFilterCard/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(PriceFilterCard, _Component);

  function PriceFilterCard(props) {
    var _this;

    _classCallCheck(this, PriceFilterCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PriceFilterCard).call(this, props));
    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(PriceFilterCard, [{
    key: "handlePriceSliderChange",
    value: function handlePriceSliderChange(value) {
      this.setState({
        value: value
      });

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: "renderPriceSlider",
    value: function renderPriceSlider() {
      var priceSlider = this.props.priceSlider;

      var _parseArgs = parseArgs(priceSlider, RangeSlider),
          _parseArgs2 = _slicedToArray(_parseArgs, 2),
          Slider = _parseArgs2[0],
          props = _parseArgs2[1];

      return React.createElement(Slider, _extends({}, props, {
        onChangeComplete: this.handlePriceSliderChange,
        "data-tid": "price-filter-card-slider"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          priceSlider = _this$props.priceSlider,
          onChange = _this$props.onChange,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "priceSlider", "onChange"]);

      return React.createElement(FilterCard, _extends({
        className: classname(theme.PriceFilterCard, className, !this.state.value && theme['PriceFilterCard-noValue']),
        "data-tid": "price-filter-card",
        value: this.state.value
      }, props), this.renderPriceSlider());
    }
  }]);

  return PriceFilterCard;
}(Component), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  theme: PropTypes.object,
  priceSlider: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
  onChange: PropTypes.func
}), _defineProperty(_class3, "defaultProps", {
  theme: {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handlePriceSliderChange", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handlePriceSliderChange"), _class2.prototype)), _class2)) || _class);
export { PriceFilterCard as default };