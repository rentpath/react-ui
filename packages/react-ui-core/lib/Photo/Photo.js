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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

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

var pictureSourcesPropTypes = _propTypes2.default.shape({
  type: _propTypes2.default.string,
  media: _propTypes2.default.string,
  srcset: _propTypes2.default.string.isRequired
});

var Photo = (_dec = (0, _reactThemed2.default)(['Photo'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 = function (_PureComponent) {
  (0, _inherits3.default)(Photo, _PureComponent);

  // don't need the constructor once we fix the getDerivedStateFromProps
  function Photo(props) {
    (0, _classCallCheck3.default)(this, Photo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Photo.__proto__ || (0, _getPrototypeOf2.default)(Photo)).call(this, props));

    _this.state = {
      url: _this.props.url,
      error: false
    };
    return _this;
  }

  (0, _createClass3.default)(Photo, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextState) {
      var _ref = nextState || {},
          url = _ref.url;

      if (!url || url !== nextProps.url) {
        this.setState({
          url: nextProps.url,
          error: false
        });
      }
    }

    /* throws a `willComponentUpdate` warning because of the
     * themed wrapper component using it
     * should revisit when we either fix react-themed or move
     * to something else
     *
    static getDerivedStateFromProps(props, state) {
      const { url } = state || {}
       if (!url || (url !== props.url)) {
        return {
          url: props.url,
          error: false,
        }
      }
       return null
    }
    */

  }, {
    key: 'fallback',
    value: function fallback() {
      if (!this.state.error) {
        this.setState({ error: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          _ = _props.url,
          alt = _props.alt,
          fallbackUrl = _props.fallbackUrl,
          sources = _props.sources,
          rest = (0, _objectWithoutProperties3.default)(_props, ['theme', 'className', 'url', 'alt', 'fallbackUrl', 'sources']);
      var _state = this.state,
          url = _state.url,
          error = _state.error;


      var imageTag = _react2.default.createElement('img', (0, _extends3.default)({
        src: error ? fallbackUrl : url,
        alt: alt,
        'data-tid': 'photo',
        className: (0, _classnames2.default)(className, theme.Photo),
        onError: this.fallback
      }, rest));

      if (error || !this.sourceTags) return imageTag;

      return _react2.default.createElement(
        'picture',
        null,
        this.sourceTags,
        imageTag
      );
    }
  }, {
    key: 'sourceTags',
    get: function get() {
      var sources = this.props.sources;


      if (!sources || !sources.length) return false;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        sources.reduce(function (sourcesArr, _ref2, index) {
          var type = _ref2.type,
              media = _ref2.media,
              srcset = _ref2.srcset;

          if (srcset) {
            sourcesArr.push(_react2.default.createElement('source', {
              type: type,
              media: media,
              srcSet: srcset,
              key: '' + index + srcset
            }));
          }
          return sourcesArr;
        }, [])
      );
    }
  }]);
  return Photo;
}(_react.PureComponent), _class3.propTypes = {
  url: _propTypes2.default.string.isRequired,
  sources: _propTypes2.default.arrayOf(pictureSourcesPropTypes),
  alt: _propTypes2.default.string,
  fallbackUrl: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  className: _propTypes2.default.string
}, _class3.defaultProps = {
  theme: {} }, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'fallback', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'fallback'), _class2.prototype)), _class2)) || _class);
exports.default = Photo;