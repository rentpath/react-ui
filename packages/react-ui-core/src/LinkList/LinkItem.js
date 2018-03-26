import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from '@rentpath/react-redux-router'

export default class LinkItem extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    tagItem: PropTypes.string,
    useAnchorTag: PropTypes.bool,
    title: PropTypes.string,
    dataTestId: PropTypes.string,
  }

  static defaultProps = {
    tagItem: 'link',
    useAnchorTag: false,
  }

  linkStyle() {
    const { url, title, text, useAnchorTag } = this.props

    if (useAnchorTag) {
      return (
        <a href={url} title={title}>
          {text}
        </a>
      )
    }

    return (
      <Link to={url} title={title}>
        {text}
      </Link>
    )
  }

  render() {
    const { className, tagItem, dataTestId } = this.props

    return (
      <li className={className} data-test-id={dataTestId} data-tag_item={tagItem}>
        {this.linkStyle()}
      </li>
    )
  }
}
