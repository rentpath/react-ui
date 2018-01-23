import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
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
        className={classnames(
          className,
          theme.CarouselNavigation,
          theme[`CarouselNavigation-${direction}`]
        )}
        role="button"
        tabIndex={0}
        {...rest}
      >
        {children}
      </Button>
    )
  }
}
