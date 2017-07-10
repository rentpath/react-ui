import React, { Component } from 'react'
import PropTypes from 'prop-types'

const FieldGroup = ({ label, children, theme, columns }) => {
  let renderedChildren = []
  let fields = Object.values(children)
  const rows = Math.ceil(fields.length / columns)

  for (let i = 0; i < rows; i++) {
    renderedChildren.push(
      <div className={theme['FieldGroup-row']}>
        {fields.splice(0, columns).map(child => (
          <div className={theme['FieldGroup-column']}>
            {child}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={theme.FieldGroup}>
      <div className={theme['FieldGroup-label']}>{label}</div>
      {renderedChildren}
    </div>
  )
}

FieldGroup.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.object,
  columns: PropTypes.number,
}

FieldGroup.defaultProps = {
  theme: {},
  columns: 1,
}

export default FieldGroup
