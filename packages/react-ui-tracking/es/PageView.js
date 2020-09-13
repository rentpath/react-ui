import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

var PageView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PageView, _PureComponent);

  function PageView(props, context) {
    var _this;

    _classCallCheck(this, PageView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageView).call(this, props, context));
    _this.tracker = context.tracker || {
      pageView: function pageView() {
        return null;
      }
    };
    return _this;
  }

  _createClass(PageView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tracker.pageView(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.tracker.pageView(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return PageView;
}(PureComponent);

_defineProperty(PageView, "contextTypes", {
  tracker: PropTypes.shape({
    pageView: PropTypes.func.isRequired
  })
});

export { PageView as default };