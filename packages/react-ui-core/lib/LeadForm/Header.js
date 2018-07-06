'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _Text = require('../Text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (_dec = (0, _reactThemed2.default)(/^(Modal_Header|Modal_SubHeader)/, {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          header = _props.header;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Text.Text,
          { className: theme.Modal_Header },
          header
        ),
        this.subHeader
      );
    }
  }, {
    key: 'subHeader',
    get: function get() {
      var subHeader = this.props.subHeader;


      if (subHeader) {
        return _react2.default.createElement(
          _Text.Text,
          { className: this.props.theme.Modal_SubHeader },
          subHeader
        );
      }

      return null;
    }
  }]);
  return Header;
}(_react.PureComponent), _class2.propTypes = {
  theme: _propTypes2.default.object,
  header: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node, _propTypes2.default.func]),
  subHeader: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node, _propTypes2.default.func])
}, _class2.defaultProps = {
  theme: {},
  header: 'Contact Property'
}, _temp)) || _class);
exports.default = Header;