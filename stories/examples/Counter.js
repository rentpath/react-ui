import React, { Component, PropTypes } from 'react'
import { CounterTheme } from '../theme'
import Counter from 'react-ui-core/src/Counter'

const count = 3
const title = 'title'
const leftOperator = <span>&#x002B;</span>
const rightOperator = <span>&#x002D;</span>

const onClick = (type, counter) => {
  let count = counter
  if(type == 'increment') {
    count += 1
  } else {
    count = count > 1 ? count - 1 : count
  }
return count
}
const CounterComponent = (
  <div>
    <div className={CounterTheme.title}>
      <p>Baths & Bedrooms</p>
    </div>
    <Counter
      theme={CounterTheme}
      leftOperator={leftOperator}
      rightOperator={rightOperator}
      onClick={onClick}
      rightUnit='+'
      label='Bedrooms'
      count={count}
    />
    <Counter
      theme={CounterTheme}
      leftOperator={leftOperator}
      rightOperator={rightOperator}
      onClick={onClick}
      rightUnit='+'
      label='Bathrooms'
      count={count}
    />
  </div>
)

export { CounterComponent }
