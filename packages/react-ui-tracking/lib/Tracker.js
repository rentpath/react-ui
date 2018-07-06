'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tracker = function (_PureComponent) {
  _inherits(Tracker, _PureComponent);

  function Tracker(props) {
    _classCallCheck(this, Tracker);

    var _this = _possibleConstructorReturn(this, (Tracker.__proto__ || Object.getPrototypeOf(Tracker)).call(this, props));

    _this.instances = [];
    _this.update = _this.update.bind(_this);
    _this.pageView = _this.pageView.bind(_this);
    _this.register = _this.register.bind(_this);
    _this.unregister = _this.unregister.bind(_this);
    return _this;
  }

  _createClass(Tracker, [{
    key: 'getChildContext',
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
    key: 'register',
    value: function register(instance) {
      this.instances.push(instance);
    }
  }, {
    key: 'unregister',
    value: function unregister(instance) {
      var index = this.instances.indexOf(instance);
      this.instances.splice(index, 1);
    }
  }, {
    key: 'instanceProps',
    value: function instanceProps() {
      return this.instances.reduce(function (props, ref) {
        return Object.assign(props, ref.props);
      }, {});
    }
  }, {
    key: 'update',
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
    key: 'pageView',
    value: function pageView(props) {
      var _this3 = this;

      if (!this.props.pageView) {
        return;
      }
      if (this._pageView) {
        Object.assign(this._pageView, props);
      } else {
        this._pageView = _extends({}, props);
        this.update().then(function () {
          _this3.props.pageView(_this3._pageView);
          _this3._pageView = null;
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return Array.isArray(this.props.children) ? _react2.default.createElement(
        'div',
        null,
        this.props.children
      ) : this.props.children || null;
    }
  }]);

  return Tracker;
}(_react.PureComponent);

Tracker.propTypes = {
  setData: _propTypes2.default.func,
  pageView: _propTypes2.default.func,
  children: _propTypes2.default.node
};
Tracker.childContextTypes = {
  tracker: _propTypes2.default.object
};
exports.default = Tracker;