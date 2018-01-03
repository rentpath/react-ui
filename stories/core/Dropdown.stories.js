import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import { Dropdown, Text, Menu } from 'react-ui-core/src'
import DropdownButtonExample from './DropdownButtonExample'
import DropdownInputExample from './DropdownInputExample'
import DynamicDropdownExample from './DynamicDropdownExample'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

const inputProps = {
  children: 'Dropdown Label',
}

const Content = props => (
  <div {...props}><h1>Hi</h1></div>
)

const DropdownMenu = props => (
  <Menu
    options={['Option1', 'Option2', 'Option3']}
    onItemSelect={props.onSelect}
  />
)

DropdownMenu.propTypes = {
  onSelect: PropTypes.func,
}

coreStory('Dropdown', module)
  .add('Dropdown', () => (
    <Dropdown
      className={StoryBookTheme['Story-padding']}
      anchorField={{ children: <Text>Click Me</Text> }}
    >
      <Content />
    </Dropdown>
  ))
  .add('Anchor Props', () => (
    <Dropdown
      anchorField={inputProps}
      className={StoryBookTheme['Story-padding']}
    >
      <Menu options={['foo', 'bar', 'baz']} />
    </Dropdown>
  ))
  .add('Input Anchor without close toggle', () => (
    <Dropdown
      className={StoryBookTheme['Story-padding']}
      anchorField={props => (<DropdownInputExample {...props} />)}
      toggleOnSelect={false}
    >
      <Menu options={['foo', 'bar', 'baz']} />
    </Dropdown>
  ))
  .add('Multiple Children', () => (
    <Dropdown
      className={classnames(
        StoryBookTheme['Story-padding'],
      )}
      anchorField={props => (<DropdownButtonExample {...props} />)}
    >
      <Menu
        options={['foo', 'bar', 'baz']}
        onItemSelect={action('selected')}
      />
      <Text className={StoryBookTheme.Story_DropdownMultiple}>Choose</Text>
    </Dropdown>
  ))
  .add('Dynamic button text closes on option selection ', () => (
    <DynamicDropdownExample theme={StoryBookTheme} />
  ))
