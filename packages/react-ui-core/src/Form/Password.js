import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'

export default class Password extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    name: 'password',
    type: 'password',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
