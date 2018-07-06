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

var _reactSpinners = require('react-spinners');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapSpinner = (_dec = (0, _reactThemed2.default)(['Gmap_Spinner'], { pure: true }), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(MapSpinner, _PureComponent);

  function MapSpinner(props) {
    (0, _classCallCheck3.default)(this, MapSpinner);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MapSpinner.__proto__ || (0, _getPrototypeOf2.default)(MapSpinner)).call(this, props));

    _this.state = {
      loading: _this.props.loading
    };

    _this.closeTimer = null;
    return _this;
  }

  (0, _createClass3.default)(MapSpinner, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(nextProps) {
      if (this.props.loading !== nextProps.loading && nextProps.loading) {
        this.close();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.clearTimeout(this.closeTimer);
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      var closeDelay = this.props.closeDelay;

      // add timeout so the gray background isn't the only thing we see

      this.closeTimer = window.setTimeout(function () {
        _this2.setState({ loading: false });
      }, closeDelay);
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          closeDelay = _props.closeDelay,
          rest = (0, _objectWithoutProperties3.default)(_props, ['theme', 'className', 'closeDelay']);


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, theme.Gmap_Spinner)
        },
        _react2.default.createElement(_reactSpinners.BounceLoader, (0, _extends3.default)({}, rest, { loading: loading }))
      );
    }
  }]);
  return MapSpinner;
}(_react.PureComponent), _class2.propTypes = {
  loading: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string,
  closeDelay: _propTypes2.default.number
}, _class2.defaultProps = {
  closeDelay: 0,
  loading: false,
  theme: {},
  color: '#000'
}, _temp)) || _class);
exports.default = MapSpinner;