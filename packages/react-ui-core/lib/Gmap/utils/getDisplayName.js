'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Component) {
  if (typeof Component === 'string') return Component;
  if (!Component) return undefined;

  return Component.displayName || Component.name || 'Component';
};