export default (function (Component) {
  var fallbackName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Component';
  if (typeof Component === 'string') return Component;
  if (!Component) return undefined;
  return Component.displayName || Component.name || fallbackName;
});