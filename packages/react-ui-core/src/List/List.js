import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import cn from 'classnames'
import { randomId, parseArgs } from '@rentpath/react-ui-utils'
import themed from 'react-themed'
import DefaultListItem from './ListItem'

@themed('*', { pure: true })

export default class List extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    nodeType: PropTypes.string,
    listItem: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    items: PropTypes.array,
    orientation: PropTypes.string,
    highlightIndex: PropTypes.number,
  }

  static defaultProps = {
    theme: {},
    nodeType: 'ul',
    items: [],
    orientation: 'vertical',
  }

  constructor(props) {
    super(props)
    this.generateRandomId()
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.items, nextProps.items)) {
      this.generateRandomId()
    }
  }
  generateRandomId() {
    this.id = randomId('listItem')
  }

  itemId(index) {
    return `${this.id}-${index}`
  }

  renderListItem(listItem) {
    return parseArgs(listItem, DefaultListItem)
  }

  render() {
    const {
      theme,
      nodeType: NodeType,
      className,
      items,
      listItem,
      orientation,
      highlightIndex,
      ...props
    } = this.props

    const [Item, itemProps] = this.renderListItem(listItem)

    return (
      <NodeType
        className={cn(
          theme.List,
          orientation && theme[`List-${orientation}`],
          className,
        )}
      >
        {items.map((item, i) => (
          <Item
            {...itemProps}
            highlight={highlightIndex === i}
            key={this.itemId(i)}
            index={i}
            data-tid={`list-item-${i}`}
            {...props}
          >
            {item}
          </Item>
        ))}
      </NodeType>
    )
  }
}
