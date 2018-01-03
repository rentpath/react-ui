import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List, Text } from 'react-ui-core/src'
import coreStory from './coreStory'

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

coreStory('List', module)
  .add('List', () => (
    <List
      items={sampleListItems}
    />
  ))
  .add('Horizontal List', () => (
    <List
      items={sampleListItems}
      orientation="horizontal"
    />
  ))
  .add('Custom Node Type List', () => (
    <List
      items={sampleListItems}
      nodeType="div"
      listItem={{
        nodeType: 'div',
      }}
    />
  ))
  .add('Custom ListItem List', () => (
    <List
      items={sampleListItems}
      listItem={props => (<SampleItemComponent {...props} />)}
    />
  ))

