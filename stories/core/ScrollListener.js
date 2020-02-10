import React from 'react'
import { Bard, List } from 'react-ui-core/src'

const lorem = (
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam natus quas beatae? Tempora quo magnam, quod fugiat assumenda repellat saepe quisquam veritatis animi sed dolorum id obcaecati dolore nulla nesciunt!
  </p>
)

const items = [1, 2, 3, 4, 5, 6, 7, 8]

export const ScrollListener = (
  <div>
    <h3>(Open up console)</h3>
    <Bard
      onScrollUp={() => console.log('going up')}
      onScrollDown={() => console.log('going down')}
    />
    {items.map(i => (
      <p key={i}>
        {lorem}
      </p>
    ))}
  </div>
)
