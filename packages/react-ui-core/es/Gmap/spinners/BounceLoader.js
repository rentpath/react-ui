import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';

var defaultAnimation = function defaultAnimation(i) {
  return "BOUNCELOADER 2.1s ".concat(i === 1 ? '1s' : '0s', " infinite ease-in-out");
};

var Loader =
/*#__PURE__*/
function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loader).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: "style",
    value: function style(scale) {
      var _this$props = this.props,
          size = _this$props.size,
          color = _this$props.color,
          sizeUnit = _this$props.sizeUnit,
          animation = _this$props.animation;
      return {
        position: 'absolute',
        height: "".concat(size).concat(sizeUnit),
        width: "".concat(size).concat(sizeUnit),
        backgroundColor: "".concat(color),
        borderRadius: '100%',
        opacity: 0.6,
        top: 0,
        left: 0,
        animationFillMode: 'both',
        animation: animation(scale)
      };
    }
  }, {
    key: "wrapperStyles",
    value: function wrapperStyles() {
      var _this$props2 = this.props,
          size = _this$props2.size,
          sizeUnit = _this$props2.sizeUnit;
      return {
        position: 'relative',
        width: "".concat(size).concat(sizeUnit),
        height: "".concat(size).concat(sizeUnit)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          loading = _this$props3.loading,
          className = _this$props3.className;
      return loading ? React.createElement("div", {
        className: className
      }, React.createElement("div", {
        style: this.style(0)
      }), React.createElement("div", {
        style: this.style(1)
      }), React.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "\n            @keyframes BOUNCELOADER {\n              0% {\n                transform: scale(0);\n                -webkit-transform: scale(0);\n              }\n              50% {\n                transform: scale(1);\n                -webkit-transform: scale(1);\n              }\n              100% {\n                transform: scale(0);\n                -webkit-transform: scale(0);\n              }\n            }\n          "
        }
      })) : null;
    }
  }]);

  return Loader;
}(Component);

_defineProperty(Loader, "propTypes", {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  className: PropTypes.string,
  animation: PropTypes.func
});

_defineProperty(Loader, "defaultProps", {
  loading: true,
  color: '#000000',
  size: 60,
  sizeUnit: 'px',
  className: '',
  animation: defaultAnimation
});

export default Loader;