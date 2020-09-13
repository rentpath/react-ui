import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import once from 'lodash/once';
import get from 'lodash/fp/get';
import isArray from 'lodash/isArray';
import bind from 'lodash/bind';
import includes from 'lodash/fp/includes';
import { setupMarker as _setupMarker, removeMarker } from './utils/markerHelpers';

var GmapCallbackFactory = function GmapCallbackFactory() {
  _classCallCheck(this, GmapCallbackFactory);

  var map = {};
  /* eslint-disable consistent-return */

  this.registerMap = once(function (newMap) {
    map = newMap;
  });

  this.call = function (f, args) {
    // We need to bind non-nested functions, as google uses this.get internally
    if (get(f)(map)) {
      var mapApiFunc = includes('.')(f) ? get(f)(map) : bind(get(f)(map), map);

      if (mapApiFunc && typeof mapApiFunc === 'function') {
        if (isArray(args)) {
          return mapApiFunc.apply(void 0, _toConsumableArray(args));
        }

        return mapApiFunc(args);
      }
    }

    return undefined;
  };

  this.MarkerInteraction = {
    setupMarker: function setupMarker(props) {
      return _setupMarker(map, props);
    },
    removeMarker: removeMarker
  };
};

export var GmapInteraction = new GmapCallbackFactory();