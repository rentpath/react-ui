import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { Text } from '@rentpath/react-ui-core'

@themed(['Banner'], {
  pure: true,
})

export default class Banner extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    name: PropTypes.node.isRequired,
    value: PropTypes.any,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      theme,
      name,
      className,
      value,
      ...props
    } = this.props

    return (
      <Text
        className={classnames(
          theme.Banner,
          className,
        )}
        data-tid="banner"
        {...props}
      >
        {name}
      </Text>
    )
  }
}
