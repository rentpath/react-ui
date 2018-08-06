import React, { PureComponent } from 'react'
import themed from 'react-themed'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Field from '../Field'

@themed(['Checkbox'])
export default class Checkbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    type: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    type: 'checkbox',
  }

  render() {
    const { theme, className, ...props } = this.props

    return (
      <Field className={classnames(theme.Checkbox, className)} {...props} />
    )
  }
}
