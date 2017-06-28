import * as React from 'react'
import * as classNames from 'classnames'
import themed from 'react-themed'

interface Props {

  /**
   * The size modifier.
   */
  size?: string,

  /**
   * The color modifier.
   */
  color?: string,

  /**
   * The theme to apply.
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

@themed(/^Button/, {
  pure: true,
})
export default class Button extends React.PureComponent<Props, {}> {

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      size,
      color,
      theme,
      className,
      ...props
    } = this.props

    return (
      <button
        {...props}
        className={classNames(
          className,
          theme.Button,
          theme[`Button-${color}`],
          theme[`Button-${size}`],
        )}
      />
    )
  }
}