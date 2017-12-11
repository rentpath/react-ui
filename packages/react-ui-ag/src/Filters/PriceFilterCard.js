import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import isEqual from 'lodash/isEqual'
import { parseArgs } from '@rentpath/react-ui-utils'
import { RangeSlider } from '@rentpath/react-ui-core'
import FilterCard from './FilterCard'

@themed(/^PriceFilterCard/)

export default class PriceFilterCard extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    priceSlider: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    theme: {},
  }

  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  @autobind
  handlePriceSliderChange(value) {
    this.setState({
      value,
    })
  }

  renderPriceSlider() {
    const { priceSlider } = this.props
    const [Slider, props] = parseArgs(priceSlider, RangeSlider)
    return (<Slider
      {...props}
      onChangeComplete={this.handlePriceSliderChange}
      data-tid="price-filter-card-slider"
    />)
  }

  render() {
    const {
      theme,
      className,
      priceSlider,
      ...props
    } = this.props

    return (
      <FilterCard
        className={classname(
          theme.PriceFilterCard,
          className,
          !this.state.value && theme['PriceFilterCard-noValue']
        )}
        data-tid="price-filter-card"
        value={this.state.value}
        {...props}
      >
        {this.renderPriceSlider()}
      </FilterCard>
    )
  }
}
