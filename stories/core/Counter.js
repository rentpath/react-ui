import React from 'react'
import { Button, Counter } from 'react-ui-core/src'

const count = 3

const decrementOperator = (<span>Remove</span>)
const incrementOperator = (<span>Add</span>)

const onClick = currentCount => {
  console.log(`current count: ${currentCount}`) // eslint-disable-line no-console
}

const title = (
  <div>
    Baths & Bedrooms
  </div>
)

export const DefaultCounter = (
  <div>
    {title}
    <Counter
      onClick={onClick}
      label="Bedrooms"
      count={count}
      step={2}
    />
    <Counter
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
      onClick={onClick}
      label="Bedrooms (step 2)"
      count={count}
      step={2}
    />
    <Counter
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
      onClick={onClick}
      label="Bedrooms (step 2)"
      count={count}
      text={num => (
        `the count is ${num}`
      )}
      step={2}
    />
    <Counter
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

export const CounterCustomButtons = (
  <div>
    {title}
    <Counter
      onClick={onClick}
      label="Bedrooms"
      count={count}
      incrementOperator={<Button>+</Button>}
      decrementOperator={<Button>-</Button>}
    />
    <Counter
      onClick={onClick}
      label="Bathrooms"
      count={count}
      incrementOperator={<Button>+</Button>}
      decrementOperator={<Button>-</Button>}
    />
  </div>
)
