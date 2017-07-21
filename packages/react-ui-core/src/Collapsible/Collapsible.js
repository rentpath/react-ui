import React, { Component, PropTypes } from 'react'

export default class Collapsible extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      display: false,
      toggleItems: this.props.toggleItems,
    }
  }
  handleClick() {
    this.props.handleClick(this)
  }
  render() {
    const {
      theme,
      showableItems,
      nonshowableItems,
      id,
      title,
      checkboxClass,
    } = this.props
    const { toggleItems } = this.state
    return (
    <div id={id} className={this.props.collapsible}>
        <p><strong>{title}</strong></p>
        {this.props.showableItems}
        <div className={this.state.display ? theme.show : theme.hide}>
          {this.props.nonshowableItems}
        </div>
        <div className={theme.alignBottom}>
          <a onClick={this.handleClick}>
            <strong>{toggleItems}</strong>
          </a>
        </div>
    </div>
    )
  }
}
Collapsible.defaultProps = {
  showableItems: <span>Add showableItems</span>,
  nonshowableItems: <span>Add nonshowableItems</span>,
  id: '',
  title: '',
  collapsible: '',
  toggleItems: 'see all items',
}
Collapsible.propTypes = {
  showableItems: PropTypes.element,
  nonshowableItems: PropTypes.element,
  id: PropTypes.string,
  title: PropTypes.string,
  collapsible: PropTypes.string,
  toggleItems: PropTypes.string,
  handleClick: PropTypes.func,
}
