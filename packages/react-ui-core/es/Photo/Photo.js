import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autobind from 'autobind-decorator';
import themed from '@rentpath/react-themed';
var pictureSourcesPropTypes = PropTypes.shape({
  type: PropTypes.string,
  media: PropTypes.string,
  srcset: PropTypes.string.isRequired
});
var Photo = (_dec = themed(['Photo'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Photo, _PureComponent);

  function Photo(props) {
    var _this;

    _classCallCheck(this, Photo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Photo).call(this, props));
    _this.img = React.createRef();
    _this.state = {
      url: _this.props.url || _this.props.fallbackUrl
    };
    return _this;
  }

  _createClass(Photo, [{
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
          rest = _objectWithoutProperties(_this$props, ["theme", "className", "url", "alt", "fallbackUrl", "sources"]);

      var isFallback = this.isFallback;
      var imageTag = React.createElement("img", _extends({
        src: isFallback ? fallbackUrl : this.state.url,
        alt: alt,
        "data-tid": "photo",
        ref: this.img,
        className: classnames(className, theme.Photo, isFallback && theme['Photo-error']),
        onError: this.fallback
      }, rest));
      if (isFallback || !this.sourceTags) return imageTag;
      return React.createElement("picture", null, this.sourceTags, imageTag);
    }
  }, {
    key: "sourceTags",
    get: function get() {
      var sources = this.props.sources;
      if (!sources || !sources.length) return false;
      return React.createElement(React.Fragment, null, sources.reduce(function (sourcesArr, value, index) {
        var type = value.type,
            media = value.media,
            srcset = value.srcset;

        if (srcset) {
          sourcesArr.push(React.createElement("source", {
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
}(PureComponent), _defineProperty(_class3, "propTypes", {
  url: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(pictureSourcesPropTypes),
  alt: PropTypes.string,
  fallbackUrl: PropTypes.string,
  theme: PropTypes.object,
  className: PropTypes.string
}), _defineProperty(_class3, "defaultProps", {
  theme: {} // don't need the constructor once we fix the getDerivedStateFromProps

}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "fallback", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "fallback"), _class2.prototype)), _class2)) || _class);
export { Photo as default };