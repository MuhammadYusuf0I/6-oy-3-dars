import data from "./data/data.json";
import "./App.css";
import Drum from "./companents/Drum";
import Books from "./companents/Books";
import { useState } from "react";

function App() {
  const [minVal, setMinVal] = useState(data[0]);
  const [maxVal, setMaxVal] = useState(data[99]);
  const [random, setRandom] = useState(data[5]);

  function handleDrum() {
    setRandom(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
    return setRandom;
  }
  return (
    <>
      <div className="container">
        <div className="drum-wrapper">
          <span style={{ random }}></span>
          <input
            type="text"
            value={data[0]}
            onChange={(e) => setMinVal(e.target.value)}
          />
          <input
            type="text"
            value={data[99]}
            onChange={(e) => setMaxVal(e.target.value)}
          />
          <button className="btn" onClick={handleDrum}>
            Aylantirish
          </button>
        </div>

        <Books data={data} />
        {/* {console.log(data[0])} */}
      </div>
    </>
  );
}

export default App;
