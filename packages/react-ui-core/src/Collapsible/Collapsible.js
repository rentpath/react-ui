import React, { Component, PropTypes } from 'react';
import Checkbox from './Checkbox'

export default class Collapsible extends Component {

	constructor(props){
     super(props);
		 this.toggleItems = this.toggleItems.bind(this);
     this.state = {
     	display : false
     }
	}

  toggleItems(){
  	this.setState({
  		display: !this.state.display
  	})
  }

  render(){
		const {
      theme,
      ...props
    } = this.props

		var showableItems = this.props.showableItems || [];
    var nonshowableItems = this.props.nonshowableItems || [];
    var id = this.props.id || '';
    var title = this.props.title || 'default';
    var checkboxStyle = theme.checkboxStyle || '';
    var toggle = this.props.toggle || 'See all items';

  	return (
			<div id={id}>
	      <p><strong>{title}</strong></p>
	        {showableItems.map(d => ( <Checkbox className={checkboxStyle} label={d} />))}
	        <div className={this.state.display?theme.show:theme.hide}>
	          {nonshowableItems.map(d=> ( <Checkbox className={checkboxStyle} label={d} />))}
	        </div>
	        <div className={theme.alignBottom}>
	          <a onClick={this.toggleItems}>
	            <strong>{this.props.toggle}</strong>
	          </a>
	        </div>
	    </div>
   	)
  }
}
