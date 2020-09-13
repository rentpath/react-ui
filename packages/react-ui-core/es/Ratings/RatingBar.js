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
var RatingBar = (_dec = themed(/^(RatingBar|Label)/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RatingBar, _PureComponent);

  function RatingBar() {
    _classCallCheck(this, RatingBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(RatingBar).apply(this, arguments));
  }

  _createClass(RatingBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          label = _this$props.label,
          className = _this$props.className,
          score = _this$props.score,
          maxScore = _this$props.maxScore,
          props = _objectWithoutProperties(_this$props, ["theme", "label", "className", "score", "maxScore"]);

      return React.createElement("div", _extends({
        className: classnames(theme.RatingBar, className)
      }, props), this.ratingItems, label && React.createElement("div", {
        className: theme.Label
      }, label));
    }
  }, {
    key: "ratingItems",
    get: function get() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          score = _this$props2.score,
          maxScore = _this$props2.maxScore;
      var calcScore = score / maxScore;
      var scorePercent = (calcScore > 1 ? 1 : calcScore) * 100;
      return React.createElement("div", {
        className: theme.RatingBar_Background
      }, !!scorePercent && React.createElement("div", {
        className: theme.RatingBar_Icons,
        style: {
          width: "".concat(scorePercent, "%")
        }
      }));
    }
  }]);

  return RatingBar;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  maxScore: PropTypes.number,
  score: PropTypes.number,
  label: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  score: 0,
  maxScore: 5
}), _temp)) || _class);
export { RatingBar as default };