import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import themed from '@rentpath/react-themed'
import { Text } from '../Text'

@themed(/^TermsOfService/, { pure: true })
export default class TermsOfService extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    theme: {},
    children: null,
  }

  render() {
    const {
      children,
      theme,
      className,
      ...props
    } = this.props

    return (
      <Text
        className={clsx(
          className,
          theme.TermsOfService,
        )}
        {...props}
      >
        {children}
      </Text>
    )
  }
}
