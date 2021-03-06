import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import clsx from 'clsx'
import { Button } from '../Button'

const type = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element,
  PropTypes.node,
  PropTypes.func,
  PropTypes.array,
])

@themed(/^Collapsible/, {
  pure: true,
})
export default class Collapsible extends Component {
  static propTypes = {
    showableItems: type,
    nonshowableItems: type,
    hiddenText: type,
    visibleText: type,
    align: PropTypes.string,
    handleClick: PropTypes.func,
    visible: PropTypes.bool,
    theme: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    showableItems: '',
    nonshowableItems: '',
    hiddenText: 'show more',
    visibleText: 'show less',
    align: '',
    handleClick: () => { },
    visible: false,
    theme: {},
  }

  constructor(props) {
    super(props)

    this.state = {
      display: this.props.visible,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { display } = this.state
    this.props.handleClick()
    this.setState({
      display: !display,
    })
  }

  render() {
    const {
      theme,
      align,
      className,
      showableItems,
      nonshowableItems,
      hiddenText,
      visibleText,
    } = this.props

    const toggle = this.state.display ? 'visible' : 'hidden'

    return (
      <div
        className={clsx(
          className,
          theme.Collapsible,
        )}
      >
        {showableItems}
        {nonshowableItems && [
          <div
            key="collapsible-toggle"
            className={clsx(
              theme.Collapsible_Items,
              theme[`Collapsible_Items-${toggle}`]
            )}
          >
            {nonshowableItems}
          </div>,
          <Button
            key="collapsible-button"
            onClick={this.handleClick}
            className={clsx(
              theme[`Button-${toggle}`],
              align && theme[`Button-${align}`],
            )}
          >
            {this.state.display ? visibleText : hiddenText}
          </Button>,
        ]}
      </div>
    )
  }
}
