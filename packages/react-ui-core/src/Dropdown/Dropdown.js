import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { parseArgs } from '@rentpath/react-ui-utils'
import AnchorButton from './AnchorButton'
import { Card } from '../Card'

@themed(/^Dropdown/)

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    theme: PropTypes.object,
    children: PropTypes.node,
    anchorField: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    visible: false,
    theme: {},
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

  renderAnchor(anchorField) {
    return parseArgs(anchorField, AnchorButton)
  }

  render() {
    const {
      theme,
      visible,
      children,
      anchorField,
      className,
      ...props
    } = this.props

    const [Button, fieldProps] = this.renderAnchor(anchorField)
    const dropDownVisible = this.state.visible

    return (
      <div
        ref={ref => { this.dropdown = ref }}
        className={classnames(
          theme.Dropdown,
          className
        )}
        {...props}
      >
        <Button
          {...props}
          {...fieldProps}
          visible={dropDownVisible}
          handleDocumentClick={this.handleDocumentClick}
          toggleVisibilty={this.toggleVisibilty}
        />
        {dropDownVisible &&
          <Card
            data-tid="dropdown-body"
          >
            {children}
          </Card>
        }
      </div>
    )
  }
}
