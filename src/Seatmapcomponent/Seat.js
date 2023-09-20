import React from 'react';

const Seat = (props) => {
    const color = props.availability === 'AVAILABLE' ? "#499167" : "#FE5F55";
    const style = {
      position: "absolute",
      left: `${props.y*2}em`,
      top: `${props.x*2}em`,
      backgroundColor: color,
      color: "white"
    }
    return (
      <div className = 'seat' style={style}>
  <p>{props.number}</p>
      </div>
    )
  }
  export default Seat
