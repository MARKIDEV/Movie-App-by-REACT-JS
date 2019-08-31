import React from "react";
                                      
export default function RatingFilter(props, ChangeRate = () => {}) {
  let arr = [];
  
  for (let i = 0; i < 5; i++) {
    if (i < props.rate) { //<= le problème!!!
      arr.push(<span onClick={() =>{ChangeRate(i+1)}} >★</span>);
    } else {
      arr.push(<span>☆</span>);
    }
  }
  return (
    <div className="poster"> {arr}</div>
  );
}
