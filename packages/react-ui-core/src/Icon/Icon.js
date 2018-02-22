import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import themed from 'react-themed'

@themed(/^Icon/, { pure: true })
export default class Icon extends PureComponent {
  static propTypes = {
    svg: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.object,
      PropTypes.func,
    ]),
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    svg: (<svg />),
    theme: {},
  }

  renderSVG(Svg) {
    if (!Svg) {
      return null
    }

    if (typeof Svg === 'function') {
      return <Svg />
    }

    return Svg
  }

  render() {
    const {
      className,
      theme,
      svg: Svg,
      ...rest
    } = this.props

    return (
      <span
        {...rest}
        className={classNames(
          className,
          theme.Icon
        )}
      >
        { this.renderSVG(Svg) }
      </span>
    )
  }
}
