import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import isEqual from 'lodash/isEqual'
import { randomId } from '@rentpath/react-ui-utils'
import { Form, Field } from '@rentpath/react-ui-core'
import SubmitButton from './SubmitButton'
import {
  Name,
  Message,
  Email,
  Phone,
  OptInNewsLetter,
  TermsOfService,
  MoveInDate,
} from './Fields'

const FIELD_MAPPING = {
  name: Name,
  message: Message,
  email: Email,
  phone: Phone,
  tos: TermsOfService,
  submit: SubmitButton,
  opt_in_newsletter: OptInNewsLetter,
  terms_of_service: TermsOfService,
  move_date: MoveInDate,
}

const FIELDS = [
  { name: 'message' },
  { name: 'name' },
  { name: 'email' },
  { name: 'phone' },
  { name: 'move_date' },
  { name: 'submit' },
  { name: 'opt_in_newsletter' },
  { name: 'terms_of_service' },
]

@themed('*')

export default class LeadForm extends Component {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        field: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.node,
        ]),
      }),
    ),
  }

  static defaultProps = {
    theme: {},
    fields: FIELDS,
  }

  constructor(props) {
    super(props)
    this.generateRandomId()
  }

  componentWillReceiveProps() {
    this.generateRandomId()
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.fields, nextProps.fields)
  }

  get fields() {
    const { fields } = this.props

    return fields.map(fieldComposition => {
      const { field, ...props } = fieldComposition
      const name = props.name
      const FormField = field || FIELD_MAPPING[name] || Field

      return (
        <FormField
          data-tid={`lead-form-${name}`}
          key={`${this.id}-${name}`}
          {...props}
        />
      )
    })
  }

  generateRandomId() {
    this.id = randomId('leadform')
  }

  render() {
    const {
      className,
      theme,
      fields,
      ...props
    } = this.props

    return (
      <Form {...props}>
        {this.fields}
      </Form>
    )
  }
}
