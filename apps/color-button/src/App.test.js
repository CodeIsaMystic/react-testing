import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the button has the correct initial color and text", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to whitesmoke",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "rebeccapurple" });
});
test("the button clicked turns to whitesmokes", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to whitesmoke",
  });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "whitesmoke" });
});
test("the button clicked change his text content", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to whitesmoke",
  });

  fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe("Change to rebeccapurple");
});

test("initial conditions", () => {
  render(<App />);

  //check that the button starts enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to whitesmoke",
  });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
