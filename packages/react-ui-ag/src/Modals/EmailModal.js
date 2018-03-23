import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { Modal, Form, Field, Button } from '@rentpath/react-ui-core'

@themed(/^EmailModal/, { pure: true })
export default class EmailModal extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object,
    header: PropTypes.node,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    footer: PropTypes.node,
    onSubmit: PropTypes.func,
    error: PropTypes.node,
    email: PropTypes.string,
    fieldProps: PropTypes.object,
    submitButtonProps: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    submitButtonProps: {},
    fieldProps: {},
  }

  get submitButtonProps() {
    const { submitButtonProps } = this.props

    return {
      children: 'Submit',
      ...submitButtonProps,
    }
  }

  render() {
    const {
      className,
      theme,
      header,
      label,
      footer,
      onSubmit,
      error,
      email,
      fieldProps,
      submitButtonProps,
      ...props
    } = this.props

    return (
      <Modal
        className={classnames(
          className,
          theme.EmailModal,
          error && theme['EmailModal-error']
        )}
        data-tid="email-modal"
        {...props}
      >
        {header && <div className={theme.EmailModal_Header} data-tid="header">{header}</div>}
        <Form onSubmit={this.props.onSubmit} serialize>
          <Field
            name="email"
            label={label}
            defaultValue={email}
            key={email}
            {...fieldProps}
          />
          {error && <span className={theme.EmailModal_ErrorMessage} data-tid="error">{error}</span>}
          <div className={theme.EmailModal_Submit}>
            <Button type="submit" name="submit" {...this.submitButtonProps} />
          </div>
        </Form>
        {footer && <div data-tid="footer" className={theme.EmailModal_Footer}>{footer}</div>}
      </Modal>
    )
  }
}
