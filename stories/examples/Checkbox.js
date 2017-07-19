import React from 'react';
import ReactDOM from 'react-dom';

export default class Checkbox extends React.Component {
  render(){
    const { theme, className } = this.props;
  	return (<div className={theme[className]}><label><input type="checkbox" name="checkbox" value={this.props.label} />{this.props.label}</label></div>);
  }
}
