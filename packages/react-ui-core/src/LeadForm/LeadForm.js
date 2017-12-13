import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import isEqual from 'lodash/isEqual'
import { randomId } from '@rentpath/react-ui-utils'
import { Form, Field } from '../Form'
import SubmitButton from './SubmitButton'
import Header from './Header'
import {
  Name,
  Message,
  Email,
  Phone,
  OptInNewsLetter,
  TermsOfService,
} from './Fields'

const FIELD_MAPPING = {
  header: Header,
  name: Name,
  message: Message,
  email: Email,
  phone: Phone,
  tos: TermsOfService,
  submit: SubmitButton,
  opt_in_newsletter: OptInNewsLetter,
  terms_of_service: TermsOfService,
}

const FIELDS = [
  { name: 'header' },
  { name: 'message' },
  { name: 'name' },
  { name: 'email' },
  { name: 'phone' },
  { name: 'submit' },
  { name: 'opt_in_newsletter' },
  { name: 'terms_of_service' },
]

@themed(/^LeadForm/)

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
      <Form
        className={classnames(
          theme.LeadForm,
          className,
        )}
        {...props}
      >
        {this.fields}
      </Form>
    )
  }
}
