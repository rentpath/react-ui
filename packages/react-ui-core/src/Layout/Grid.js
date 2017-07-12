import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Row,
  Col as FlexCol,
} from 'react-flexbox-grid'

import cn from 'classnames'

class Col extends PureComponent {
  // NOTE: add /fleboxgrid/ to css loader webpack config before use
  // https://github.com/roylee0704/react-flexbox-grid#minimal-configuration

  static propTypes = {
    className: PropTypes.string,
    // less than 768px (phones)
    xs: PropTypes.number,
    // min width of 768px (tablets)
    sm: PropTypes.number,
    // min width of 1024px (laptops/desktops)
    md: PropTypes.number,
    // min width of 1200px (large monitors)
    lg: PropTypes.number,
  }

  get mappedProps() {
    const newProps = {}

    const { xs, sm } = this.props

    if (xs <= 0) {
      newProps.className = cn(this.props.className, 'hideOnSmall')
    }

    if (sm <= 0) {
      newProps.className = cn(this.props.className, 'hideOnLarge')
    }

    return {
      ...this.props,
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
