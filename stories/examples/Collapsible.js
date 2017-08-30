import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapsible } from 'react-ui-core/src/Collapsible'
import { CollapsibleTheme } from '../theme'

export default class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
  }

  render() {
    return (
      <div className={this.props.className}>
        <span>
          <input
            type="checkbox"
            name="checkbox"
            value={this.props.label}
          />
          {this.props.label}
        </span>
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

const renderItem = item => (
  <Checkbox
    key={item}
    className={CollapsibleTheme.checkboxStyle}
    label={item}
  />
)

const myShowableItems = (
  <div>
    <p>
      <strong>Amenities</strong>
    </p>
    {showableItems.map(renderItem)}
  </div>
)

const myNonShowableItems = (
  <div>
    {nonshowableItems.map(renderItem)}
  </div>
)

const handleChange = () => {
  console.log('in custom onclick handler') // eslint-disable-line no-console
}

export const Collapse = (
  <div>
    <Collapsible
      showableItems={myShowableItems}
      nonshowableItems={myNonShowableItems}
      theme={CollapsibleTheme}
      hiddenText="see all amenities"
      visibleText="see less amenities"
      visible={false}
      handleClick={handleChange}
    />
  </div>
)
