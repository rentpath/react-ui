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

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _ModalCloseButton = require('./ModalCloseButton');

var _ModalCloseButton2 = _interopRequireDefault(_ModalCloseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalBody = (_dec = (0, _reactThemed2.default)(/^ModalBody/, {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(ModalBody, _PureComponent);

  function ModalBody() {
    (0, _classCallCheck3.default)(this, ModalBody);
    return (0, _possibleConstructorReturn3.default)(this, (ModalBody.__proto__ || (0, _getPrototypeOf2.default)(ModalBody)).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalBody, [{
    key: 'renderCloseButton',
    value: function renderCloseButton(CloseButton) {
      if (CloseButton) {
        var _parseArgs = (0, _reactUiUtils.parseArgs)(CloseButton, _ModalCloseButton2.default),
            _parseArgs2 = (0, _slicedToArray3.default)(_parseArgs, 2),
            Close = _parseArgs2[0],
            props = _parseArgs2[1];

        return _react2.default.createElement(Close, (0, _extends3.default)({}, props, { onClick: this.props.onClose }));
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          CloseButton = _props.CloseButton,
          onClose = _props.onClose,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'theme', 'CloseButton', 'onClose', 'children']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.ModalBody, className)
        }, props),
        this.renderCloseButton(CloseButton),
        _react2.default.createElement(
          'div',
          { className: theme.ModalBody_InnerBody },
          children
        )
      );
    }
  }]);
  return ModalBody;
}(_react.PureComponent), _class2.propTypes = {
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  CloseButton: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node, _propTypes2.default.object]),
  onClose: _propTypes2.default.func,
  children: _propTypes2.default.any
}, _class2.defaultProps = {
  theme: {}
}, _temp)) || _class);
exports.default = ModalBody;