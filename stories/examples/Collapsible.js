import React from 'react'
import { CollapsibleTheme } from '../theme'
import { Collapsible } from 'react-ui-core/src/Collapsible'
import Checkbox from './Checkbox';

export default class Checkbox extends React.Component {
  render(){
  	return (<div className={this.props.className}>
              <label><input type="checkbox"
                name="checkbox"
                value={this.props.label} />
                {this.props.label}
              </label>
            </div>)
  }
}

let title = 'Amenities';
let showableItems = ['Air Conditioning', 'Elevator',
                    'Laundry Facility', 'Disability Access'];
let nonshowableItems = ['Dishwasher','Garbage Disposal',
                      'Island Kitchens','Microwave','Refrigerator',
                      'Stainless Steel Appliances','Washer/Dryer in Unit',];

const renderItem = (item) => {
  return (
    <Checkbox
      className={CollapsibleTheme.checkboxStyle}
      label={item}
    />
    )
}

const myShowableItems = (
  <div>
    <p><strong>{title}</strong></p>
    {showableItems.map(renderItem)}
  </div>
);

const myNonShowableItems = (
  <div>
    {nonshowableItems.map(renderItem)}
  </div>
);

function handleChange(){
  console.log('in custom onclick handler')
}

export const Collapse = (
  <div>
  <Collapsible
    showableItems={myShowableItems}
    nonshowableItems={myNonShowableItems}
    theme={CollapsibleTheme}
    hidden='see all amenities'
    visible='see less amenities'
    handleClick={handleChange}
  />
  </div>
)
