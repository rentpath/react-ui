'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _reactUiCore = require('@rentpath/react-ui-core');

var _Buttons = require('../Buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonType = _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.object]);

var FilterCard = (_dec = (0, _reactThemed2.default)(/^FilterCard/, {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(FilterCard, _PureComponent);

  function FilterCard() {
    (0, _classCallCheck3.default)(this, FilterCard);
    return (0, _possibleConstructorReturn3.default)(this, (FilterCard.__proto__ || (0, _getPrototypeOf2.default)(FilterCard)).apply(this, arguments));
  }

  (0, _createClass3.default)(FilterCard, [{
    key: 'renderButton',
    value: function renderButton(button, DefaultButton) {
      var _parseArgs = (0, _reactUiUtils.parseArgs)(this.props[button], DefaultButton),
          _parseArgs2 = (0, _slicedToArray3.default)(_parseArgs, 2),
          FilterButton = _parseArgs2[0],
          props = _parseArgs2[1];

      return _react2.default.createElement(FilterButton, (0, _extends3.default)({}, props, { value: this.props.value }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children,
          title = _props.title,
          description = _props.description,
          applyButton = _props.applyButton,
          cancelButton = _props.cancelButton,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'theme', 'children', 'title', 'description', 'applyButton', 'cancelButton']);


      return _react2.default.createElement(
        _reactUiCore.Card,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.FilterCard, className)
        }, props),
        (title || description) && _react2.default.createElement(
          'div',
          { className: theme.FilterCard_Header },
          title && _react2.default.createElement(
            _reactUiCore.Title,
            { className: theme.FilterCard_Title },
            title
          ),
          description && _react2.default.createElement(
            _reactUiCore.Text,
            { className: theme.FilterCard_Description },
            description
          )
        ),
        _react2.default.createElement(
          'div',
          { className: theme.FilterCard_Body },
          children,
          (applyButton || cancelButton) && _react2.default.createElement(
            'div',
            { className: theme.FilterCard_Buttons },
            applyButton && this.renderButton('applyButton', _Buttons.ApplyButton),
            cancelButton && this.renderButton('cancelButton', _Buttons.CancelButton)
          )
        )
      );
    }
  }]);
  return FilterCard;
}(_react.PureComponent), _class2.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  children: _propTypes2.default.node,
  title: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  description: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  applyButton: buttonType,
  cancelButton: buttonType,
  value: _propTypes2.default.any
}, _class2.defaultProps = {
  theme: {}
}, _temp)) || _class);
exports.default = FilterCard;