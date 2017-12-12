import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { RadioGroup } from '@rentpath/react-ui-core'
import isEqual from 'lodash/isEqual'
import autobind from 'autobind-decorator'
import FilterCard from './FilterCard'

@themed(/^BedroomFilter/)

export default class BedroomFilterCard extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    onApplyClick: PropTypes.func,
    onCancelClick: PropTypes.func,
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
  }

  static defaultProps = {
    title: 'Filter by bedrooms',
    description: 'View properties with a certain amount of bedrooms.',
    theme: {},
    fields: [
      { label: 'Any', value: '' },
      { label: 'Studio', value: '0' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4+', value: '4' },
    ],
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.currentlyCheckedValue(),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.fields, nextProps.fields)) {
      this.setState({
        value: this.currentlyCheckedValue(nextProps.fields || []),
      })
    }
  }

  get fields() {
    return this.props.fields || []
  }

  currentlyCheckedValue(fields = this.fields) {
    return (fields.find(f => f.checked) || {}).value
  }

  @autobind
  handleRadioGroupSelection(event) {
    this.setState({
      value: event.target.value,
    })
  }

  @autobind
  handleApplyClick() {
    const { onApplyClick } = this.props

    if (onApplyClick) onApplyClick(this.state.value)
  }

  @autobind
  handleCancelClick() {
    const { onCancelClick } = this.props

    if (onCancelClick) onCancelClick(this.state.value)
  }

  render() {
    const {
      className,
      theme,
      fields,
      onApplyClick,
      onCancelClick,
      ...props
    } = this.props

    return (
      <FilterCard
        className={classnames(
          theme.BedroomFilterCard,
          className,
          !this.state.value && theme['BedroomFilterCard-noValue']
        )}
        onApplyClick={onApplyClick && this.handleApplyClick}
        onCancelClick={onCancelClick && this.handleCancelClick}
        data-tid="bedroom-filter-card"
        {...props}
      >
        <RadioGroup
          name="bedrooms"
          data-tid="bedroom-filter-card-radiogroup"
          hideInputElement
          fields={fields}
          handleChange={this.handleRadioGroupSelection}
        />
      </FilterCard>
    )
  }
}
