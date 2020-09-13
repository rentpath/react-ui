"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLazyload = _interopRequireDefault(require("react-lazyload"));

var SmoothScrollGalleryWrapper = function SmoothScrollGalleryWrapper(_ref) {
  var lazyLoadProps = _ref.lazyLoadProps,
      children = _ref.children;
  return lazyLoadProps ? _react.default.createElement(_reactLazyload.default, lazyLoadProps, children) : children;
};

SmoothScrollGalleryWrapper.propTypes = {
  children: _propTypes.default.node,
  lazyLoadProps: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object])
};
SmoothScrollGalleryWrapper.defaultProps = {
  lazyLoadProps: false
};
var _default = SmoothScrollGalleryWrapper;
exports.default = _default;