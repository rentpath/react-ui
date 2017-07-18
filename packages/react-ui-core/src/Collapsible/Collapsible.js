import React, { Component, PropTypes } from 'react'
import { Button } from '../Button'

export default class Collapsible extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      display: false,
    }
  }

  handleClick() {
    if (this.props.handleClick) {
      this.props.handleClick()
    }
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
      hidden,
      visible,
    } = this.props

    return (
      <div id={id} className={theme.collapsible}>
        {showableItems}
        <div className={this.state.display ? theme.show : theme.hide}>
          {nonshowableItems}
        </div>
        <div className={theme.alignBottom}>
          <Button onClick={this.handleClick}>
            <strong>{this.state.display ? visible : hidden}</strong>
          </Button>
        </div>
      </div>
    )
  }
}

Collapsible.defaultProps = {
  showableItems: '',
  nonshowableItems: '',
  id: '',
  title: '',
  hidden: 'show more',
  visible: 'show less',
  handleClick: null,
}
Collapsible.propTypes = {
  showableItems: PropTypes.element,
  nonshowableItems: PropTypes.element,
  id: PropTypes.string,
  hidden: PropTypes.element,
  visible: PropTypes.element,
  handleClick: PropTypes.func,
}
