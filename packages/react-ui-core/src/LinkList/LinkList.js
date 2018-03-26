import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import classnames from 'classnames'
import LinkItem from './LinkItem'

export default class LinkList extends PureComponent {
  static propTypes = {
    links: PropTypes.array.isRequired,
    theme: PropTypes.object,
    className: PropTypes.string,
    useAnchorTag: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
  }

  createDataTestId = item => {
    const text = item.text ? item.text : ''
    const type = text.split(' ')[0]
    return `${type}-link`
  }

  render() {
    const { links, theme, className, useAnchorTag } = this.props

    return (
      <ul className={classnames(className, theme.list)}>
        { links.map(item => (
          <LinkItem
            dataTestId={this.createDataTestId(item)}
            key={item.url}
            url={item.url}
            text={item.text}
            className={classnames(
              item.className,
              theme.item,
            )}
            tagItem={item.tagItem}
            title={item.title}
            useAnchorTag={useAnchorTag}
          />
        ))}
      </ul>
    )
  }
}
