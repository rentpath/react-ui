import React, { PureComponent } from 'react'
import themed from 'react-themed'
import PropTypes from 'prop-types'
import Field from '../Field'

@themed(['OptInNewsLetter'])
export default class OptInNewsLetter extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    theme: {},
    name: 'opt-in-newsletter',
    type: 'checkbox',
    label: 'Simplify my search with helpful tips and rental recommendations.',
  }

  render() {
    const { theme, ...props } = this.props

    return (
      <Field className={theme.OptInNewsLetter} {...props} />
    )
  }
}
