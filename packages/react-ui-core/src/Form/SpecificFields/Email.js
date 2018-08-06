import React, { PureComponent } from 'react'
import themed from 'react-themed'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Field from '../Field'

@themed(['Email'])
export default class Email extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    name: 'email',
    type: 'email',
    placeholder: 'Email Address',
  }

  render() {
    const { theme, className, ...props } = this.props

    return (
      <Field className={classnames(theme.Email, className)} {...props} />
    )
  }
}
