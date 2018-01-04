import React from 'react'
import Button from '../Button'
import Counter from '../Counter'
import coreStory from '../.storybook/coreStory'

const count = 3

const decrementOperator = (<span>Remove</span>)
const incrementOperator = (<span>Add</span>)

const onClick = currentCount => {
  console.log(`current count: ${currentCount}`) // eslint-disable-line no-console
}

coreStory('Counter', module)
  .add('Counter', () => (
    <div>
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
  ))
  .add('Different Step Counter', () => (
    <div>
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
  ))
  .add('Custom Text Counter', () => (
    <div>
      <Counter
        onClick={onClick}
        label="Bedrooms"
        count={count}
        text={num => (
          `the count is ${num}`
        )}
      />
      <Counter
        onClick={onClick}
        label="Bathrooms"
        count={count}
        text={num => (
          `current count: ${num}`
        )}
      />
    </div>
  ))
  .add('Custom Buttons Counter', () => (
    <div>
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
  ))
