import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import cn from 'classnames'
import { randomId } from '@rentpath/react-ui-utils'
import themed from 'react-themed'
import ListItem from './ListItem'

@themed('*', { pure: true })

export default class List extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    nodeType: PropTypes.string,
    Item: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
    items: PropTypes.array,
    listItemNodeType: PropTypes.string,
    orientation: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    nodeType: 'ul',
    listItemNodeType: 'li',
    Item: ListItem,
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

  render() {
    const {
      theme,
      nodeType: NodeType,
      Item,
      className,
      items,
      orientation,
      listItemNodeType,
      ...props
    } = this.props

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
            key={this.itemId(i)}
            index={i}
            nodeType={listItemNodeType}
            theme={theme}
            {...props}
          >
            {item}
          </Item>
        ))}
      </NodeType>
    )
  }
}
