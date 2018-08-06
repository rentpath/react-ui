import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

@themed(/^FieldSet/, {
  pure: true,
})

export default class FieldSet extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    legend: PropTypes.string,
    theme: PropTypes.object,
    children: PropTypes.node,
    variant: PropTypes.string,
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
      variant,
      ...props
    } = this.props

    return (
      <fieldset
        {...props}
        className={classnames(
          className,
          theme.FieldSet,
          variant && theme[`FieldSet-${variant}`],
        )}
      >
        {legend && (
          <legend className={theme.FieldSet_legend}>
            {legend}
          </legend>
        )}
        {children}
      </fieldset>
    )
  }
}
