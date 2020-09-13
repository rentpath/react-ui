import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import classnames from 'classnames';
import omit from 'lodash/omit';
import isEqual from 'lodash/isEqual';
import themed from '@rentpath/react-themed';
var RangeSlider = (_dec = themed('*', {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RangeSlider, _PureComponent);

  function RangeSlider(props) {
    var _this;

    _classCallCheck(this, RangeSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeSlider).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      value: props.value
    };

    _this.setSliderTheme(props.theme);

    return _this;
  }

  _createClass(RangeSlider, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!isEqual(this.props.value, nextProps.value)) {
        this.setState({
          value: nextProps.value
        });
      }

      if (this.props.theme !== nextProps.theme) {
        this.setSliderTheme(nextProps.theme);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      if (this.props.onChange) this.props.onChange(value);
      this.setState({
        value: value
      });
    }
  }, {
    key: "setSliderTheme",
    value: function setSliderTheme(theme) {
      // NOTE: this ensures react-input-range plays nicely with theme object
      this.sliderTheme = omit(theme, '_getCss', '_insertCss', '_getContent');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          onChange = _this$props.onChange,
          formatHeader = _this$props.formatHeader,
          variant = _this$props.variant,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "onChange", "formatHeader", "variant"]);

      return React.createElement("div", {
        className: classnames(theme.RangeSlider, className, variant && theme["RangeSlider-".concat(variant)])
      }, formatHeader && formatHeader(this.state.value), React.createElement(InputRange, _extends({}, props, {
        onChange: this.onChange,
        value: this.state.value,
        classNames: this.sliderTheme
      })));
    }
  }]);

  return RangeSlider;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  formatHeader: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  variant: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  value: 0
}), _temp)) || _class);
export { RangeSlider as default };