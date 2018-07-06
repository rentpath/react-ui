'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactUiCore = require('@rentpath/react-ui-core');

var _RadioGroupFilterCard = require('./RadioGroupFilterCard');

var _RadioGroupFilterCard2 = _interopRequireDefault(_RadioGroupFilterCard);

var _DropdownFilterCardWrapper = require('./DropdownFilterCardWrapper');

var _DropdownFilterCardWrapper2 = _interopRequireDefault(_DropdownFilterCardWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var nodeFuncOrObject = _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]);

var RadioGroupDropdown = (_dec = (0, _reactThemed2.default)(['FilterDropdown']), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(RadioGroupDropdown, _Component);

  function RadioGroupDropdown(props) {
    (0, _classCallCheck3.default)(this, RadioGroupDropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioGroupDropdown.__proto__ || (0, _getPrototypeOf2.default)(RadioGroupDropdown)).call(this, props));

    _this.state = {
      value: null
    };
    return _this;
  }

  (0, _createClass3.default)(RadioGroupDropdown, [{
    key: 'handleValueChange',
    value: function handleValueChange(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'renderAnchorButton',
    value: function renderAnchorButton() {
      var value = this.state.value;
      var _props = this.props,
          fields = _props.fields,
          anchorText = _props.anchorText;

      var _ref = fields.find(function (f) {
        return f.value === value;
      }) || {},
          label = _ref.label,
          anchorLabel = _ref.anchorLabel;

      var text = anchorLabel || label;

      if (anchorText) return (0, _react.cloneElement)(anchorText, { text: text });
      return _react2.default.createElement(
        _reactUiCore.Text,
        null,
        text
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          anchorText = _props2.anchorText,
          fields = _props2.fields,
          theme = _props2.theme,
          className = _props2.className,
          props = (0, _objectWithoutProperties3.default)(_props2, ['anchorText', 'fields', 'theme', 'className']);


      return _react2.default.createElement(
        _reactUiCore.Dropdown,
        {
          className: (0, _classnames2.default)(className, theme.FilterDropdown),
          anchorField: { children: this.renderAnchorButton() }
        },
        _react2.default.createElement(_DropdownFilterCardWrapper2.default, (0, _extends3.default)({}, props, {
          FilterCard: _RadioGroupFilterCard2.default,
          fields: this.standardFields,
          handleValueChange: this.handleValueChange
        }))
      );
    }
  }, {
    key: 'standardFields',
    get: function get() {
      var _this2 = this;

      return this.props.fields.map(function (originalField) {
        var anchorLabel = originalField.anchorLabel,
            field = (0, _objectWithoutProperties3.default)(originalField, ['anchorLabel']);

        return (0, _extends3.default)({}, field, {
          checked: field.value === _this2.state.value
        });
      });
    }
  }]);
  return RadioGroupDropdown;
}(_react.Component), _class3.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  anchorText: _propTypes2.default.node,
  fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: nodeFuncOrObject,
    value: _propTypes2.default.string,
    anchorLabel: nodeFuncOrObject
  })),
  applyButton: _propTypes2.default.object,
  cancelButton: _propTypes2.default.object
}, _class3.defaultProps = {
  theme: {},
  fields: []
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleValueChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleValueChange'), _class2.prototype)), _class2)) || _class);
exports.default = RadioGroupDropdown;