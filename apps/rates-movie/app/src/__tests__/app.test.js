import React from "react"
import {
  fireEvent,
  render,
  waitForElement,
  screen,
  act,
} from "@testing-library/react"
import App from "../App"

global.fetch = require("jest-fetch-mock")

const movies = [
  {
    id: 3,
    title: "This is the first movie title",
    description: "And his long description",
  },
  {
    id: 4,
    title: "This is the second movie title",
    description: "And his long description2",
  },
]

describe("App component", () => {
  test("should display and hide loading", async () => {
    fetch.mockResponseOnce(JSON.stringify(movies))

    act(() => {
      render(<App />)
    })
    expect(screen.getByTestId("loading-element")).toBeTruthy()
    await waitForElement(() => screen.getAllByTestId("movies-list-element"))
    expect(screen.queryByTestId("loading-element")).toBeFalsy()
  })
})
