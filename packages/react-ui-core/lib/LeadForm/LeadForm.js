'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _Form = require('../Form');

var _SubmitButton = require('./SubmitButton');

var _SubmitButton2 = _interopRequireDefault(_SubmitButton);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Fields = require('./Fields');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIELD_MAPPING = {
  header: _Header2.default,
  name: _Fields.Name,
  message: _Fields.Message,
  email: _Fields.Email,
  phone: _Fields.Phone,
  tos: _Fields.TermsOfService,
  submit: _SubmitButton2.default,
  opt_in_newsletter: _Fields.OptInNewsLetter,
  terms_of_service: _Fields.TermsOfService
};

var FIELDS = [{ name: 'header' }, { name: 'message' }, { name: 'name' }, { name: 'email' }, { name: 'phone' }, { name: 'submit' }, { name: 'opt_in_newsletter' }, { name: 'terms_of_service' }];

var LeadForm = (_dec = (0, _reactThemed2.default)(/^LeadForm/), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(LeadForm, _Component);

  function LeadForm(props) {
    (0, _classCallCheck3.default)(this, LeadForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeadForm.__proto__ || (0, _getPrototypeOf2.default)(LeadForm)).call(this, props));

    _this.generateRandomId();
    return _this;
  }

  (0, _createClass3.default)(LeadForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.generateRandomId();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _isEqual2.default)(this.props.fields, nextProps.fields);
    }
  }, {
    key: 'generateRandomId',
    value: function generateRandomId() {
      this.id = (0, _reactUiUtils.randomId)('leadform');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          fields = _props.fields,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'theme', 'fields']);


      return _react2.default.createElement(
        _Form.Form,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.LeadForm, className)
        }, props),
        this.fields
      );
    }
  }, {
    key: 'fields',
    get: function get() {
      var _this2 = this;

      var fields = this.props.fields;


      return fields.map(function (fieldComposition) {
        var field = fieldComposition.field,
            props = (0, _objectWithoutProperties3.default)(fieldComposition, ['field']);

        var name = props.name;
        var FormField = field || FIELD_MAPPING[name] || _Form.Field;

        return _react2.default.createElement(FormField, (0, _extends3.default)({
          'data-tid': 'lead-form-' + name,
          key: _this2.id + '-' + name
        }, props));
      });
    }
  }]);
  return LeadForm;
}(_react.Component), _class2.propTypes = {
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    field: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node])
  }))
}, _class2.defaultProps = {
  theme: {},
  fields: FIELDS
}, _temp)) || _class);
exports.default = LeadForm;