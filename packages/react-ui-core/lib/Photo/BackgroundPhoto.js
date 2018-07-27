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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pipe = require('lodash/fp/pipe');

var _pipe2 = _interopRequireDefault(_pipe);

var _filter = require('lodash/fp/filter');

var _filter2 = _interopRequireDefault(_filter);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

var _join = require('lodash/fp/join');

var _join2 = _interopRequireDefault(_join);

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backgroundUrl = (0, _pipe2.default)(function () {
  for (var _len = arguments.length, urls = Array(_len), _key = 0; _key < _len; _key++) {
    urls[_key] = arguments[_key];
  }

  return [].concat(urls);
}, _flatten2.default, (0, _filter2.default)(Boolean), // skip if undefined
(0, _map2.default)(function (url) {
  return 'url(' + url + ')';
}), (0, _join2.default)(', '));

var BackgroundPhoto = (_dec = (0, _reactThemed2.default)(['BackgroundPhoto'], {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(BackgroundPhoto, _PureComponent);

  function BackgroundPhoto() {
    (0, _classCallCheck3.default)(this, BackgroundPhoto);
    return (0, _possibleConstructorReturn3.default)(this, (BackgroundPhoto.__proto__ || (0, _getPrototypeOf2.default)(BackgroundPhoto)).apply(this, arguments));
  }

  (0, _createClass3.default)(BackgroundPhoto, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          url = _props.url,
          fallbackUrl = _props.fallbackUrl,
          alt = _props.alt,
          rest = (0, _objectWithoutProperties3.default)(_props, ['theme', 'className', 'url', 'fallbackUrl', 'alt']);


      return _react2.default.createElement('div', (0, _extends3.default)({
        style: {
          backgroundImage: backgroundUrl(url, fallbackUrl)
        },
        className: (0, _classnames2.default)(className, theme.BackgroundPhoto),
        'data-tid': 'bg-photo'
      }, rest));
    }
  }]);
  return BackgroundPhoto;
}(_react.PureComponent), _class2.propTypes = {
  url: _propTypes2.default.string,
  fallbackUrl: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  alt: _propTypes2.default.string
}, _class2.defaultProps = {
  theme: {}
}, _temp)) || _class);
exports.default = BackgroundPhoto;