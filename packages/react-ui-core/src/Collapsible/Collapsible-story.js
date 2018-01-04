import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import Collapsible from '../Collapsible'
import Field from '../Field'
import StoryBookTheme from '../.storybook/theme/Storybook.css'
import coreStory from '../.storybook/coreStory'

class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
  }

  render() {
    return (
      <div className={this.props.className}>
        <Field
          type="checkbox"
          name="label"
          value={this.props.label}
          label={this.props.label}
        />
      </div>
    )
  }
}

const showableItems = [
  'Air Conditioning',
  'Elevator',
  'Laundry Facility',
  'Disability Access',
]
const nonshowableItems = [
  'Dishwasher',
  'Garbage Disposal',
  'Island Kitchens',
  'Microwave',
  'Refrigerator',
  'Stainless Steel Appliances',
  'Washer/Dryer in Unit',
]

const renderItem = (item, index) => (
  <Checkbox
    key={`${item}-${index}`}
    label={item}
  />
)

const myShowableItems = [
  <h4 key="amenities">Amenities</h4>,
  showableItems.map(renderItem),
]

const myNonShowableItems = nonshowableItems.map(renderItem)

coreStory('Collapsible', module)
  .add('Collapsible', () => (
    <div>
      <Collapsible
        className={StoryBookTheme['Story-padding']}
        showableItems={myShowableItems}
        nonshowableItems={myNonShowableItems}
        hiddenText="see all amenities"
        visibleText="see less amenities"
        visible={false}
        handleClick={action('handleClick')}
      />
    </div>
  ))
