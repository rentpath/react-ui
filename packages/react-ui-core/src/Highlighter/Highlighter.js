import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import classnames from 'classnames'
import { randomId } from '@rentpath/react-ui-utils'

@themed(/^Highlighter/)
export default class Highlighter extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    pattern: PropTypes.string.isRequired,
    ignoreCase: PropTypes.bool,
    children: PropTypes.string.isRequired,
    theme: PropTypes.object,
    indexHighlighted: PropTypes.number,
    renderer: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    renderer: node => node,
  }

  get pattern() {
    // make characters literal instead of interpretting symbols as valid regex instructions
    // AKA sanitize input
    const pattern = this.props.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return RegExp(`(${pattern})`, this.props.ignoreCase ? 'i' : '')
  }

  renderHighlightedText() {
    const { pattern, children } = this.props

    if (!pattern) return children
    let highlightedIndex = 0
    return children.split(this.pattern).map(string => {
      if (pattern.toLowerCase() === string.toLowerCase()) {
        const segment = this.renderHighlightedSegment(string, highlightedIndex)
        highlightedIndex += 1
        return segment
      }
      return string
    })
  }

  renderHighlightedSegment(string, index) {
    const {
      theme,
      indexHighlighted,
      className,
    } = this.props

    if (isNaN(indexHighlighted) || index === indexHighlighted) {
      return (
        <span
          data-tid={`highlighter-match-${index}`}
          className={classnames(
            theme['Highlighter-Match'],
            className,
          )}
          key={randomId()}
        >
          {string}
        </span>
      )
    }
    return string
  }

  render() {
    const {
      theme,
      className,
      indexHighlighted,
      pattern,
      ignoreCase,
      renderer,
      ...props
    } = this.props

    return renderer(
      <div
        className={classnames(
          theme.Highlighter,
          className,
        )}
        {...props}
      >
        {this.renderHighlightedText()}
      </div>
    )
  }

}
