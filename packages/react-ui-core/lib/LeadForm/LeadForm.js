"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _SubmitButton = _interopRequireDefault(require("./SubmitButton"));

var _Header = _interopRequireDefault(require("./Header"));

var _Form = require("../Form");

var _dec, _class, _class2, _temp;

var FIELD_MAPPING = {
  header: _Header.default,
  name: _Form.Name,
  message: _Form.Message,
  email: _Form.Email,
  phone: _Form.Phone,
  tos: _Form.TermsOfService,
  submit: _SubmitButton.default,
  opt_in_newsletter: _Form.OptInNewsLetter,
  terms_of_service: _Form.TermsOfService
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
var LeadForm = (_dec = (0, _reactThemed.default)(/^(LeadForm|Field)/), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LeadForm, _Component);

  function LeadForm(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LeadForm);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LeadForm).call(this, props));

    _this.generateRandomId();

    return _this;
  }

  (0, _createClass2.default)(LeadForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.generateRandomId();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _isEqual.default)(this.props.fields, nextProps.fields);
    }
  }, {
    key: "generateRandomId",
    value: function generateRandomId() {
      this.id = (0, _reactUiUtils.randomId)('leadform');
    }
  }, {
    key: "fallbackField",
    value: function fallbackField(type) {
      return type === 'radiogroup' ? _Form.RadioGroup : _Form.Field;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          fields = _this$props.fields,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "theme", "fields", "children"]);
      return _react.default.createElement(_Form.Form, (0, _extends2.default)({
        className: (0, _classnames.default)(theme.LeadForm, className)
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
            props = (0, _objectWithoutProperties2.default)(fieldComposition, ["field", "className"]);
        var name = props.name;

        var FormField = field || FIELD_MAPPING[name] || _this2.fallbackField(props.type);

        return _react.default.createElement(FormField, (0, _extends2.default)({
          "data-tid": "lead-form-".concat(name),
          key: "".concat(_this2.id, "-").concat(name)
        }, props));
      });
    }
  }]);
  return LeadForm;
}(_react.Component), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  fields: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    field: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node])
  })),
  children: _propTypes.default.node
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  fields: FIELDS
}), _temp)) || _class);
exports.default = LeadForm;