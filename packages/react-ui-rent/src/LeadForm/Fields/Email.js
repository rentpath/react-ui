import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RequiredField from './RequiredField'

export default class Email extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    name: 'email',
    type: 'email',
    placeholder: 'Email Address',
  }

  render() {
    return (
      <RequiredField {...this.props} />
    )
  }
}
