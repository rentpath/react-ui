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

var _Text = require('../Text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = (_dec = (0, _reactThemed2.default)(/^(Counter|Label|Text)/, {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(Counter, _PureComponent);

  function Counter(props) {
    (0, _classCallCheck3.default)(this, Counter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call(this, props));

    _this.state = {
      count: _this.props.count
    };

    _this.increment = _this.increment.bind(_this);
    _this.decrement = _this.decrement.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Counter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.count !== nextProps.count) {
        this.setState({ count: nextProps.count });
      }
    }
  }, {
    key: 'text',
    value: function text(count) {
      var text = this.props.text;


      if (text) return text(count);
      return count;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(count) {
      this.setState({ count: count });
      this.props.onClick(count);
    }
  }, {
    key: 'increment',
    value: function increment() {
      var _props = this.props,
          max = _props.max,
          step = _props.step;

      var count = this.state.count + step;

      if (count <= max) this.handleClick(count, 'INC');
    }
  }, {
    key: 'decrement',
    value: function decrement() {
      var _props2 = this.props,
          min = _props2.min,
          step = _props2.step;

      var count = this.state.count - step;

      if (count >= min) this.handleClick(count, 'DEC');
    }
  }, {
    key: 'render',
    value: function render() {
      var count = this.state.count;
      var _props3 = this.props,
          theme = _props3.theme,
          label = _props3.label,
          className = _props3.className,
          decrementOperator = _props3.decrementOperator,
          incrementOperator = _props3.incrementOperator,
          onClick = _props3.onClick,
          text = _props3.text,
          step = _props3.step,
          min = _props3.min,
          max = _props3.max,
          props = (0, _objectWithoutProperties3.default)(_props3, ['theme', 'label', 'className', 'decrementOperator', 'incrementOperator', 'onClick', 'text', 'step', 'min', 'max']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.Counter, className)
        }, props),
        label && this.renderLabel,
        _react2.default.createElement(
          'div',
          { className: theme.Counter_Controls },
          _react2.default.createElement(
            'span',
            {
              role: 'presentation',
              onClick: this.decrement,
              className: (0, _classnames2.default)(theme.Counter_Button, theme.Counter_Decrement),
              'data-tid': 'counter-decrement'
            },
            decrementOperator
          ),
          _react2.default.createElement(
            _Text.Text,
            { 'data-tid': 'counter-text' },
            this.text(count)
          ),
          _react2.default.createElement(
            'span',
            {
              role: 'presentation',
              onClick: this.increment,
              className: (0, _classnames2.default)(theme.Counter_Button, theme.Counter_Increment),
              'data-tid': 'counter-increment'
            },
            incrementOperator
          )
        )
      );
    }
  }, {
    key: 'renderLabel',
    get: function get() {
      var _props4 = this.props,
          theme = _props4.theme,
          label = _props4.label;


      return _react2.default.createElement(
        'div',
        { className: theme.Label },
        label
      );
    }
  }]);
  return Counter;
}(_react.PureComponent), _class2.propTypes = {
  theme: _propTypes2.default.object,
  label: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  decrementOperator: _propTypes2.default.element,
  incrementOperator: _propTypes2.default.element,
  text: _propTypes2.default.func,
  count: _propTypes2.default.number,
  step: _propTypes2.default.number,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  className: _propTypes2.default.string
}, _class2.defaultProps = {
  theme: {},
  onClick: function onClick() {},
  decrementOperator: _react2.default.createElement(
    'span',
    null,
    '-'
  ),
  incrementOperator: _react2.default.createElement(
    'span',
    null,
    '+'
  ),
  count: 0,
  step: 1,
  min: 0,
  max: 10
}, _temp)) || _class);
exports.default = Counter;