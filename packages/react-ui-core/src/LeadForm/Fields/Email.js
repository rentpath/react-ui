import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from '../../Form'

export default class Email extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    name: 'email',
    type: 'email',
    placeholder: 'Email Address',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
