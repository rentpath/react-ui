"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var Tracker =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Tracker, _PureComponent);

  function Tracker(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tracker);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tracker).call(this, props));
    _this.instances = [];
    _this.update = _this.update.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.pageView = _this.pageView.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.register = _this.register.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.unregister = _this.unregister.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Tracker, [{
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
        this._pageView = (0, _objectSpread2.default)({}, props);
        this.update().then(function () {
          _this3.props.pageView(_this3._pageView);

          _this3._pageView = null;
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Array.isArray(this.props.children) ? _react.default.createElement("div", null, this.props.children) : this.props.children || null;
    }
  }]);
  return Tracker;
}(_react.PureComponent);

exports.default = Tracker;
(0, _defineProperty2.default)(Tracker, "propTypes", {
  setData: _propTypes.default.func,
  pageView: _propTypes.default.func,
  children: _propTypes.default.node
});
(0, _defineProperty2.default)(Tracker, "childContextTypes", {
  tracker: _propTypes.default.object
});