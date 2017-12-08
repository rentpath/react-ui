import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List } from 'react-ui-core/src'

const sampleListItems = ['One', 'Two', 'Three']

class sampleItemComponent extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <div>
        <p><strong>{this.props.children}</strong></p>
      </div>
    )
  }
}

export const DefaultList = (
  <List
    items={sampleListItems}
  />
)

export const HorizontalList = (
  <List
    items={sampleListItems}
    orientation="horizontal"
  />
)

export const ListWithPassedNodeTypes = (
  <List
    items={sampleListItems}
    nodeType="div"
    listItemNodeType="ul"
  />

)

export const ListWithOwnItemComponent = (
  <List
    items={sampleListItems}
    Item={sampleItemComponent}
  />
)
