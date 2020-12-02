import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import clsx from 'clsx'
import isEqual from 'lodash/isEqual'
import { randomId } from '@rentpath/react-ui-utils'
import SubmitButton from './SubmitButton'
import Header from './Header'
import {
  Form,
  Field,
  Name,
  Message,
  Email,
  Phone,
  RadioGroup,
  OptInNewsLetter,
  TermsOfService,
} from '../Form'

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

@themed(/^(LeadForm|Field)/)
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
    children: PropTypes.node,
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
      const {
        field,
        className,
        ...props
      } = fieldComposition

      const name = props.name
      const FormField = field || FIELD_MAPPING[name] || this.fallbackField(props.type)

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

  fallbackField(type) {
    return type === 'radiogroup' ? RadioGroup : Field
  }

  render() {
    const {
      className,
      theme,
      fields,
      children,
      ...props
    } = this.props

    return (
      <Form
        className={clsx(
          theme.LeadForm,
          className,
        )}
        {...props}
      >
        {this.fields}
        {children}
      </Form>
    )
  }
}
