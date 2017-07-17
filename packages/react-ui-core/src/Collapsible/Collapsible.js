import React, { Component, PropTypes } from 'react'

export default class Collapsible extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      display: false,
    }
  }

  handleClick() {
    const originalstate = this.state.display
    if (this.props.handleClick) {
      this.props.handleClick()
    }
    if (this.state.display === originalstate) {
      this.setState({
        display: !this.state.display,
      })
    }
  }

  render() {
    const {
      id,
      theme,
      showableItems,
      nonshowableItems,
      togglemore,
      toggleless,
    } = this.props

    return (
      <div id={id} className={theme.collapsible}>
        {showableItems}
        <div className={this.state.display ? theme.show : theme.hide}>
          {nonshowableItems}
        </div>
        <div className={theme.alignBottom}>
          <a onClick={this.handleClick}>
          <strong>{this.state.display ? toggleless : togglemore}</strong>
        </a>
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
  togglemore: 'show more',
  toggleless: 'show less',
  handleClick: null,
}
Collapsible.propTypes = {
  showableItems: PropTypes.element,
  nonshowableItems: PropTypes.element,
  id: PropTypes.string,
  togglemore: PropTypes.element,
  toggleless: PropTypes.element,
  handleClick: PropTypes.func,
}
