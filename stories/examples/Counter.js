import React from 'react'
import { Counter } from 'react-ui-core/src'
import { CounterTheme } from '../theme'

const count = 3

const decrementOperator = (<span>Remove</span>)
const incrementOperator = (<span>Add</span>)

const onClick = currentCount => {
  console.log(`current count: ${currentCount}`) // eslint-disable-line no-console
}

const title = (
  <div className={CounterTheme.title}>
    Baths & Bedrooms
  </div>
)

export const DefaultCounter = (
  <div>
    {title}
    <Counter
      theme={CounterTheme}
      onClick={onClick}
      label="Bedrooms"
      count={count}
      step={2}
    />
    <Counter
      theme={CounterTheme}
      decrementOperator={decrementOperator}
      incrementOperator={incrementOperator}
      onClick={onClick}
      label="Bathrooms"
      count={count}
    />
  </div>
)

export const CounterStep = (
  <div>
    {title}
    <Counter
      theme={CounterTheme}
      onClick={onClick}
      label="Bedrooms (step 2)"
      count={count}
      step={2}
    />
    <Counter
      theme={CounterTheme}
      onClick={onClick}
      label="Bathrooms (step 5)"
      count={count}
      step={5}
    />
  </div>
)

export const CounterText = (
  <div>
    {title}
    <Counter
      theme={CounterTheme}
      onClick={onClick}
      label="Bedrooms (step 2)"
      count={count}
      text={num => (
        `the count is ${num}`
      )}
      step={2}
    />
    <Counter
      theme={CounterTheme}
      onClick={onClick}
      label="Bathrooms (step 5)"
      count={count}
      text={num => (
        `current count: ${num}`
      )}
      step={5}
    />
  </div>
)
