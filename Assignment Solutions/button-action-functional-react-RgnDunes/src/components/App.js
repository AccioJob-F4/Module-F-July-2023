import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="main">
      <button
        id="click"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        Click
      </button>
      {clicked && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
