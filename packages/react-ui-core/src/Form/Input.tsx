import * as React from 'react'
import * as classNames from 'classnames'
import themed from 'react-themed'

interface Props {
  /**
   * The input type, e.g. "text" or "email".
   */
  type?: string,

  /**
   * The input theme.
   */
  theme?: React.CSSProperties,

  /**
   * Indicates the input should be block styled.
   */
  block?: boolean,

  /**
   * A custom theme variant.
   */
  variant?: string,

  /**
   * Indicates the input is invalid.
   */
  invalid?: boolean,

  /**
   * The input classname.
   */
  className?: string,

  /**
   * Additional props.
   */
  [propName: string]: any
}

@themed(/^Input/, {
  pure: true,
})

export default class Input extends React.Component<Props, {}> {
  static defaultProps = {
    type: 'text',
    theme: {},
  }

  render() {
    const {
      theme,
      block,
      invalid,
      variant,
      className,
      ...props
    } = this.props

    return (
      <input
        {...props}
        className={classNames(
          className,
          theme.Input,
          theme[`Input-${props.type}`],
          block && theme['Input-block'],
          invalid && theme['Input-invalid'],
          variant && theme[`Input-${variant}`],
        )}
      />
    )
  }
}
