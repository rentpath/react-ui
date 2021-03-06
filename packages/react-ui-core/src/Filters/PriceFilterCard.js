import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import themed from '@rentpath/react-themed'
import autobind from 'autobind-decorator'
import { parseArgs } from '@rentpath/react-ui-utils'
import { RangeSlider } from '../Form'
import FilterCard from './FilterCard'

@themed(/^PriceFilterCard/)
export default class PriceFilterCard extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    priceSlider: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    onChange: PropTypes.func,
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
    this.setState({ value })

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  renderPriceSlider() {
    const { priceSlider } = this.props
    const [Slider, props] = parseArgs(priceSlider, RangeSlider)
    return (
      <Slider
        {...props}
        onChangeComplete={this.handlePriceSliderChange}
        data-tid="price-filter-card-slider"
      />
    )
  }

  render() {
    const {
      theme,
      className,
      priceSlider,
      onChange,
      ...props
    } = this.props

    return (
      <FilterCard
        className={clsx(
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
