import React, { PureComponent } from 'react'
import themed from 'react-themed'
import PropTypes from 'prop-types'
import Field from '../Field'

@themed(['MoveInDate'])
export default class MoveInDate extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    name: 'date',
    type: 'date',
    placeholder: 'Move in date',
  }

  render() {
    const { theme, ...props } = this.props

    return (
      <Field className={theme.MoveInDate} {...props} />
    )
  }
}
