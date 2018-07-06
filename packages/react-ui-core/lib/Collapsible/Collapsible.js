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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var type = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.array]);

var Collapsible = (_dec = (0, _reactThemed2.default)(/^Collapsible/, {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Collapsible, _Component);

  function Collapsible(props) {
    (0, _classCallCheck3.default)(this, Collapsible);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Collapsible.__proto__ || (0, _getPrototypeOf2.default)(Collapsible)).call(this, props));

    _this.state = {
      display: _this.props.visible
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Collapsible, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick();
      this.setState({
        display: !this.state.display
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          align = _props.align,
          className = _props.className,
          showableItems = _props.showableItems,
          nonshowableItems = _props.nonshowableItems,
          hiddenText = _props.hiddenText,
          visibleText = _props.visibleText;


      var toggle = this.state.display ? 'visible' : 'hidden';

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, theme.Collapsible)
        },
        showableItems,
        nonshowableItems && [_react2.default.createElement(
          'div',
          {
            key: 'collapsible-toggle',
            className: (0, _classnames2.default)(theme.Collapsible_Items, theme['Collapsible_Items-' + toggle])
          },
          nonshowableItems
        ), _react2.default.createElement(
          _Button.Button,
          {
            key: 'collapsible-button',
            onClick: this.handleClick,
            className: (0, _classnames2.default)(theme['Button-' + toggle], align && theme['Button-' + align])
          },
          this.state.display ? visibleText : hiddenText
        )]
      );
    }
  }]);
  return Collapsible;
}(_react.Component), _class2.propTypes = {
  showableItems: type,
  nonshowableItems: type,
  hiddenText: type,
  visibleText: type,
  align: _propTypes2.default.string,
  handleClick: _propTypes2.default.func,
  visible: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string
}, _class2.defaultProps = {
  showableItems: '',
  nonshowableItems: '',
  hiddenText: 'show more',
  visibleText: 'show less',
  align: '',
  handleClick: function handleClick() {},
  visible: false,
  theme: {}
}, _temp)) || _class);
exports.default = Collapsible;