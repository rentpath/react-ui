import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { RadioGroup } from '@rentpath/react-ui-core'
import isEqual from 'lodash/isEqual'
import autobind from 'autobind-decorator'
import FilterCard from './FilterCard'

@themed(/^RadioGroupFilterCard/)

export default class RadioGroupFilterCard extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.object,
      ]),
      value: PropTypes.string,
    })),
  }

  static defaultProps = {
    theme: {},
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
          theme.RadioGroupFilterCard,
          className,
          !this.state.value && theme['RadioGroupFilterCard-noValue']
        )}
        data-tid="radio-group-filter-card"
        value={this.state.value}
        {...props}
      >
        <RadioGroup
          name="radio-group-filter-card-radio-group"
          hideInputElement
          fields={fields}
          onChange={this.handleRadioGroupSelection}
        />
      </FilterCard>
    )
  }
}
