import React, { PureComponent } from 'react'
import themed from 'react-themed'
import PropTypes from 'prop-types'
import Field from '../Field'

@themed(['Phone'])
export default class Phone extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone',
  }

  render() {
    const { theme, ...props } = this.props

    return (
      <Field className={theme.Phone} {...props} />
    )
  }
}
