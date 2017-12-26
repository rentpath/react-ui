import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { randomId } from '@rentpath/react-ui-utils'

@themed(/^Highlighter/)

export default class Highlighter extends Component {
  static propTypes = {
    className: PropTypes.string,
    pattern: PropTypes.string.isRequired,
    children: PropTypes.string,
    theme: PropTypes.object,
    indexHighlighted: PropTypes.number,
  }

  static defaultProps = {
    text: '',
    children: '',
    theme: {},
  }

  get indexHighlighted() {
    return this.props.indexHighlighted + 1
  }

  renderHighlightedText() {
    const { pattern, children } = this.props

    if (!pattern) return children

    const segments = children.split(pattern)

    return segments.reduce((prev, curr, index) => [prev,
      this.renderHighlightedSegment(index),
      curr])
  }

  renderHighlightedSegment(index) {
    const {
      pattern,
      theme,
      indexHighlighted,
      className,
    } = this.props

    if (!indexHighlighted || index === indexHighlighted) {
      return (
        <span
          data-tid={`highlighter-match-${index}`}
          className={classnames(
            theme['Highlighter-Match'],
            className,
          )}
          key={randomId()}
        >
          {pattern}
        </span>
      )
    }
    return pattern
  }

  render() {
    const {
      theme,
      className,
      indexHighlighted,
      pattern,
      ...props
    } = this.props

    return (
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
