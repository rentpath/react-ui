import React, { PureComponent } from 'react'
import themed from 'react-themed'
import { Button } from 'react-ui-core/src'
import PropTypes from 'prop-types'

@themed('*', { pure: true })

export default class DropdownButtonExample extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
    visible: PropTypes.bool,
    handleDocumentClick: PropTypes.func,
    theme: PropTypes.object,
    buttonText: PropTypes.string,
  }

  static defaultProps = {
    themed: {},
    buttonText: 'select',
  }

  render() {
    const { theme, visible, buttonText, ...props } = this.props

    return (
      <Button
        className={theme[`Button-${visible ? 'expand' : 'collapse'}`]}
        {...props}
      >
        {buttonText}
      </Button>
    )
  }
}
