"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GmapInteraction = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _once = _interopRequireDefault(require("lodash/once"));

var _get = _interopRequireDefault(require("lodash/fp/get"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _bind = _interopRequireDefault(require("lodash/bind"));

var _includes = _interopRequireDefault(require("lodash/fp/includes"));

var _markerHelpers = require("./utils/markerHelpers");

var GmapCallbackFactory = function GmapCallbackFactory() {
  (0, _classCallCheck2.default)(this, GmapCallbackFactory);
  var map = {};
  /* eslint-disable consistent-return */

  this.registerMap = (0, _once.default)(function (newMap) {
    map = newMap;
  });

  this.call = function (f, args) {
    // We need to bind non-nested functions, as google uses this.get internally
    if ((0, _get.default)(f)(map)) {
      var mapApiFunc = (0, _includes.default)('.')(f) ? (0, _get.default)(f)(map) : (0, _bind.default)((0, _get.default)(f)(map), map);

      if (mapApiFunc && typeof mapApiFunc === 'function') {
        if ((0, _isArray.default)(args)) {
          return mapApiFunc.apply(void 0, (0, _toConsumableArray2.default)(args));
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

var GmapInteraction = new GmapCallbackFactory();
exports.GmapInteraction = GmapInteraction;