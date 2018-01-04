import React from 'react'
import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'

setDefaults({
  header: false, // Toggles display of header with component name and description
  source: true, // Displays the source of story Component
  maxPropsIntoLine: 1,
})

setOptions({
  inline: true,
  name: 'react-ui',
  url: 'https://github.com/rentpath/react-ui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
})

const coreReq = require.context('../packages/react-ui-core/src', true, /\-story\.js$/)

const loadStories = () => {
  coreReq.keys().forEach((filename) => coreReq(filename))
  // require('../stories/map')
  // require('../stories/rent')
  // require('../stories/ag')
}

configure(loadStories, module)
