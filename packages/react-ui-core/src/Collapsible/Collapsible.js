import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
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
    this.props.handleClick()
    this.setState({
      display: !this.state.display,
    })
  }

  render() {
    const {
      theme,
      align,
      showableItems,
      nonshowableItems,
      hiddenText,
      visibleText,
    } = this.props

    const toggle = this.state.display ? 'visible' : 'hidden'

    return (
      <div className={theme.collapsible}>
        {showableItems}
        { nonshowableItems &&
          <div>
            <div
              className={classnames(
                theme.Collapsible_Items,
                theme[`Collapsible_Items-${toggle}`]
              )}
            >
              {nonshowableItems}
            </div>
            <Button
              onClick={this.handleClick}
              className={classnames(
                theme.Collapsible_Button,
                theme[`Collapsible_Button-${toggle}`],
                align && theme[`Collapsible_Button-${align}`],
              )}
            >
              {this.state.display ? visibleText : hiddenText}
            </Button>
          </div>
        }
      </div>
    )
  }
}
