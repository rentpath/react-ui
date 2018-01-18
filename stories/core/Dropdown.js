import React from 'react'
import { action } from '@storybook/addon-actions'
import { Dropdown, Text, Menu, Card } from 'react-ui-core/src'
import DropdownButtonExample from './DropdownButtonExample'
import DropdownInputExample from './DropdownInputExample'
import DynamicDropdownExample from './DynamicDropdownExample'
import StoryBookTheme from '../theme/Storybook.css'

const inputProps = {
  children: 'Dropdown Label',
}

const Content = props => (
  <Card {...props}><h1>Hi</h1></Card>
)

const MenuExample = props => (
  <Card>
    <Menu options={['foo', 'bar', 'baz']} {...props} />
  </Card>
)

export const DefaultDropdown = (
  <Dropdown
    anchorField={{ children: <Text>Click Me</Text> }}
  >
    <Content />
  </Dropdown>
)

export const DropdownWithProps = (
  <Dropdown
    anchorField={inputProps}
  >
    <MenuExample />
  </Dropdown>
)

export const DropDownInputAnchor = (
  <Dropdown
    anchorField={props => (<DropdownInputExample {...props} />)}
    toggleOnSelect={false}
  >
    <MenuExample />
  </Dropdown>
)

export const DropdownWithMenu = (
  <Dropdown
    anchorField={props => (<DropdownButtonExample {...props} />)}
  >
    <Card>
      <Menu
        options={['foo', 'bar', 'baz']}
        onItemSelect={action('selected')}
      />
      <Text className={StoryBookTheme.Story_DropdownMultiple}>Choose</Text>
    </Card>
  </Dropdown>
)

export const DropdownCloseOnOptionSelect = (
  <DynamicDropdownExample theme={StoryBookTheme} />
)
