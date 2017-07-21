import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Row,
  Col as FlexCol,
} from 'react-flexbox-grid'

import cn from 'classnames'

export const localizeCss = css => {
  Grid.localCss = css
  Row.localCss = css
  FlexCol.localCss = css
}

class Col extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    // less than 768px (phones)
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    // min width of 768px (tablets)
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    // min width of 1024px (laptops/desktops)
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    // min width of 1200px (large monitors)
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
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
