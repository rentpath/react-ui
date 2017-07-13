import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classNames from 'classnames'

@themed(/^FieldSet/, {
  pure: true,
})

export default class FieldSet extends PureComponent {
  static propTypes = {
    legend: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      legend,
      theme,
      className,
      children,
      ...props
    } = this.props

    const classnames = classNames(
      className,
      theme.FieldSet,
    )

    return (
      <fieldset {...props} className={classnames}>
        {legend && (
          <legend className={theme['FieldSet-legend']}>
            {legend}
          </legend>
        )}
        {children}
      </fieldset>
    )
  }
}
