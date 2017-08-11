import PropTypes from 'prop-types'
import React from 'react'

const DefaultMarkup = ({
  tagItem,
  children,
}) => (
  <div data-tag_item={tagItem}>
    {children}
  </div>
)

DefaultMarkup.propTypes = {
  tagItem: PropTypes.string,
  children: PropTypes.any,
}

DefaultMarkup.defaultProps = {
  tagItem: 'cr3',
}

export default DefaultMarkup
