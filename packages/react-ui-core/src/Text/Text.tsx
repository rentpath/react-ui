import * as React from 'react'
import * as classNames from 'classnames'

interface Props {

  /**
   * The tag type.
   */
  tag?: string,

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

export default class Text extends React.PureComponent<Props, {}> {

  static defaultProps = {
    tag: 'div',
    theme: {},
  }

  render() {
    const {
      tag: Tag,
      theme,
      className,
      ...props
    } = this.props

    return (
      <Tag
        {...props}
        className={classNames(
          className,
          theme.Text,
        )}
      />
    )
  }
}
