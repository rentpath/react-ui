import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import BounceLoader from './spinners/BounceLoader';
var GmapSpinner = (_dec = themed(['Gmap_Spinner'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GmapSpinner, _PureComponent);

  function GmapSpinner(props) {
    var _this;

    _classCallCheck(this, GmapSpinner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GmapSpinner).call(this, props));
    _this.state = {
      loading: _this.props.loading
    };
    _this.closeTimer = null;
    return _this;
  }

  _createClass(GmapSpinner, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      if (this.props.loading !== nextProps.loading && nextProps.loading) {
        this.close();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearTimeout(this.closeTimer);
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      var closeDelay = this.props.closeDelay; // add timeout so the gray background isn't the only thing we see

      this.closeTimer = window.setTimeout(function () {
        _this2.setState({
          loading: false
        });
      }, closeDelay);
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;

      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          closeDelay = _this$props.closeDelay,
          rest = _objectWithoutProperties(_this$props, ["theme", "className", "closeDelay"]);

      return React.createElement("div", {
        className: classnames(className, theme.Gmap_Spinner)
      }, React.createElement(BounceLoader, _extends({}, rest, {
        loading: loading
      })));
    }
  }]);

  return GmapSpinner;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  loading: PropTypes.bool,
  theme: PropTypes.object,
  className: PropTypes.string,
  closeDelay: PropTypes.number,
  color: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  closeDelay: 0,
  loading: false,
  theme: {},
  color: '#000'
}), _temp)) || _class);
export { GmapSpinner as default };