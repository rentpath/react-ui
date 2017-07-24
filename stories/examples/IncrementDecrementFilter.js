import React from 'react'
import IncrementDecrementFilter from 'react-ui-core/src/IncrementDecrementFilter'
import { IncrementDecrementFilterTheme } from '../theme'

const count = 3
const IncrementDecrementFilterComponent = (
  <div>
    <div className={IncrementDecrementFilterTheme.title}>
    <p>Baths & Bedrooms</p>
    </div>
    <IncrementDecrementFilter theme={IncrementDecrementFilterTheme} rightUnit="+" label="Bedrooms" count={count} />
    <IncrementDecrementFilter theme={IncrementDecrementFilterTheme} rightUnit="+" label="Bathrooms" count={count} />
    </div>
)

export { IncrementDecrementFilterComponent }
