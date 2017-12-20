import React, { Component, cloneElement } from 'react'
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
      this.setState({ visible: nextProps.visible })
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

  renderAnchor(props) {
    const [Anchor, fieldProps] = parseArgs(this.props.anchorField, AnchorButton, {
      'data-tid': 'dropdown-anchor',
      visible: this.state.visible,
      handleDocumentClick: this.handleDocumentClick,
      toggleVisibilty: this.toggleVisibilty,
    })

    return <Anchor {...props} {...fieldProps} />
  }

  renderChildren() {
    const props = { toggleVisibilty: this.toggleVisibilty }
    const children = React.Children.toArray(this.props.children)
    return React.Children.map(children, child => (
      typeof child.type === 'function' ? cloneElement(child, props) : child
    ))
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

    return (
      <div
        ref={ref => { this.dropdown = ref }}
        className={classnames(
          theme.Dropdown,
          className
        )}
        {...props}
      >
        {this.renderAnchor(props)}
        {this.state.visible &&
          <Card data-tid="dropdown-body">
            {this.renderChildren()}
          </Card>
        }
      </div>
    )
  }
}
