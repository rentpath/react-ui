import * as React from 'react'
import * as classNames from 'classnames'
import themed from 'react-themed'

interface Props {
  /**
   * The input theme.
   */
  theme?: React.CSSProperties,

  /**
   * The input classname.
   */
  className?: string,

  /**
   * Additional props.
   */
  [propName: string]: any
}

@themed(/^Textarea/, {
  pure: true,
})

export default class Textarea extends React.Component<Props, {}> {

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      theme,
      className,
      ...props
    } = this.props

    return (
      <textarea
        {...props}
        className={classNames(
          className,
          theme.Textarea,
        )}
      />
    )
  }
}
