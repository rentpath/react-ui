import React, { PureComponent } from 'react'
import themed from 'react-themed'
import { Button } from 'react-ui-core/src'
import PropTypes from 'prop-types'

@themed('*', { pure: true })

export default class DropdownFieldExample extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
    visible: PropTypes.bool,
    handleDocumentClick: PropTypes.func,
    theme: PropTypes.object,
  }

  static defaultProps = {
    themed: {},
  }

  componentDidMount() {
    document.addEventListener('click', this.props.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.handleDocumentClick)
  }

  handleClick = () => {
    const { toggleVisibilty } = this.props

    if (toggleVisibilty) toggleVisibilty()
  }

  render() {
    const { theme, visible } = this.props

    return (
      <Button
        className={theme[`Button-${visible ? 'expand' : 'collapse'}`]}
        onClick={this.handleClick}
      >
        Say Hi
      </Button>
    )
  }
}
