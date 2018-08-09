import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import Field from '../Field'

@themed(['Message'], { pure: true })
export default class Message extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    theme: PropTypes.object,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    theme: {},
    name: 'message',
    type: 'textarea',
  }

  render() {
    const { theme, ...props } = this.props
    return (
      <Field className={theme.Message} {...props} />
    )
  }
}
