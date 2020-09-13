"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _dec, _class, _class2, _class3, _temp;

var pictureSourcesPropTypes = _propTypes.default.shape({
  type: _propTypes.default.string,
  media: _propTypes.default.string,
  srcset: _propTypes.default.string.isRequired
});

var Photo = (_dec = (0, _reactThemed.default)(['Photo'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Photo, _PureComponent);

  function Photo(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Photo);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Photo).call(this, props));
    _this.img = _react.default.createRef();
    _this.state = {
      url: _this.props.url || _this.props.fallbackUrl
    };
    return _this;
  }

  (0, _createClass2.default)(Photo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fallbackUrl = this.props.fallbackUrl;
      /* eslint-disable react/no-did-mount-set-state */

      if (this.isFallback) {
        this.setState({
          error: true
        });
      }
      /**
       * SSR Race Condition Fix
       * Handle 404 error that happens before hydration, but caught after hydration
       */


      if (this.img && this.img.current) {
        var _this$img$current = this.img.current,
            complete = _this$img$current.complete,
            naturalHeight = _this$img$current.naturalHeight;
        var errorLoadingImgBeforeHydration = complete && naturalHeight === 0;

        if (errorLoadingImgBeforeHydration) {
          // @ts-ignore
          this.img.current.src = fallbackUrl;
          this.setState({
            error: true
          });
        }
      }
      /* eslint-enable react/no-did-mount-set-state */

    }
  }, {
    key: "componentWillReceiveProps",
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
    key: "fallback",
    value: function fallback(e) {
      var fallbackUrl = this.props.fallbackUrl;

      if (e.target.src !== fallbackUrl && !this.state.error) {
        if (fallbackUrl) {
          // only set the src to the fallbackUrl if we have one
          e.target.src = fallbackUrl;
        } // this is done in case of race condtion in terms of
        // being in limbo from ssr and client side state
        // or this happening sometime after hte component has mounted
        // a re-render needs to be forced and it also makes this conditional
        // get disregarded next time


        this.setState({
          error: true
        }); // return this for unit testing only

        return e;
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          _ = _this$props.url,
          alt = _this$props.alt,
          fallbackUrl = _this$props.fallbackUrl,
          sources = _this$props.sources,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "url", "alt", "fallbackUrl", "sources"]);
      var isFallback = this.isFallback;

      var imageTag = _react.default.createElement("img", (0, _extends2.default)({
        src: isFallback ? fallbackUrl : this.state.url,
        alt: alt,
        "data-tid": "photo",
        ref: this.img,
        className: (0, _classnames.default)(className, theme.Photo, isFallback && theme['Photo-error']),
        onError: this.fallback
      }, rest));

      if (isFallback || !this.sourceTags) return imageTag;
      return _react.default.createElement("picture", null, this.sourceTags, imageTag);
    }
  }, {
    key: "sourceTags",
    get: function get() {
      var sources = this.props.sources;
      if (!sources || !sources.length) return false;
      return _react.default.createElement(_react.default.Fragment, null, sources.reduce(function (sourcesArr, value, index) {
        var type = value.type,
            media = value.media,
            srcset = value.srcset;

        if (srcset) {
          sourcesArr.push(_react.default.createElement("source", {
            type: type,
            media: media,
            srcSet: srcset,
            key: "".concat(index).concat(srcset)
          }));
        }

        return sourcesArr;
      }, []));
    }
  }, {
    key: "isFallback",
    get: function get() {
      return this.img.current && this.img.current.src === this.props.fallbackUrl;
    }
  }]);
  return Photo;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  url: _propTypes.default.string.isRequired,
  sources: _propTypes.default.arrayOf(pictureSourcesPropTypes),
  alt: _propTypes.default.string,
  fallbackUrl: _propTypes.default.string,
  theme: _propTypes.default.object,
  className: _propTypes.default.string
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {} // don't need the constructor once we fix the getDerivedStateFromProps

}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "fallback", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "fallback"), _class2.prototype)), _class2)) || _class);
exports.default = Photo;