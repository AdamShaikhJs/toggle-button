import React, { useState } from "react";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);

  let title = toggle ? "ON" : "OFF";
  return (
    <>
      <button onClick={() => setToggle(!toggle)}> {title}</button>
    </>
  );
}

export default App;
