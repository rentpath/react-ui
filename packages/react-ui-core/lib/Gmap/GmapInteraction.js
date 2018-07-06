'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GmapInteraction = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _once = require('lodash/once');

var _once2 = _interopRequireDefault(_once);

var _get = require('lodash/fp/get');

var _get2 = _interopRequireDefault(_get);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _bind = require('lodash/bind');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/fp/includes');

var _includes2 = _interopRequireDefault(_includes);

var _markerHelpers = require('./utils/markerHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GmapCallbackFactory = function GmapCallbackFactory() {
  (0, _classCallCheck3.default)(this, GmapCallbackFactory);

  var map = {};
  /* eslint-disable consistent-return */
  this.registerMap = (0, _once2.default)(function (newMap) {
    map = newMap;
  });

  this.call = function (f, args) {
    // We need to bind non-nested functions, as google uses this.get internally
    if ((0, _get2.default)(f)(map)) {
      var mapApiFunc = (0, _includes2.default)('.')(f) ? (0, _get2.default)(f)(map) : (0, _bind2.default)((0, _get2.default)(f)(map), map);

      if (mapApiFunc && typeof mapApiFunc === 'function') {
        if ((0, _isArray2.default)(args)) {
          return mapApiFunc.apply(undefined, (0, _toConsumableArray3.default)(args));
        }
        return mapApiFunc(args);
      }
    }

    return undefined;
  };

  this.MarkerInteraction = {
    setupMarker: function setupMarker(props) {
      return (0, _markerHelpers.setupMarker)(map, props);
    },
    removeMarker: _markerHelpers.removeMarker
  };
};

var GmapInteraction = exports.GmapInteraction = new GmapCallbackFactory();