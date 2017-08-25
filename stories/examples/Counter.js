import React from 'react'
import { Counter } from 'react-ui-core/src'
import { CounterTheme } from '../theme'

const count = 3
const decrementOperator = <span>&#x002B;</span>
const incrementOperator = <span>&#x002D;</span>

const handleClick = currentCount => {
  console.log(`current count: ${currentCount}`) // eslint-disable-line no-console
}

const CounterComponent = (
  <div>
    <div className={CounterTheme.title}>
      <p>Baths & Bedrooms</p>
    </div>
    <Counter
      theme={CounterTheme}
      decrementOperator={decrementOperator}
      incrementOperator={incrementOperator}
      handleClick={handleClick}
      incrementUnit="+"
      label="Bedrooms"
      count={count}
      changeValue={2}
    />
    <Counter
      theme={CounterTheme}
      decrementOperator={decrementOperator}
      incrementOperator={incrementOperator}
      handleClick={handleClick}
      incrementUnit="+"
      label="Bathrooms"
      count={count}
    />
  </div>
)

export { CounterComponent }
