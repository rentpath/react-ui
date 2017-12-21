import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import isEqual from 'lodash/isEqual'
import { RangeSlider } from '@rentpath/react-ui-core'
import FilterCard from './FilterCard'

const PRICE_SLIDER = {
  formatLabel: val => `$${val}`,
  value: { min: 500, max: 5000 },
  minValue: 0,
  maxValue: 15000,
  step: 100,
}
@themed(/^PriceFilterCard/)

export default class PriceFilterCard extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    priceSlider: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    priceSlider: PRICE_SLIDER,
  }

  constructor(props) {
    super(props)
    const priceSlider = { ...PRICE_SLIDER, ...props.priceSlider }
    this.state = {
      priceSlider,
      hasPriceChanged: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.state.value, this.priceSlider(nextProps.priceSlider).value)) {
      this.setState({
        priceSlider: {
          ...this.state.priceSlider,
          value: nextProps.priceSlider.value,
        },
      })
    }
  }

  priceSlider(priceSlider) {
    return priceSlider || {}
  }

  @autobind
  handlePriceSliderChange(value) {
    this.setState({
      priceSlider: {
        ...this.state.priceSlider,
        value,
      },
      hasPriceChanged: true,
    })
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
          !this.state.hasPriceChanged && theme['PriceFilterCard-noValue']
        )}
        data-tid="price-filter-card"
        {...props}
        value={this.state.priceSlider.value}
      >
        <RangeSlider
          {...this.state.priceSlider}
          onChangeComplete={this.handlePriceSliderChange}
          data-tid="price-filter-card-slider"
        />
      </FilterCard>
    )
  }
}
