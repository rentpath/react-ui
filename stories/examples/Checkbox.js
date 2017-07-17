import React from 'react';

export default class Checkbox extends React.Component {
  render(){
  	return (<div className={this.props.className}>
              <label><input type="checkbox" 
                name="checkbox" 
                value={this.props.label} />
                {this.props.label}
              </label>
            </div>)
  }
}
