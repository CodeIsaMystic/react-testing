import React from "react"
import { fireEvent, render, wait, screen } from "@testing-library/react"
import MovieForm from "../components/movie-form"

global.fetch = require("jest-fetch-mock")

const empty_movie = {
  title: "",
  description: "",
}

const movie = {
  id: 3,
  title: "This is the first movie title",
  description: "And his long description",
}

describe("Movie form Component", () => {
  test("should have form elements", () => {
    const { getByLabelText, getByRole } = render(
      <MovieForm movie={empty_movie} />
    )
    expect(getByLabelText(/title/i)).toBeTruthy()
    expect(getByLabelText(/description/i)).toBeTruthy()
    expect(getByRole("button", { name: /create/i })).toBeTruthy()
  })

  test("should display form elements with movie data", () => {
    const { getByLabelText, getByRole, debug } = render(
      <MovieForm movie={movie} />
    )
    // debug(getByLabelText(/title/i))
    expect(getByLabelText(/title/i).value).toBe(movie.title)
    expect(getByLabelText(/description/i).value).toBe(movie.description)
    expect(getByRole("button", { name: /update/i })).toBeTruthy()
  })

  test("should trigger API request when clicked on button", async () => {
    const udpatedMovie = jest.fn()

    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(movie),
      })
    })

    // fetch.mockImplementationOnce(JSON.stringify(movie))

    const { getByRole } = render(
      <MovieForm movie={movie} udpatedMovie={udpatedMovie} />
    )

    const submitBtn = getByRole("button", { name: /update/i })

    fireEvent.click(submitBtn)

    await wait(() => {
      expect(udpatedMovie).toBeCalledTimes(1)
    })
  })

  test("should not trigger API request when clicked on button with empty form", async () => {
    const udpatedMovie = jest.fn()

    fetch.mockResponseOnce(JSON.stringify(movie))

    const { getByRole } = render(
      <MovieForm movie={empty_movie} udpatedMovie={udpatedMovie} />
    )
    const submitBtn = getByRole("button", { name: /create/i })
    fireEvent.click(submitBtn)

    await wait(() => {
      expect(udpatedMovie).toBeCalledTimes(0)
    })
  })

  test("should trigger API call when clicked on new movie btn", async () => {
    const movieCreated = jest.fn()
    const { getByRole } = render(
      <MovieForm movie={empty_movie} movieCreated={movieCreated} />
    )
    // what we are mocking...
    fetch.mockResponseOnce(JSON.stringify(movie))
    // what we are looking for...
    const titleInput = screen.getByLabelText(/title/i)
    const descInput = screen.getByLabelText(/description/i)
    fireEvent.change(titleInput, { target: { value: "Title1" } })
    fireEvent.change(descInput, { target: { value: "Description1" } })

    const submitBtn = getByRole("button", { name: /create/i })
    fireEvent.click(submitBtn)

    await wait(() => {
      // accessing the data and finding matchers...
      // console.log(movieCreated.mock.calls) // console.log(movieCreated.mock.calls[0][0])
      // expect(movieCreated.mock.calls[0][0]).toStrictEqual(movie)
      expect(movieCreated).toBeCalledWith(movie)
    })
  })
})
