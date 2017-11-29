import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List } from 'react-ui-core/src'
import { ListTheme } from '../theme'

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
    theme={ListTheme}
    items={sampleListItems}
  />
)

export const HorizontalList = (
  <List
    theme={ListTheme}
    items={sampleListItems}
    orientation="horizontal"
  />
)

export const ListWithPassedNodeTypes = (
  <List
    theme={ListTheme}
    items={sampleListItems}
    nodeType="div"
    listItemNodeType="ul"
  />

)

export const ListWithOwnItemComponent = (
  <List
    theme={ListTheme}
    items={sampleListItems}
    Item={sampleItemComponent}
  />
)
