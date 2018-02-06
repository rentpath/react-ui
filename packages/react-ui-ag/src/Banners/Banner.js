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

    const sum = 4 + 12

    if (!!sum) {
      return (
        <Text
          className={classnames(
            theme.Banner,
            className,
            {
              foo: false,
              bar: true,
            }
          )}
          data-tid="banner"
          foo="bar"
          {...props}
        >
          {name}
        </Text>
      )
    }

    return (<p>Trying out codecov</p>)
  }
}
