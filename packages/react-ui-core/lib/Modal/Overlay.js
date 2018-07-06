'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

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

var Overlay = (_dec = (0, _reactThemed2.default)(/^Overlay/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(Overlay, _PureComponent);

  function Overlay() {
    (0, _classCallCheck3.default)(this, Overlay);
    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || (0, _getPrototypeOf2.default)(Overlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overlay, [{
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      // Verify that the click started on the overlay
      this.clickedOutside = e.target === this.overlay;

      if (this.props.onMouseDown) {
        this.props.onMouseDown(e);
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(e) {
      // Verify that the click ended on the overlay
      if (e.target !== this.overlay) {
        this.clickedOutside = false;
      }

      if (this.props.onMouseUp) {
        this.props.onMouseUp(e);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      // If the click did not start and end on the overlay do not register click
      if (!this.clickedOutside) {
        return;
      }
      this.clickedOutside = null;

      if (this.props.onClick && e.target === this.overlay) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            _this2.overlay = node;
          },
          role: 'presentation',
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onClick: this.handleClick,
          className: (0, _classnames2.default)(className, theme.Overlay)
        },
        children
      );
    }
  }]);
  return Overlay;
}(_react.PureComponent), _class3.propTypes = {
  className: _propTypes2.default.string,
  onMouseDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  theme: _propTypes2.default.object,
  children: _propTypes2.default.node
}, _class3.defaultProps = {
  styles: {},
  theme: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleMouseDown', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleMouseDown'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseUp', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleMouseUp'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleClick'), _class2.prototype)), _class2)) || _class);
exports.default = Overlay;