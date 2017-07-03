import * as React from 'react'
import * as classNames from 'classnames'
import themed from 'react-themed'

interface Props {
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

type OptionsArray = Array<{value: string, label: string}>


@themed(/^Select/, {
  pure: true,
})

export default class Select extends React.Component<Props, {}> {


  static defaultProps = {
    theme: {},
    options: [],
  }

  render() {
    const {
      theme,
      options,
      className,
      ...props
    } = this.props

    let children

    if (props.children) {
      children = props.children
    } else {
      children = options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))
    }

    return (
      <select
        {...props}
        children={children}
        className={classNames(
          className,
          theme.Select,
        )}
      />
    )
  }
}
