"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(Component) {
  var fallbackName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Component';
  if (typeof Component === 'string') return Component;
  if (!Component) return undefined;
  return Component.displayName || Component.name || fallbackName;
};

exports.default = _default;