import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from '@rentpath/react-ui-core'
import themed from '@rentpath/react-themed'

const DEFAULT_TEXT = 'Message'

@themed(['Label_Textarea'], {
  pure: true,
})

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

  get label() {
    const { theme, label } = this.props

    if (label) {
      if (typeof label === 'string') {
        return {
          text: label,
          className: theme.Label_Textarea,
        }
      }
      return label
    }

    return {
      text: DEFAULT_TEXT,
      className: theme.Label_Textarea,
    }
  }

  render() {
    const {
      label,
      ...props
    } = this.props

    return (
      <Field
        label={this.label}
        {...props}
      />
    )
  }
}
