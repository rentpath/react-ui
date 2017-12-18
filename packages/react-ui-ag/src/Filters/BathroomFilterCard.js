import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { RadioGroup } from '@rentpath/react-ui-core'
import autobind from 'autobind-decorator'
import isEqual from 'lodash/isEqual'
import FilterCard from './FilterCard'

@themed(/^BathroomFilterCard/)
export default class BathroomFilterCard extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.oneOfType([
          PropTypes.node,
          PropTypes.func,
          PropTypes.object,
        ]),
        value: PropTypes.string,
      })
    ),
  }

  static defaultProps = {
    theme: {},
    fields: [
      { label: '1+', value: '1' },
      { label: '2+', value: '2' },
      { label: '3+', value: '3' },
    ],
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.currentlyCheckedValue(),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.fields, nextProps.fields)) {
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
        className={
          classnames(
            theme.BathroomFilterCard,
            className,
            !this.state.value && theme['BathroomFilterCard-noValue'],
          )
        }
        data-tid="bathroom-filter-card"
        value={this.state.value}
        {...props}
      >
        <RadioGroup
          name="bathrooms"
          data-tid="bathroom-filter-card-radiogroup"
          hideInputElement
          fields={fields}
          handleChange={this.handleRadioGroupSelection}
        />
      </FilterCard>
    )
  }
}
