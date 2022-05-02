import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [para, showPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("update");

  const handlePara = useCallback(() => {
    if (allowToggle) {
      showPara((prev) => !prev);
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput para={para} />
      <Button onClick={() => setAllowToggle((prev) => !prev)}>
        {" "}
        Allow Toggle
      </Button>
      <Button onClick={handlePara}> update the DOM!</Button>
    </div>
  );
}

export default App;
