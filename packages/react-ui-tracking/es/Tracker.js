import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

var Tracker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tracker, _PureComponent);

  function Tracker(props) {
    var _this;

    _classCallCheck(this, Tracker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tracker).call(this, props));
    _this.instances = [];
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.pageView = _this.pageView.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.register = _this.register.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.unregister = _this.unregister.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Tracker, [{
    key: "getChildContext",
    value: function getChildContext() {
      var update = this.update,
          pageView = this.pageView,
          register = this.register,
          unregister = this.unregister;
      return {
        tracker: {
          update: update,
          pageView: pageView,
          register: register,
          unregister: unregister
        }
      };
    }
  }, {
    key: "register",
    value: function register(instance) {
      this.instances.push(instance);
    }
  }, {
    key: "unregister",
    value: function unregister(instance) {
      var index = this.instances.indexOf(instance);
      this.instances.splice(index, 1);
    }
  }, {
    key: "instanceProps",
    value: function instanceProps() {
      return this.instances.reduce(function (props, ref) {
        return Object.assign(props, ref.props);
      }, {});
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      if (!this._update) {
        this._update = Promise.resolve().then(function () {
          _this2._update = null;

          if (_this2.props.setData) {
            _this2.props.setData(_this2.instanceProps());
          }
        });
      }

      return this._update;
    }
  }, {
    key: "pageView",
    value: function pageView(props) {
      var _this3 = this;

      if (!this.props.pageView) {
        return;
      }

      if (this._pageView) {
        Object.assign(this._pageView, props);
      } else {
        this._pageView = _objectSpread({}, props);
        this.update().then(function () {
          _this3.props.pageView(_this3._pageView);

          _this3._pageView = null;
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Array.isArray(this.props.children) ? React.createElement("div", null, this.props.children) : this.props.children || null;
    }
  }]);

  return Tracker;
}(PureComponent);

_defineProperty(Tracker, "propTypes", {
  setData: PropTypes.func,
  pageView: PropTypes.func,
  children: PropTypes.node
});

_defineProperty(Tracker, "childContextTypes", {
  tracker: PropTypes.object
});

export { Tracker as default };