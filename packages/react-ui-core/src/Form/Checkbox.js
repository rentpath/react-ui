import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'

export default class Checkbox extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    property: PropTypes.string,
  }

  static defaultProps = {
    type: 'checkbox',
    property: 'checked',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
