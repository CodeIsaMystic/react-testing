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
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-check"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-check">💨Disable the button</label>
    </div>
  );
}

export default App;
