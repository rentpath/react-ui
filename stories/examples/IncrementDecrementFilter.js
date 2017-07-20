import React, { Component, PropTypes } from 'react';
import { IncrementDecrementFilterTheme } from '../theme'
import { action } from '@storybook/addon-actions'
import IncrementDecrementFilter from 'react-ui-core/src/IncrementDecrementFilter';

const count = 3;
const IncrementDecrementFilterComponent = (
  <div>
    <div className='title'>
    <p>Baths & Bedrooms</p>
    </div>
    <IncrementDecrementFilter theme={IncrementDecrementFilterTheme} rightUnit="+" label="Bedrooms" count={count} />
    <IncrementDecrementFilter theme={IncrementDecrementFilterTheme} rightUnit="+" label="Bathrooms" count={count} />
    </div>
)

export { IncrementDecrementFilterComponent }