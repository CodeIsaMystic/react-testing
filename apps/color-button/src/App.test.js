import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the button has the correct initial color and text", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to whitesmoke",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "rebeccapurple" });
});
test("the button clicked turns to whitesmoke", () => {
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

test("initial button conditions", () => {
  render(<App />);

  //check that the button starts enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to whitesmoke",
  });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", {
    name: "💨Disable the button",
  });
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables the button on the first click then enable on the second", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Disabled button has grey background and reverts to purple", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", {
    name: "💨Disable the button",
  });
  const colorButton = screen.getByRole("button", {
    name: "Change to whitesmoke",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("backgroundColor: gray");

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("backgroundColor: rebeccapurple");
});

test("Clicked disabled button has grey background and reverts to white", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", {
    name: "💨Disable the button",
  });
  const colorButton = screen.getByRole("button", {
    name: "Change to whitesmoke",
  });
});
