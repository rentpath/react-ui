import React from 'react'
import { action } from '@storybook/addon-actions'
import { Menu } from 'react-ui-core/src'
import coreStory from './coreStory'

coreStory('Menu', module)
  .add('Menu', () => (
    <Menu
      options={['Option1', 'Option2', 'Option3']}
    />
  ))
  .add('On Keyboard Selection', () => (
    <Menu
      options={['Option1', 'Option2', 'Option3']}
      onItemSelect={action('selected')}
    />
  ))
  .add('On Selection hover', () => (
    <Menu
      options={['Option1', 'Option2', 'Option3']}
      onItemMouseOver={action('hovering')}
      nodeType="section"
    />
  ))
