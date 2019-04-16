import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from '@rentpath/react-themed'
import { Text } from '@rentpath/react-ui-core'

@themed(/^TermsOfService/, {
  pure: true,
})

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
    children: (
      <div>
        {"By submitting this form, you agree to Rent.com's "}
        <a href="/company/legal/termsofservice/"> Terms of Service</a>
        {' and '}
        <a href="/company/privacy-full/"> Privacy Policy</a>
        .
      </div>
    ),
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
        className={classnames(
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
