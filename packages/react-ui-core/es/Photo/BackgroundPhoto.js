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
import classnames from 'classnames';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import join from 'lodash/fp/join';
import flatten from 'lodash/flatten';
import themed from '@rentpath/react-themed';
var backgroundUrl = pipe(function () {
  for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
    urls[_key] = arguments[_key];
  }

  return urls.concat();
}, flatten, filter(Boolean), // skip if undefined
map(function (url) {
  return "url(".concat(url, ")");
}), join(', '));
var BackgroundPhoto = (_dec = themed(['BackgroundPhoto'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BackgroundPhoto, _PureComponent);

  function BackgroundPhoto() {
    _classCallCheck(this, BackgroundPhoto);

    return _possibleConstructorReturn(this, _getPrototypeOf(BackgroundPhoto).apply(this, arguments));
  }

  _createClass(BackgroundPhoto, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          url = _this$props.url,
          fallbackUrl = _this$props.fallbackUrl,
          alt = _this$props.alt,
          rest = _objectWithoutProperties(_this$props, ["theme", "className", "url", "fallbackUrl", "alt"]);

      return React.createElement("div", _extends({
        style: {
          backgroundImage: backgroundUrl(url, fallbackUrl)
        },
        className: classnames(className, theme.BackgroundPhoto),
        "data-tid": "bg-photo"
      }, rest));
    }
  }]);

  return BackgroundPhoto;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  url: PropTypes.string,
  fallbackUrl: PropTypes.string,
  theme: PropTypes.object,
  className: PropTypes.string,
  alt: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { BackgroundPhoto as default };