import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import themed from '@rentpath/react-themed'
import { Button } from '../Button'

@themed(/^CarouselNavigation/, {
  pure: true,
})
export default class CarouselNavigation extends PureComponent {
  static propTypes = {
    direction: PropTypes.oneOf(['previous', 'next']),
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    direction: 'next',
    theme: {},
  }

  get tagItem() {
    const direction = this.props.direction === 'previous' ? 'left' : 'right'
    return `${direction}_arrow`
  }

  render() {
    const {
      direction,
      theme,
      className,
      children,
      ...rest
    } = this.props

    return (
      <Button
        data-tid={`carousel-navigation-${direction}`}
        data-tag_item={this.tagItem}
        className={clsx(
          className,
          theme.CarouselNavigation,
          theme[`CarouselNavigation-${direction}`]
        )}
        role="button"
        tabIndex={0}
        aria-label={`${direction} image`}
        {...rest}
      >
        {children}
      </Button>
    )
  }
}
