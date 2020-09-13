import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classNames from 'classnames';
import serializeForm from 'form-serialize';
var Form = (_dec = themed(['Form'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      var _this$props = _this.props,
          onSubmit = _this$props.onSubmit,
          serialize = _this$props.serialize,
          serializeOptions = _this$props.serializeOptions;
      event.preventDefault();

      if (onSubmit) {
        if (serialize) {
          onSubmit(event, serializeForm(event.target, serializeOptions));
        } else {
          onSubmit(event);
        }
      }
    });

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          serialize = _this$props2.serialize,
          serializeOptions = _this$props2.serializeOptions,
          className = _this$props2.className,
          props = _objectWithoutProperties(_this$props2, ["theme", "serialize", "serializeOptions", "className"]);

      return React.createElement("form", _extends({
        "data-tid": "form"
      }, props, {
        onSubmit: this.onSubmit,
        className: classNames(className, theme.Form)
      }));
    }
  }]);

  return Form;
}(Component), _defineProperty(_class2, "propTypes", {
  /**
   * className to apply
   */
  className: PropTypes.string,

  /**
   * The theme to apply.
   */
  theme: PropTypes.object,

  /**
   * The form action.
   */
  action: PropTypes.string,

  /**
   * The form method.
   */
  method: PropTypes.string,

  /**
   * Enables browser validation when false.
   */
  noValidate: PropTypes.bool,

  /**
   * Submit callback.
   */
  onSubmit: PropTypes.func,

  /**
   * Serializes form data when true.
   */
  serialize: PropTypes.bool,

  /**
   * Serialize options when serialize is on
   */
  serializeOptions: PropTypes.object
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  action: '#',
  method: 'POST',
  noValidate: true,
  serializeOptions: {
    hash: true
  }
}), _temp)) || _class);
export { Form as default };