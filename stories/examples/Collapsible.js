import React from 'react'
import { CollapsibleTheme } from '../theme'
import { Collapsible } from 'react-ui-core/src/Collapsible'

var showableItems = ['Air Conditioning', 'Elevator', 'Laundry Facility', 'Disability Access'];
var nonshowableItems = ['Dishwasher','Garbage Disposal', 'Island Kitchens','Microwave','Refrigerator', 'Stainless Steel Appliances','Washer/Dryer in Unit'];

export const Collapse = (
  <div>
  <Collapsible
    showableItems={showableItems}
    nonshowableItems={nonshowableItems}
    theme={CollapsibleTheme}
    toggle='see all amenities'
    title='Amenities'
  />
  </div>
)
