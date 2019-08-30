import React from "react";

export default function Rating({props, ChangeRate = () => {}}) {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    if (i < props.rate) {
      arr.push(<span onClick={() =>  ChangeRate(i+1)} >★</span>);
    } else {
      arr.push(<span>☆</span>);
    }
  }
  return (
    <div className="poster"> {arr}</div>
  );
}
