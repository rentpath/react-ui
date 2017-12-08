import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'

export default class DropdownAnchorButton extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
    handleDocumentClick: PropTypes.func,
    text: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.props.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.handleDocumentClick)
  }

  handleClick() {
    this.props.toggleVisibilty()
  }

  render() {
    const {
      className,
      text,
      onClick, // eslint-disable-line no-unused-vars
    } = this.props

    return (
      <Button
        data-tid="dropdown-anchor-button"
        onClick={this.handleClick}
        className={className}
      >
        {text}
      </Button>
    )
  }
}
