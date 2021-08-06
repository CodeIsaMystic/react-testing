import { useState } from "react";

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("rebeccapurple");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    buttonColor === "rebeccapurple" ? "whitesmoke" : "rebeccapurple";

  return (
    <div className="app-container">
      <button
        style={{ backgroundColor: buttonColor, color: "white" }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
