import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"
import { replaceCamelCaseWithSpaces } from "./App"

test("the button has the correct initial color and text", () => {
  render(<App />)

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  })

  expect(colorButton).toHaveStyle({ backgroundColor: "RebeccaPurple" })
})
test("the button clicked turns to MidnightBlue", () => {
  render(<App />)

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  })

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" })
})
test("the button clicked change his text content", () => {
  render(<App />)

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  })

  fireEvent.click(colorButton)
  expect(colorButton).toHaveTextContent("Change to Rebecca Purple")
})

test("initial button conditions", () => {
  render(<App />)

  //check that the button starts enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  })
  expect(colorButton).toBeEnabled()

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked()
})

test("checkbox disables the button on the first click then enable on the second", () => {
  render(<App />)

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  })
  const checkbox = screen.getByRole("checkbox", {
    name: "💨Disable the button",
  })

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test("Disabled button has grey background and reverts to RebeccaPurple", () => {
  render(<App />)

  const checkbox = screen.getByRole("checkbox", {
    name: "💨Disable the button",
  })
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  })

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle("backgroundColor: gray")

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle("backgroundColor: RebeccaPurple")
})

test("Clicked disabled button has grey background and reverts to RebeccaPurple", () => {
  render(<App />)

  const checkbox = screen.getByRole("checkbox", {
    name: "💨Disable the button",
  })
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  })

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle("backgroundColor: gray")

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle("backgroundColor: RebeccaPurple")
})

describe("space before camel-case Capital letters", () => {
  test("Works for no inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("white")).toBe("white")
  })
  test("Works for one inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue")
  })
  test("Works for multiple capital letters", () => {
    expect(replaceCamelCaseWithSpaces("RebeccaPurple")).toBe("Rebecca Purple")
  })
})
