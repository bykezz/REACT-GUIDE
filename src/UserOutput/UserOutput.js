import React from "react";
import "./UserOutput.css";
const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>my name is {props.userName}</p>
      <p>so whatsup !</p>
    </div>
  );
};
export default userOutput;
