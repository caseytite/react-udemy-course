import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [para, showPara] = useState(false);
  console.log("update");

  const handlePara = useCallback(() => {
    showPara((prev) => !prev);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput para={false} />
      <Button onClick={handlePara}> update the DOM!</Button>
    </div>
  );
}

export default App;
