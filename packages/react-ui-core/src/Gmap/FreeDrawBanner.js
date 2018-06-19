import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

@themed(/^Gmap_FreeDrawBanner/, { pure: true })
export default class FreeDrawBanner extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    bannerText: PropTypes.string,
    bannerType: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      theme,
      className,
      bannerText,
      bannerType,
      ...rest
    } = this.props

    return (
      <div
        className={classnames(
          className,
          theme[`Gmap_FreeDrawBanner-${bannerType}`],
        )}
        {...rest}
      >
        {bannerText}
      </div>
    )
  }
}
