import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import DefaultAnchor from './DefaultAnchor'

@themed(/^DropDown/)

export default class DropDown extends Component {
  static propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    theme: PropTypes.object,
    children: PropTypes.node,
    Anchor: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    visible: false,
    theme: {},
    Anchor: DefaultAnchor,
  }

  constructor(props) {
    super(props)
    this.state = { visible: this.props.visible }
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.toggleVisibilty = this.toggleVisibilty.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({ visible: this.nextProps.visible })
    }
  }

  toggleVisibilty() {
    this.setState({ visible: !this.state.visible })
  }

  handleDocumentClick(event) {
    if (this.state.visible && !this.dropdown.contains(event.target)) {
      this.toggleVisibilty()
    }
  }

  render() {
    const {
      theme,
      visible,
      children,
      Anchor,
      className,
      ...props
    } = this.props

    const dropDownVisible = this.state.visible

    return (
      <div
        ref={ref => { this.dropdown = ref }}
        className={classnames(
          theme.DropDown,
          className
        )}
      >
        <Anchor
          data-tid="dropdown-anchor"
          {...props}
          handleDocumentClick={this.handleDocumentClick}
          toggleVisibilty={this.toggleVisibilty}
          dropDownVisible={dropDownVisible}
          className={classnames(
            theme.DropDown_Anchor,
            theme[`DropDown_Anchor-dropdown${dropDownVisible ? 'Visible' : 'Hidden'}`],
          )}
        />
        {dropDownVisible &&
          <div
            data-tid="dropdown-content"
            className={theme.DropDown_Content}
          >
            {children}
          </div>
        }
      </div>
    )
  }
}
