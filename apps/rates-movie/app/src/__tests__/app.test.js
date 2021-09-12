import React from "react"
import {
  render,
  wait,
  waitForElement,
  waitForElementToBeRemoved,
  screen,
  act,
  fireEvent,
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

  test("should display an error on bad request", async () => {
    fetch.mockResponseOnce(null, { status: 500 })

    act(() => {
      render(<App />)
    })

    expect.assertions(1)
    await waitForElementToBeRemoved(() => screen.getByTestId("loading-element"))
    expect(screen.queryByText(/error loading movies/i)).toBeTruthy()
  })

  test("should display list of movies after API request", async () => {
    fetch.mockResponseOnce(JSON.stringify(movies))

    act(() => {
      render(<App />)
    })

    await waitForElementToBeRemoved(() => screen.getByTestId("loading-element"))
    const moviesList = screen.getByTestId("movies-list-element")
    expect(moviesList).toBeTruthy()
    // testing children (movies = 2)
    expect(moviesList.children.length).toBe(2)
  })

  test("new movie button should be present and trigger the form", async () => {
    fetch.mockResponseOnce(JSON.stringify(movies))

    act(() => {
      render(<App />)
    })

    await waitForElementToBeRemoved(() => screen.getByTestId("loading-element"))
    const button = screen.getByRole("button", { name: "New movie" })
    fireEvent.click(button)

    await wait(() => {
      expect(screen.getByTestId("movie-form-element")).toBeTruthy()
    })
  })
})
