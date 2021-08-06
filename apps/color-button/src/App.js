import { useState } from "react";

import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("RebeccaPurple");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    buttonColor === "RebeccaPurple" ? "MidnightBlue" : "RebeccaPurple";

  return (
    <div className="app-container">
      <button
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelCaseWithSpaces(newButtonColor)}
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
