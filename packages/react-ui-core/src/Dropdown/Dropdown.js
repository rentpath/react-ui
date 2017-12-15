import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import DropdownAnchorButton from './DropdownAnchorButton'

@themed(/^Dropdown/)

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    theme: PropTypes.object,
    children: PropTypes.node,
    Anchor: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
    onVisibilityChange: PropTypes.func,
  }

  static defaultProps = {
    visible: false,
    theme: {},
    Anchor: DropdownAnchorButton,
    onVisibilityChange: () => {},
  }

  constructor(props) {
    super(props)
    this.state = { visible: this.props.visible }
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.changeVisibility = this.changeVisibility.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({ visible: nextProps.visible })
    }
  }

  changeVisibility(visibility) {
    this.props.onVisibilityChange(visibility)
    this.setState({ visible: visibility })
  }

  handleDocumentClick(event) {
    if (this.state.visible && !this.dropdown.contains(event.target)) {
      this.changeVisibility(false)
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
          theme.Dropdown,
          className
        )}
      >
        <Anchor
          data-tid="dropdown-anchor"
          {...props}
          handleDocumentClick={this.handleDocumentClick}
          changeVisibility={this.changeVisibility}
          dropDownVisible={dropDownVisible}
          className={classnames(
            theme.Dropdown_Anchor,
            theme[`Dropdown_Anchor-dropdown${dropDownVisible ? 'Visible' : 'Hidden'}`],
          )}
        />
        {dropDownVisible &&
          <div
            data-tid="dropdown-content"
            className={theme.Dropdown_Content}
          >
            {children}
          </div>
        }
      </div>
    )
  }
}
