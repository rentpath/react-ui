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

const loadStories = () => {
  require('../stories')
}

configure(loadStories, module)
