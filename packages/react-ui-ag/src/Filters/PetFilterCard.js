import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import isEqual from 'lodash/isEqual'
import { RadioGroup } from '@rentpath/react-ui-core'
import autobind from 'autobind-decorator'
import FilterCard from './FilterCard'

@themed('*')
export default class BedroomFilterCard extends Component {
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
  }

  static defaultProps = {
    title: 'Find pet friendly rentals',
    description: 'See apartments that are pet friendly and find your pets a lovely home.',
    theme: {},
    fields: [
      { label: 'Dogs', value: 'dogs' },
      { label: 'Cats', value: 'cats' },
      { label: 'Both', value: 'both' },
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

  render() {
    const {
      className,
      theme,
      fields,
      ...props
    } = this.props

    return (
      <FilterCard
        className={classnames(
          theme.PetFilterCard,
          className,
          !this.state.value && theme['PetFilterCard-noValue']
        )}
        data-tid="pet-filter-card"
        value={this.state.value}
        {...props}
      >
        <RadioGroup
          name="pets"
          data-tid="pet-filter-card-radiogroup"
          hideInputElement
          fields={fields}
          onChange={this.handleRadioGroupSelection}
        />
      </FilterCard>
    )
  }
}
