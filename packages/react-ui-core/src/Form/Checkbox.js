import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'

export default class Checkbox extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'checkbox',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
