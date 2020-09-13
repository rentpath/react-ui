import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import autobind from 'autobind-decorator';
import Field from './Field';
var LabelHidingField = (_dec = themed(/^LabelHidingField/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(LabelHidingField, _Component);

  function LabelHidingField(props) {
    var _this;

    _classCallCheck(this, LabelHidingField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LabelHidingField).call(this, props));
    _this.state = {
      labelVisible: !props.defaultValue && !props.value
    };
    return _this;
  }

  _createClass(LabelHidingField, [{
    key: "onChange",
    value: function onChange(event) {
      if (event.target.value) {
        if (this.state.labelVisible) {
          this.setState({
            labelVisible: false
          });
        }
      } else {
        this.setState({
          labelVisible: true
        });
      }

      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          label = _this$props.label,
          onChange = _this$props.onChange,
          NodeType = _this$props.nodeType,
          props = _objectWithoutProperties(_this$props, ["theme", "label", "onChange", "nodeType"]);

      return React.createElement(NodeType, _extends({
        className: theme.LabelHidingField,
        onChange: this.onChange,
        label: this.fieldLabel
      }, props));
    }
  }, {
    key: "fieldLabel",
    get: function get() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          theme = _this$props2.theme;

      if (this.state.labelVisible) {
        return {
          text: label,
          className: theme.LabelHidingField_Label
        };
      }

      return null;
    }
  }]);

  return LabelHidingField;
}(Component), _defineProperty(_class3, "propTypes", {
  theme: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  nodeType: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object])
}), _defineProperty(_class3, "defaultProps", {
  theme: {},
  nodeType: Field
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onChange", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "onChange"), _class2.prototype)), _class2)) || _class);
export { LabelHidingField as default };