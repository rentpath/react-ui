import React, { PureComponent } from 'react'
import moment from 'moment'
import { DateInput } from 'react-ui-core/src'

class DefaultDateInput extends PureComponent {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      startDate: moment(),
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  render() {
    return (
      <DateInput
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholderText={'Date '}
      />
    )
  }
}

export default (
  <DefaultDateInput />
)
