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
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
})

const loadStories = () => {
  require('../stories/core')
  require('../stories/map')
  require('../stories/rent')
  require('../stories/ag')
}

configure(loadStories, module)
