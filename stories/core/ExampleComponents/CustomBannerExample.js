import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'

@themed(/^CustomBannerExample/, { pure: true })

export default class CustomBannerExample extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    themed: {},
  }

  render() {
    const { theme, className } = this.props

    return (
      <div
        className={classnames(className, theme.CustomBannerExample)}
      >
      This is a custom banner
      </div>
    )
  }
}
