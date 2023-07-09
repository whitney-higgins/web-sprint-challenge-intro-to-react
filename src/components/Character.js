import React from "react";

// Write your Character component here

const Character = (props) => {
  console.log(props);
  return (
  <div className="characters-wrapper">
    <h1>{props.characters.name}</h1>
  </div>);
};

export default Character;
