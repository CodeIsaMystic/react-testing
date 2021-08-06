import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the button has the correct initial color and text", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
test("the button clicked turns to blues", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
test("the button clicked change his text content", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe("Change to red");
});
