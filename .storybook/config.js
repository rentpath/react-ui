import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(checkA11y)
addDecorator(withKnobs)

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
  require('../stories/rent')
  require('../stories/rentals')
  require('../stories/ag')
}

configure(loadStories, module)
