import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import { randomId } from '@rentpath/react-ui-utils';
var Highlighter = (_dec = themed(/^Highlighter/), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Highlighter, _PureComponent);

  function Highlighter() {
    _classCallCheck(this, Highlighter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Highlighter).apply(this, arguments));
  }

  _createClass(Highlighter, [{
    key: "renderHighlightedText",
    value: function renderHighlightedText() {
      var _this = this;

      var _this$props = this.props,
          pattern = _this$props.pattern,
          children = _this$props.children;
      if (!pattern) return children;
      var highlightedIndex = 0;
      return children.split(this.pattern).map(function (string) {
        if (pattern.toLowerCase() === string.toLowerCase()) {
          var segment = _this.renderHighlightedSegment(string, highlightedIndex);

          highlightedIndex += 1;
          return segment;
        }

        return string;
      });
    }
  }, {
    key: "renderHighlightedSegment",
    value: function renderHighlightedSegment(string, index) {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          indexHighlighted = _this$props2.indexHighlighted,
          className = _this$props2.className;

      if (isNaN(indexHighlighted) || index === indexHighlighted) {
        return React.createElement("span", {
          "data-tid": "highlighter-match-".concat(index),
          className: classnames(theme['Highlighter-Match'], className),
          key: randomId()
        }, string);
      }

      return string;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          className = _this$props3.className,
          indexHighlighted = _this$props3.indexHighlighted,
          pattern = _this$props3.pattern,
          ignoreCase = _this$props3.ignoreCase,
          renderer = _this$props3.renderer,
          props = _objectWithoutProperties(_this$props3, ["theme", "className", "indexHighlighted", "pattern", "ignoreCase", "renderer"]);

      return renderer(React.createElement("div", _extends({
        className: classnames(theme.Highlighter, className)
      }, props), this.renderHighlightedText()));
    }
  }, {
    key: "pattern",
    get: function get() {
      // make characters literal instead of interpretting symbols as valid regex instructions
      // AKA sanitize input
      var pattern = this.props.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return RegExp("(".concat(pattern, ")"), this.props.ignoreCase ? 'i' : '');
    }
  }]);

  return Highlighter;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  className: PropTypes.string,
  pattern: PropTypes.string.isRequired,
  ignoreCase: PropTypes.bool,
  children: PropTypes.string.isRequired,
  theme: PropTypes.object,
  indexHighlighted: PropTypes.number,
  renderer: PropTypes.func
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  renderer: function renderer(node) {
    return node;
  }
}), _temp)) || _class);
export { Highlighter as default };