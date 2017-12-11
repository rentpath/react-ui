import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from '../../Form'

export default class Phone extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
