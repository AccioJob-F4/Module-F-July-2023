import React, { useState, useRef } from "react";

import "./App.css";

const App = () => {
  // const [data, setData] = useState("");
  const ref = useRef(null);

  const handleClick = () => {
    console.log(ref.current.value);
  };

  return (
    <div>
      <h1
        className="hola"
        style={{
          fontSize: "5em",
        }}
      >
        Hola
      </h1>

      <br />

      <input
        ref={ref}
        type="text"
        // value={data}
        // onChange={(e) => {
        //   setData(e.target.value);
        // }}
      />
      <button onClick={handleClick}>CLICK ME!</button>
    </div>
  );
};

export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hola- Class</h1>
//       </div>
//     );
//   }
// }
