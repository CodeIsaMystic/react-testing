import { useState } from "react";

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("rebeccapurple");
  const newButtonColor =
    buttonColor === "rebeccapurple" ? "whitesmoke" : "rebeccapurple";

  return (
    <div className="app-container">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
