import React, { Component, PropTypes } from "react";
import { CounterTheme } from "../theme";
import Counter from "react-ui-core/src/Counter";

const count = 3;
const title = "title";
const leftOperator = <span>&#x002B;</span>;
const rightOperator = <span>&#x002D;</span>;

const leftOperatorClick = function(component) {
  const incrementValue = component.state.count + 1
  component.setState({
    count: incrementValue,
  })
}
const rightOperatorClick = function(component) {
  if (component.state.count > 1) {
    const decrementValue = component.state.count - 1
    component.setState({
      count: decrementValue,
    })
  }
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
      rightOperatorClick={rightOperatorClick}
      leftOperatorClick={leftOperatorClick}
      rightUnit="+"
      label="Bedrooms"
      count={count}
    />
    <Counter
      theme={CounterTheme}
      leftOperator={leftOperator}
      rightOperator={rightOperator}
      rightOperatorClick={rightOperatorClick}
      leftOperatorClick={leftOperatorClick}
      rightUnit="+"
      label="Bathrooms"
      count={count}
    />
  </div>
);

export { CounterComponent };
