import React, { Component } from 'react'
import PropTypes from 'prop-types'

const FieldSet = ({ legend, children, theme, columns }) => {
  let renderedChildren = []
  let fields = Object.values(children)
  const rows = Math.ceil(fields.length / columns)

  for (let i = 0; i < rows; i++) {
    renderedChildren.push(
      <div className={theme['FieldSet-row']}>
        {fields.splice(0, columns).map(child => (
          <div className={theme['FieldSet-column']}>
            {child}
          </div>
        ))}
      </div>
    )
  }

  return (
    <fieldset className={theme.FieldSet}>
      <legend className={theme['FieldSet-legend']}>{legend}</legend>
      {renderedChildren}
    </fieldset>
  )
}

FieldSet.propTypes = {
  legend: PropTypes.string,
  theme: PropTypes.object,
  columns: PropTypes.number,
}

FieldSet.defaultProps = {
  theme: {},
  columns: 1,
}

export default FieldSet
