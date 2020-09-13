import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';
import { randomId } from '@rentpath/react-ui-utils';
import SubmitButton from './SubmitButton';
import Header from './Header';
import { Form, Field, Name, Message, Email, Phone, RadioGroup, OptInNewsLetter, TermsOfService } from '../Form';
var FIELD_MAPPING = {
  header: Header,
  name: Name,
  message: Message,
  email: Email,
  phone: Phone,
  tos: TermsOfService,
  submit: SubmitButton,
  opt_in_newsletter: OptInNewsLetter,
  terms_of_service: TermsOfService
};
var FIELDS = [{
  name: 'header'
}, {
  name: 'message'
}, {
  name: 'name'
}, {
  name: 'email'
}, {
  name: 'phone'
}, {
  name: 'submit'
}, {
  name: 'opt_in_newsletter'
}, {
  name: 'terms_of_service'
}];
var LeadForm = (_dec = themed(/^(LeadForm|Field)/), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(LeadForm, _Component);

  function LeadForm(props) {
    var _this;

    _classCallCheck(this, LeadForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeadForm).call(this, props));

    _this.generateRandomId();

    return _this;
  }

  _createClass(LeadForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.generateRandomId();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !isEqual(this.props.fields, nextProps.fields);
    }
  }, {
    key: "generateRandomId",
    value: function generateRandomId() {
      this.id = randomId('leadform');
    }
  }, {
    key: "fallbackField",
    value: function fallbackField(type) {
      return type === 'radiogroup' ? RadioGroup : Field;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          fields = _this$props.fields,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["className", "theme", "fields", "children"]);

      return React.createElement(Form, _extends({
        className: classnames(theme.LeadForm, className)
      }, props), this.fields, children);
    }
  }, {
    key: "fields",
    get: function get() {
      var _this2 = this;

      var fields = this.props.fields;
      return fields.map(function (fieldComposition) {
        var field = fieldComposition.field,
            className = fieldComposition.className,
            props = _objectWithoutProperties(fieldComposition, ["field", "className"]);

        var name = props.name;

        var FormField = field || FIELD_MAPPING[name] || _this2.fallbackField(props.type);

        return React.createElement(FormField, _extends({
          "data-tid": "lead-form-".concat(name),
          key: "".concat(_this2.id, "-").concat(name)
        }, props));
      });
    }
  }]);

  return LeadForm;
}(Component), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    field: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
  })),
  children: PropTypes.node
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  fields: FIELDS
}), _temp)) || _class);
export { LeadForm as default };