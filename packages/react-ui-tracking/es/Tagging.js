import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

var Tagging =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tagging, _PureComponent);

  function Tagging(props, context) {
    var _this;

    _classCallCheck(this, Tagging);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tagging).call(this, props, context));
    _this.tracker = context.tracker || {
      register: function register() {
        return null;
      },
      unregister: function unregister() {
        return null;
      },
      update: function update() {
        return null;
      }
    };
    return _this;
  }

  _createClass(Tagging, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tracker.register(this);
      this.tracker.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.tracker.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tracker.unregister(this);
      this.tracker.update();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Tagging;
}(PureComponent);

_defineProperty(Tagging, "contextTypes", {
  tracker: PropTypes.shape({
    register: PropTypes.func.isRequired,
    unregister: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
  })
});

export { Tagging as default };