const title = 'Amenities';
const showableItems = ['Air Conditioning', 'Elevator', 'Laundry Facility', 'Disability Access'];
const nonshowableItems = ['Dishwasher','Garbage Disposal', 'Island Kitchens','Microwave','Refrigerator', 'Stainless Steel Appliances','Washer/Dryer in Unit',];
const checkboxClass = 'checkboxStyle';
const toggleItems = 'See all amenities'
const id='foo';
import React, { Component } from 'react';
import { CollapsibleTheme } from '../theme'
import ReactDOM from 'react-dom';
import Collapsible from 'react-ui-core/src/Collapsible';
import Checkbox from './Checkbox';

const myShowableItems = (
  <div>
    {showableItems.map(d=> (<Checkbox theme={CollapsibleTheme} className={checkboxClass} label={d} />))}
  </div>
);
const myNonShowableItems = (
  <div>
    {nonshowableItems.map(d=> (<Checkbox theme={CollapsibleTheme} className={checkboxClass} label={d} />))}
  </div>
);
function userFunction(componentInfo){
  const display =  !componentInfo.state.display;
    componentInfo.setState({
      display,
      toggleItems: display ? 'Show Less' : (componentInfo.props.toggleItems || 'See all items')
    })
}

export const Collapse = (
    <div>
    <Collapsible  theme={CollapsibleTheme} id={id} title={title} handleClick={userFunction} collapsible='collapsible' 
    toggleItems={toggleItems} showableItems={myShowableItems} nonshowableItems={myNonShowableItems} />
    </div>
);