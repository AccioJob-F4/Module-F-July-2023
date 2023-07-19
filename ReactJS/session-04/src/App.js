import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { DECREMENT, INCREMENT } from "./reduxStore/actions";

const App = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header>
        Counter : {store.count}
        <br />
        <button
          onClick={() => {
            dispatch({ type: INCREMENT });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: DECREMENT });
          }}
        >
          -
        </button>
      </header>
    </div>
  );
};

export default App;
