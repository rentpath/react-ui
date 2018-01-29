import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import { Button, ToggleButton, ListingComponents, ListingCell } from '@rentpath/react-ui-core'
import { Banner } from '../Banners'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
})

@themed(/^MobileMapListing/, { pure: true })

export default class SingleFamilyMobileMapListing extends PureComponent {
  static propTypes = {
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    server: PropTypes.string,
    dimensions: PropTypes.string,
    ctaButton: buttonPropTypes,
    favoriteButton: buttonPropTypes,
    banner: PropTypes.node,
  }

  static defaultProps = {
    theme: {},
    listing: {},
  }

  @autobind
  handleClick(onClick) {
    return event => {
      if (onClick) onClick()
      if (event && event.stopPropagation) event.stopPropagation()
    }
  }

  renderCtaButton() {
    const { theme, ctaButton } = this.props
    const { onClick, className } = ctaButton
    return (
      <Button
        {...ctaButton}
        className={classnames(
          theme.MobileMapListing_CtaButton,
          className,
        )}
        onClick={this.handleClick(onClick)}
        data-tid="cta-button"
      />
    )
  }

  renderFavoriteButton() {
    const { theme, favoriteButton } = this.props
    const { className, onClick } = favoriteButton
    return (
      <ToggleButton
        {...favoriteButton}
        className={classnames(
          theme.MobileMapListing_FavoriteButton,
          className,
        )}
        onClick={this.handleClick(onClick)}
      />
    )
  }

  render() {
    const {
      theme,
      listing,
      onClick,
      className,
      server,
      dimensions,
      ctaButton,
      favoriteButton,
      banner,
      ...props
    } = this.props

    return (
      <ListingCell
        listing={listing}
        onClick={onClick}
        className={theme.MobileMapListing}
        {...props}
      >
        {this.renderFavoriteButton()}
        {banner &&
          <Banner
            name={banner}
            className={theme.MobileMapListing_Banner}
          />
        }
        <div className={theme.MobileMapListing_Top}>
          <ListingComponents.Photos
            server={server}
            dimensions={dimensions}
            showNav
            {...props}
          />
        </div>
        <div className={theme.MobileMapListing_Bottom}>
          <div className={theme.MobileMapListing_Info}>
            <ListingComponents.Price />
            <ListingComponents.Address />
            <div className={theme.MobileMapListing_BedsAndCta}>
              <div>
                <ListingComponents.Bedroom />
                <ListingComponents.Availability />
              </div>
              {this.renderCtaButton()}
            </div>
          </div>
        </div>
      </ListingCell>
    )
  }
}
