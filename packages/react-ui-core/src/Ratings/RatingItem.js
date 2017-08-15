import React, {Component} from 'react'

// const RatingItem = React.createClass({


export default class RatingItem extends Component {
  render() {
    const {
      width,
      height,
      clipPath,
      backgroundColor,
      fillColor,
     } = this.props;
     console.log("width:",width)
    return (
      <div
          className="rating-item-container"
          style={{
              display: 'inline-block'}}>


           <svg xmlns="http://www.w3.org/2000/svg" width="255" height="240" viewBox="0 0 51 48" >
           <defs>
           <linearGradient id="half_grad">
             <stop offset="0%" stopOpacity="1" stopColor="royalblue"/>
             <stop offset={width} stopOpacity="1" stopColor="royalblue"/>
             <stop offset={width} stopOpacity="0" stopColor="royalblue"/>
             <stop offset="100%" stopOpacity="0" stopColor="royalblue"/>
           </linearGradient>
            </defs>
           <title>Five Pointed Star</title>
           <path fill="url(#half_grad)" stroke="#000" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
           </svg>


      </div>
    );
  }
}

        // <div
        //     className="rating-item"
        //     style={{
        //       'backgroundcolor': fillColor || 'blue',
              // width: `${this.props.val * 100}%`,
        //       height: '100%'
        //     }}>
        //
        // </div>
