import React, { PureComponent } from 'react'
import themed from 'react-themed'
import PropTypes from 'prop-types'
import Field from '../Field'

@themed(['Name'])
export default class Name extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    name: 'name',
    placeholder: 'Name',
  }

  render() {
    const { theme, ...props } = this.props

    return (
      <Field className={theme.Name} {...props} />
    )
  }
}
