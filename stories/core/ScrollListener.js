import React from "react";
import { ScrollListener } from "react-ui-core/src";

const lorem = `
  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Veniam natus quas beatae? Tempora quo magnam, quod fugiat assumenda repellat saepe
  quisquam veritatis animi sed dolorum id obcaecati dolore nulla nesciunt!
`;

const items = [1, 2, 3, 4, 5];

export const DefaultScrollListener = (
  <div>
    <h3>(Open up console)</h3>
    <ScrollListener
      onScrollUp={() => console.log("going up")}
      onScrollDown={() => console.log("going down")}
    />
    {items.map(i => (
      <p key={i}>{lorem}</p>
    ))}
    {items.map(i => (
      <p key={i}>{lorem}</p>
    ))}
    {items.map(i => (
      <p key={i}>{lorem}</p>
    ))}
  </div>
);
