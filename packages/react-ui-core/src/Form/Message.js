import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'

export default class Message extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    name: 'message',
    type: 'textarea',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
