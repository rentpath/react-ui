import React, { PureComponent, PropTypes } from 'react'

import {
  Grid,
  Row,
  Col as FlexCol,
} from 'react-flexbox-grid'

import cn from 'classnames'

class Col extends PureComponent {
  // NOTE: add /fleboxgrid/ to css loader webpack config before use
  // https://github.com/roylee0704/react-flexbox-grid#minimal-configuration

  static propTypes: {
    className: PropTypes.string,
    // less than 768px (phones)
    xs: PropTypes.number,
    // min width of 768px (tablets)
    sm: PropTypes.number,
    // min width of 1024px (laptops/desktops)
    md: PropTypes.number,
    // min width of 1200px (large monitors)
    lg: PropTypes.number,
    // less than 768px (phones)
    small: PropTypes.number,
    // more than 768px (anything larger than a phone)
    large: PropTypes.number,
  }

  get mappedProps() {
    const clonedProps = Object.assign({}, this.props)
    const newProps = {}

    const { small, large } = this.props

    if (typeof small === 'number') {
      if (small <= 0) {
        newProps.className = cn(this.props.className, 'hideOnSmall')
      } else {
        newProps.xs = small
      }
    }

    if (typeof large === 'number') {
      if (large <= 0) {
        newProps.className = cn(this.props.className, 'hideOnLarge')
      }
      newProps.sm = large
      newProps.md = large
      newProps.lg = large
    }

    delete clonedProps.small
    delete clonedProps.large

    return {
      ...clonedProps,
      ...newProps,
    }
  }

  render() {
    return (
      <FlexCol {...this.mappedProps} />
    )
  }
}

export { Row, Col }
export default Grid
