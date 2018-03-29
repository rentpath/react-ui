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
    items: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.shape({
          label: PropTypes.node.isRequired,
        })])),
    orientation: PropTypes.string,
    highlightIndex: PropTypes.number,
    selectedIndex: PropTypes.number,
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

  itemComponentAndProps(listItem) {
    return parseArgs(listItem, DefaultListItem)
  }

  renderItem(item) {
    if (item && typeof item === 'object' && !React.isValidElement(item)) {
      const { label, ...props } = item
      return [label, props]
    } else if (typeof item === 'function') {
      return [item()]
    }
    return [item]
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
      selectedIndex,
      ...props
    } = this.props

    const [Item, baseProps] = this.itemComponentAndProps(listItem)

    return (
      <NodeType
        className={cn(
          theme.List,
          orientation && theme[`List-${orientation}`],
          className,
        )}
      >
        {items.map((item, i) => {
          const [children, itemProps] = this.renderItem(item)
          return (
            <Item
              {...baseProps}
              data-tid={`list-item-${i}`}
              {...props}
              {...itemProps}
              highlight={highlightIndex === i}
              selected={selectedIndex === i}
              key={this.itemId(i)}
              index={i}
            >
              {children}
            </Item>
          )
        })}
      </NodeType>
    )
  }
}
