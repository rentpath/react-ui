import React, { Component, PropTypes } from 'react';

export default class IncrementDecrementFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(){
  	let incrementValue = this.state.count + 1;
    this.setState({
      count: incrementValue
    })
  }
  decrement(){
    if(this.state.count>1){
    let decrementValue = this.state.count - 1;
    this.setState({
      count: decrementValue
    })
    }
  }
  render(){
     const { count} = this.state;
     const { theme, label, leftUnit, rightUnit, id } = this.props;
  	 return (<div id={id} className="Container"> 
	  <div className='Label'>{label}
             </div>
	  <div className="ComponentContainer">
          <span onClick={this.increment} className="leftUnit contentInnards circle">&#x002B;</span>
          <span className="contentInnards">{leftUnit}{count}{rightUnit}</span>
          <span onClick={this.decrement} className="rightUnit contentInnards circle">&#x002D;</span>
	  </div>
      </div>
	)
  }
}

IncrementDecrementFilter.defaultProps = {
  theme: {},
  count: 1,
  leftUnit: '',
  rightUnit: '',
}
            
IncrementDecrementFilter.propTypes = {
  theme: PropTypes.object,
  count: PropTypes.number,
  leftUnit: PropTypes.string,
  rightUnit: PropTypes.string,
}