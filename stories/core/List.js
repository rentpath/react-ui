import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List, Text } from 'react-ui-core/src'

const sampleListItems = ['One', 'Two', 'Three']

class SampleItemComponent extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <Text>
        {this.props.children}
      </Text>
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
    listItem={{
      nodeType: 'div',
    }}
  />
)

export const ListWithOwnItemComponent = (
  <List
    items={sampleListItems}
    listItem={props => (<SampleItemComponent {...props} />)}
  />
)
