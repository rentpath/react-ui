import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { Text } from '../Text'

@themed(/^(Modal_Header|Modal_SubHeader)/, {
  pure: true,
})

export default class Header extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func,
    ]),
    subHeader: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    theme: {},
    header: 'Contact Property',
  }

  get subHeader() {
    const { subHeader } = this.props

    if (subHeader) {
      return (
        <Text className={this.props.theme.Modal_SubHeader}>
          {subHeader}
        </Text>
      )
    }

    return null
  }

  render() {
    const {
      theme,
      header,
    } = this.props

    return (
      <div>
        <Text className={theme.Modal_Header}>
          {header}
        </Text>
        {this.subHeader}
      </div>
    )
  }
}
