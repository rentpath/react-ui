import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '@rentpath/react-ui-core'

export default class DropdownAnchorText extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    defaultText: PropTypes.string.isRequired,
    icon: PropTypes.node,
  }
  static defaultProps = {
    icon: '⌄',
  }

  render() {
    const { text, defaultText, icon } = this.props

    return [
      <Text key="dropdown-anchor-text">{text || defaultText}</Text>,
      <span key="dropdown-anchor-icon">{icon}</span>,
    ]
  }
}
