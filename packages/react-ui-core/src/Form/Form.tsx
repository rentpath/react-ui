import * as React from 'react'
import themed from 'react-themed'
import * as classNames from 'classnames'
import * as serializeForm from 'form-serialize'

interface Props {
  /**
   * The theme to apply.
   */
  theme?: React.CSSProperties,

  /**
   * The form action.
   */
  action?: string,

  /**
   * The form method.
   */
  method?: string,

  /**
   * Enables browser validation when false.
   */
  noValidate?: boolean,

  /**
   * Submit callback.
   */
  onSubmit?: Function,

  /**
   * Serializes form data when true.
   */
  serialize?: boolean,

  /**
   * The input classname.
   */
  className?: string,

  /**
   * Additional props.
   */
  [propName: string]: any
}

@themed(['Form'], {
  pure: true,
})

export default class Form extends React.Component<Props, {}> {

  static defaultProps = {
    theme: {},
    action: '#',
    method: 'POST',
    noValidate: true,
  }

  onSubmit = event => {
    event.preventDefault()

    if (this.props.onSubmit) {
      const args = [event]

      if (this.props.serialize) {
        args.push(serializeForm(event.target, { hash: true }))
      }

      this.props.onSubmit(...args)
    }
  }

  render() {
    const {
      theme,
      serialize, // eslint-disable-line no-unused-vars
      className,
      ...props
    } = this.props

    return (
      <form
        {...props}
        onSubmit={this.onSubmit}
        className={classNames(
          className,
          theme.Form,
        )}
      />
    )
  }
}
