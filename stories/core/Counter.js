import React from 'react'
import { Button, Counter } from 'react-ui-core/src'
import StoryBookTheme from '../theme/Storybook.css'

const count = 3

const decrementOperator = (<span>Remove</span>)
const incrementOperator = (<span>Add</span>)

const onClick = currentCount => {
  console.log(`current count: ${currentCount}`) // eslint-disable-line no-console
}

export const DefaultCounter = (
  <div>
    <Counter
      className={StoryBookTheme['Story-padding']}
      onClick={onClick}
      label="Bedrooms"
      count={count}
      step={2}
    />
    <Counter
      decrementOperator={decrementOperator}
      incrementOperator={incrementOperator}
      className={StoryBookTheme['Story-padding']}
      onClick={onClick}
      label="Bathrooms"
      count={count}
    />
  </div>
)

export const CounterStep = (
  <div>
    <Counter
      onClick={onClick}
      className={StoryBookTheme['Story-padding']}
      label="Bedrooms (step 2)"
      count={count}
      step={2}
    />
    <Counter
      onClick={onClick}
      className={StoryBookTheme['Story-padding']}
      label="Bathrooms (step 5)"
      count={count}
      step={5}
    />
  </div>
)

export const CounterText = (
  <div>
    <Counter
      onClick={onClick}
      className={StoryBookTheme['Story-padding']}
      label="Bedrooms"
      count={count}
      text={num => (
        `the count is ${num}`
      )}
    />
    <Counter
      onClick={onClick}
      className={StoryBookTheme['Story-padding']}
      label="Bathrooms"
      count={count}
      text={num => (
        `current count: ${num}`
      )}
    />
  </div>
)

export const CounterCustomButtons = (
  <div>
    <Counter
      onClick={onClick}
      label="Bedrooms"
      count={count}
      incrementOperator={<Button>+</Button>}
      decrementOperator={<Button>-</Button>}
      className={StoryBookTheme['Story-padding']}
    />
    <Counter
      onClick={onClick}
      label="Bathrooms"
      count={count}
      incrementOperator={<Button>+</Button>}
      decrementOperator={<Button>-</Button>}
      className={StoryBookTheme['Story-padding']}
    />
  </div>
)
