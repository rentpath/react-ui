import React, {
  Component,
  cloneElement,
  createElement,
} from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import { parseArgs } from '@rentpath/react-ui-utils'
import themed from 'react-themed'
import classnames from 'classnames'
import DropdownAnchor from './DropdownAnchor'

@themed(/^Dropdown/)

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    theme: PropTypes.object,
    children: PropTypes.node,
    onVisibilityChange: PropTypes.func,
    anchorField: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    toggleOnSelect: PropTypes.bool,
  }

  static defaultProps = {
    toggleOnSelect: true,
    visible: false,
    theme: {},
    onVisibilityChange: () => {},
  }

  constructor(props) {
    super(props)
    this.state = { visible: props.visible }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({ visible: nextProps.visible })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick)
  }

  @autobind
  toggleVisibility() {
    const { onVisibilityChange, toggleOnSelect } = this.props
    const visible = toggleOnSelect ? !this.state.visible : true

    if (this.state.visible !== visible) {
      onVisibilityChange(visible)
      this.setState({ visible })
    }
  }

  @autobind
  handleDocumentClick(event) {
    const eventTarget = event.target
    const parentTarget = event.target.parentNode
    const hasParentTarget = this.dropdown.contains(parentTarget)
    const parentIsDropdown = hasParentTarget && parentTarget.dataset.self === 'dropdown'

    const targetIsDropdown = this.dropdown.contains(eventTarget) || parentIsDropdown

    const shouldFireEvent = this.state.visible && !targetIsDropdown

    if (shouldFireEvent) {
      this.setState({ visible: false })
      this.props.onVisibilityChange(false)
    }
  }

  renderAnchor() {
    return createElement(...parseArgs(
      this.props.anchorField,
      DropdownAnchor,
      {
        'data-tid': 'dropdown-anchor',
        visible: this.state.visible,
        onClick: this.toggleVisibility,
        className: this.props.className,
      }
    ))
  }

  renderChildren() {
    const props = { onSelect: this.toggleVisibility }
    const children = React.Children.toArray(this.props.children)
    return React.Children.map(children, child => (
      typeof child.type === 'function' ? cloneElement(child, props) : child
    ))
  }

  render() {
    const {
      theme,
      visible: _,
      children,
      anchorField,
      className,
      onVisibilityChange,
      toggleOnSelect,
      ...props
    } = this.props

    const { visible } = this.state

    return (
      <div
        ref={ref => { this.dropdown = ref }}
        className={classnames(
          theme.Dropdown,
          className,
          theme[`Dropdown-${visible ? 'expand' : 'collapse'}`]
        )}
        {...props}
        data-self="dropdown"
      >
        {this.renderAnchor()}
        {visible && (
          <div data-tid="dropdown-body" className={theme.Dropdown_Body}>
            {this.renderChildren()}
          </div>
        )}
      </div>
    )
  }
}
