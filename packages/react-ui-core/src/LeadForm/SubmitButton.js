import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'

export default class SubmitButton extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.any,
  }

  static defaultProps = {
    type: 'submit',
    children: 'Send',
  }

  render() {
    const {
      type,
      children,
      ...props
    } = this.props

    return (
      <Button
        name={name}
        type={type}
        data-tid="lead-form-submit"
        {...props}
      >
        {children}
      </Button>
    )
  }
}
