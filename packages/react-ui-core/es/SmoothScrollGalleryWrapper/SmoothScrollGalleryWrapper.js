import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

var SmoothScrollGalleryWrapper = function SmoothScrollGalleryWrapper(_ref) {
  var lazyLoadProps = _ref.lazyLoadProps,
      children = _ref.children;
  return lazyLoadProps ? React.createElement(LazyLoad, lazyLoadProps, children) : children;
};

SmoothScrollGalleryWrapper.propTypes = {
  children: PropTypes.node,
  lazyLoadProps: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};
SmoothScrollGalleryWrapper.defaultProps = {
  lazyLoadProps: false
};
export default SmoothScrollGalleryWrapper;