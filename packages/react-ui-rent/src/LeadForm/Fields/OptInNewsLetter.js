import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from '@rentpath/react-ui-core'

export default class OptInNewsLetter extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),
    defaultChecked: PropTypes.bool,
  }

  static defaultProps = {
    name: 'opt_in_newsletter',
    type: 'checkbox',
    label: 'Simplify my search with helpful tips and rental recommendations.',
    defaultChecked: true,
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
