import React, { Component, PropTypes } from 'react'
import { CounterTheme } from '../theme'
import Counter from 'react-ui-core/src/Counter'

const count = 3
const title = 'title'
const decrementOperator = <span>&#x002B;</span>
const incrementOperator = <span>&#x002D;</span>

const handleClick = (counter) => {}

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
      incrementUnit='+'
      label='Bedrooms'
      count={count}
      changeValue={2}
    />
    <Counter
      theme={CounterTheme}
      decrementOperator={decrementOperator}
      incrementOperator={incrementOperator}
      handleClick={handleClick}
      incrementUnit='+'
      label='Bathrooms'
      count={count}
    />
  </div>
)

export { CounterComponent }
