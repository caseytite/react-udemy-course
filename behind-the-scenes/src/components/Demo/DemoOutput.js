import React from "react";

const DemoOutput = ({ para }) => {
  console.log("demp");
  return <p>{para ? "The DOM has been updated" : ""}</p>;
};

export default React.memo(DemoOutput);
