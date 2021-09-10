import React from "react"
import { fireEvent, getByLabelText, render } from "@testing-library/react"
import MovieForm from "../components/movie-form"

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
})
