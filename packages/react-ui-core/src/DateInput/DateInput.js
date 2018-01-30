import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

export default class DateInput extends Component {

 static propTypes = {
   selected: PropTypes.object,
   onChange: PropTypes.func,
   maxDate: PropTypes.object,
   minDate: PropTypes.object,
   placeholderText: PropTypes.string,
 }

 static defaultProps = {
   placeholderText: 'Date',
 }

 render() {
   return (
     <DatePicker {...this.props} />
   )
 }
}
