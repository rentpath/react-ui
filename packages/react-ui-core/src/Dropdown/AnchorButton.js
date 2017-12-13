import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Button } from '../Button'

@themed(['Button-expand']['Button-collapse'], {
  pure: true,
})

export default class AnchorButton extends PureComponent {
  static propTypes = {
    toggleVisibilty: PropTypes.func,
    handleDocumentClick: PropTypes.func,
    visible: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    className: PropTypes.string,
    text: PropTypes.any,
  }

  static defaultProps = {
    theme: {},
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
    const { toggleVisibilty } = this.props

    if (toggleVisibilty) toggleVisibilty()
  }

  render() {
    const {
      handleDocumentClick,
      toggleVisibilty,
      visible,
      className,
      theme,
      text,
      onClick, // eslint-disable-line no-unused-vars
      ...props
    } = this.props

    return (
      <Button
        data-tid="anchor-button"
        className={classnames(
          className,
          theme[`Button-${visible ? 'expand' : 'collapse'}`]
        )}
        onClick={this.handleClick}
        {...props}
      >
        {text}
      </Button>
    )
  }
}
