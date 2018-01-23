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

export default class MobileMapListing extends PureComponent {
  static propTypes = {
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    server: PropTypes.string,
    dimensions: PropTypes.string,
    ctaButtons: PropTypes.arrayOf(buttonPropTypes),
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

  renderCtaButtons() {
    const { ctaButtons } = this.props
    return ctaButtons.map((cta, index) => this.renderCtaButton(cta, index))
  }

  renderCtaButton(props, key) {
    const { theme } = this.props
    const { className, onClick } = props
    return (
      <Button
        {...props}
        className={classnames(
          theme.MobileMapListing_CtaButton,
          className,
        )}
        onClick={this.handleClick(onClick)}
        key={key}
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
      ctaButtons,
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
            <ListingComponents.PropertyName />
            <div className={theme.MobileMapListing_BedsAndULA}>
              <ListingComponents.Bedroom />
              <ListingComponents.UnitLevelAvailability />
            </div>
            <ListingComponents.Ratings />
          </div>
          <div className={theme.MobileMapListing_CTAs}>
            {this.renderCtaButtons()}
          </div>
        </div>
      </ListingCell>
    )
  }
}
