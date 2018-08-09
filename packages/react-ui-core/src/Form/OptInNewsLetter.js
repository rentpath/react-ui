import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Field from './Field'

export default class OptInNewsLetter extends PureComponent {
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
    name: 'opt-in-newsletter',
    type: 'checkbox',
    label: 'Simplify my search with helpful tips and rental recommendations.',
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}
