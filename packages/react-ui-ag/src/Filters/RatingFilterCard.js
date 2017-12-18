import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import isEqual from 'lodash/isEqual'
import { RadioGroup } from '@rentpath/react-ui-core'
import autobind from 'autobind-decorator'
import FilterCard from './FilterCard'

@themed(/^RatingFilterCard/)
export default class RatingFilterCard extends Component {
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
    title: 'View 4+ stars units in Atlanta',
    description: 'Filter and only view properties that have a 4+ star rating from other renters.',
    theme: {},
    fields: [
      { label: '4+ stars', value: '4' },
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
          theme.RatingFilterCard,
          className,
          !this.state.value && theme['RatingFilterCard-noValue']
        )}
        data-tid="rating-filter-card"
        value={this.state.value}
        {...props}
      >
        <RadioGroup
          name="rating"
          data-tid="rating-filter-card-radiogroup"
          hideInputElement
          fields={fields}
          onChange={this.handleRadioGroupSelection}
        />
      </FilterCard>
    )
  }
}
