import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'

const noop = () => {}

export default class Collapsible extends Component {
  static propTypes = {
    showableItems: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    nonshowableItems: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    hiddenText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    visibleText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    handleClick: PropTypes.func,
    visible: PropTypes.bool,
    theme: PropTypes.object,
  }

  static defaultProps = {
    showableItems: '',
    nonshowableItems: '',
    id: '',
    title: '',
    hiddenText: 'show more',
    visibleText: 'show less',
    visible: false,
    handleClick: noop,
    theme: {},
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      display: this.props.visible,
    }
  }

  handleClick() {
    this.props.handleClick()
    this.setState({
      display: !this.state.display,
    })
  }

  render() {
    const {
      id,
      theme,
      showableItems,
      nonshowableItems,
      hiddenText,
      visibleText,
    } = this.props

    return (
      <div id={id} className={theme.collapsible}>
        {showableItems}
        <div className={this.state.display ? theme.show : theme.hide}>
          {nonshowableItems}
        </div>
        <div className={theme.alignBottom}>
          <Button className={theme.strong} onClick={this.handleClick}>
            {this.state.display ? visibleText : hiddenText}
          </Button>
        </div>
      </div>
    )
  }
}
