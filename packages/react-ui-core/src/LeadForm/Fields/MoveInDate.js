import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from '../../Form'

export default class MoveInDate extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    name: 'date',
    type: 'date',
    placeholder: 'Move in date',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
