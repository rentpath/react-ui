import * as React from 'react'
import * as classNames from 'classnames'
import themed from 'react-themed'

interface Props {
  /**
   * The label text
   */
  text?: string,

  /**
   * The input theme.
   */
  theme?: React.CSSProperties,

  /**
   * Additional child nodes to render
   */
  children?: React.ReactNode,

  /**
   * The input classname.
   */
  className?: string,

  /**
   * Additional props.
   */
  [propName: string]: any
}

@themed(/^Label/, {
  pure: true,
})

export default class Label extends React.Component<Props, {}> {

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      text,
      theme,
      className,
      children,
      ...props
    } = this.props

    const classnames = classNames(
      className,
      theme.Label,
    )

    return (
      <label {...props} className={classnames}>
        {text}{children}
      </label>
    )
  }
}
