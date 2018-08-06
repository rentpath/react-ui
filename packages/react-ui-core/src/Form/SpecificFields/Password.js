import React, { PureComponent } from 'react'
import themed from 'react-themed'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Field from '../Field'

@themed(['Password'])
export default class Password extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    name: 'password',
    type: 'password',
  }

  render() {
    const { theme, className, ...props } = this.props
    return (
      <Field className={classnames(theme.Password, className)} {...props} />
    )
  }
}
