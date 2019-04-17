import { createElement, PureComponent } from 'react'
import { parseArgs } from '@rentpath/react-ui-utils'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from '@rentpath/react-themed'
import { Button } from '../Button'

@themed(['DropdownAnchor-expand', 'DropdownAnchor-collapse', 'DropdownAnchor'], {
  pure: true,
})
export default class DropdownAnchor extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    visible: PropTypes.bool,
    theme: PropTypes.object,
    className: PropTypes.string,
    changeVisibility: PropTypes.func,
    children: PropTypes.any,
    anchor: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.node,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    theme: {},
  }

  handleClick = () => {
    const { onClick, visible } = this.props

    if (onClick) onClick(visible)
  }

  render() {
    const {
      anchor,
      className,
      theme,
      visible,
      ...props
    } = this.props

    return createElement(...parseArgs(anchor, Button, {
      'data-tid': 'dropdown-anchor',
      className: classnames(
        className,
        theme.DropdownAnchor,
        theme[`DropdownAnchor-${visible ? 'expand' : 'collapse'}`]
      ),
      onClick: this.handleClick,
      ...props,
    }))
  }
}
