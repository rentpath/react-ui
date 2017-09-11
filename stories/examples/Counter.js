import React from 'react'
import { Counter } from 'react-ui-core/src'
import { CounterTheme } from '../theme'

const count = 3

const decrementOperator = (<span>-</span>)
const incrementOperator = (<span>+</span>)

const onClick = currentCount => {
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
      onClick={onClick}
      incrementUnit="+"
      label="Bedrooms"
      count={count}
      step={2}
    />
    <Counter
      theme={CounterTheme}
      decrementOperator={decrementOperator}
      incrementOperator={incrementOperator}
      onClick={onClick}
      incrementUnit="+"
      label="Bathrooms"
      count={count}
    />
  </div>
)

export { CounterComponent }
