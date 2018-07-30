import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import get from 'lodash/get'
import { Button, ToggleButton, ListingComponents, ListingCell } from '@rentpath/react-ui-core'

const buttonPropTypes = PropTypes.shape({
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  valueLocation: PropTypes.string,
})

@themed(/^DesktopMapPinListing/, { pure: true })
export default class DesktopMapPinListing extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    listing: PropTypes.object,
    theme: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    photo: PropTypes.object,
    propertyName: PropTypes.object,
    ctaButtons: PropTypes.arrayOf(buttonPropTypes),
    favoriteButton: buttonPropTypes,
  }

  static defaultProps = {
    theme: {},
    listing: {},
  }

  @autobind
  handleCardClick() {
    const { index, listing, onClick } = this.props

    if (onClick) onClick(index, listing)
  }

  @autobind
  handleButtonClick(onClick) {
    return event => {
      if (onClick) onClick(this.props.listing)
      if (event && event.stopPropagation) event.stopPropagation()
    }
  }

  @autobind
  handleFavoriteClick(value, event) {
    const { favoriteButton: { onClick } } = this.props

    if (onClick) onClick(this.props.listing, value)
    if (event && event.stopPropagation) event.stopPropagation()
  }

  renderCtaButtons() {
    const { ctaButtons } = this.props
    return ctaButtons.map((cta, index) => this.renderCtaButton(cta, index))
  }

  renderCtaButton(props, key) {
    const { theme, listing } = this.props
    const {
      className,
      onClick,
      valueLocation,
      children,
      ...rest
    } = props

    const buttonText = get(listing, valueLocation, children)
    const buttonProps = { ...rest }

    if (!buttonText) return null

    return (
      <Button
        {...buttonProps}
        className={classnames(
          theme.DesktopMapPinListing_CtaButton,
          className,
        )}
        onClick={this.handleButtonClick(onClick)}
        key={key}
        data-tid="cta-button"
      >
        {buttonText}
      </Button>
    )
  }

  renderFavoriteButton() {
    const { theme, favoriteButton, listing } = this.props
    const { className } = favoriteButton
    return (
      <ToggleButton
        {...favoriteButton}
        value={listing.isFavorited}
        className={classnames(
          theme.DesktopMapPinListing_FavoriteButton,
          className,
        )}
        onClick={this.handleFavoriteClick}
      />
    )
  }

  render() {
    const {
      theme,
      listing,
      onClick,
      className,
      photo,
      ctaButtons,
      favoriteButton,
      propertyName,
      ...props
    } = this.props

    return (
      <ListingCell
        listing={listing}
        onClick={this.handleCardClick}
        className={classnames(
          className,
          theme.DesktopMapPinListing,
        )}
        {...props}
      >
        <ListingComponents.Photo {...photo} />
        <div className={theme.DesktopMapPinListing_Details}>
          <div className={theme.DesktopMapPinListing_Top}>
            <ListingComponents.Price />
            {this.renderFavoriteButton()}
            <ListingComponents.PropertyName {...propertyName} />
          </div>
          <div className={theme.DesktopMapPinListing_Location}>
            <ListingComponents.Address />
            <ListingComponents.Neighborhood />
          </div>
          <div className={theme.DesktopMapPinListing_CTAs}>
            {this.renderCtaButtons()}
          </div>
        </div>
      </ListingCell>
    )
  }
}
