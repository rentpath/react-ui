import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

const SmoothScrollGalleryWrapper = ({ lazyLoadProps, children }) => (
  lazyLoadProps
    ? (
      <LazyLoad {...lazyLoadProps}>
        {children}
      </LazyLoad>
    )
    : children
)

SmoothScrollGalleryWrapper.propTypes = {
  children: PropTypes.node,
  lazyLoadProps: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
}

SmoothScrollGalleryWrapper.defaultProps = {
  lazyLoadProps: false,
}

export default (SmoothScrollGalleryWrapper)
