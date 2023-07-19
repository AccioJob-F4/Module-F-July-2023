import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div class="ball">
      <h1
        class="count"
        onDoubleClick={() => {
          alert("cant edit it");
        }}
      >
        {count}
      </h1>
      <button
        class="increment-button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
