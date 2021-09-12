import React from "react"
import { fireEvent, render } from "@testing-library/react"
import MovieDetails from "../components/movie-details"

const selectedMovie = {
  id: "1",
  title: "some title",
  description: "some desc",
  avg_rating: 3,
  no_of_ratings: 2,
}

describe("Movie Details Component", () => {
  test("should match a snapshot", () => {
    const { container } = render(<MovieDetails movie={selectedMovie} />)

    expect(container).toMatchSnapshot(
      "here is the snapshot title! just to be clear!"
    )
  })

  test("should display the selectedMovie title & desc", () => {
    const { queryByText } = render(<MovieDetails movie={selectedMovie} />)

    expect(queryByText(selectedMovie.title)).toBeTruthy()
    expect(queryByText(selectedMovie.description)).toBeTruthy()
  })

  test("should display the color stars", () => {
    const { container } = render(<MovieDetails movie={selectedMovie} />)
    const selected_stars = container.querySelectorAll(".orange")

    expect(selected_stars.length).toBe(selectedMovie.avg_rating)
  })

  test("should display the number of ratings", () => {
    const { getByTestId } = render(<MovieDetails movie={selectedMovie} />)
    expect(getByTestId("number-ratings").innerHTML).toBe(
      `(${selectedMovie.no_of_ratings})`
    )
  })

  test("mouseover should highlights the stars", () => {
    const { container } = render(<MovieDetails movie={selectedMovie} />)
    const stars = container.querySelectorAll(".rate-container svg")

    stars.forEach((star, index) => {
      fireEvent.mouseOver(star)
      const highlighted_stars = container.querySelectorAll(".purple")
      expect(highlighted_stars.length).toBe(index + 1)
    })
  })

  test("mouseleave should unhighlights the stars", () => {
    const { container } = render(<MovieDetails movie={selectedMovie} />)
    const stars = container.querySelectorAll(".rate-container svg")

    stars.forEach((star, index) => {
      fireEvent.mouseOver(star)
      fireEvent.mouseOut(star)
      const highlighted_stars = container.querySelectorAll(".purple")
      expect(highlighted_stars.length).toBe(0)
    })
  })

  test("click stars should trigger rating function to update", () => {
    const loadMovie = jest.fn()
    const { container } = render(
      <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
    )
    const stars = container.querySelectorAll(".rate-container svg")

    stars.forEach((star) => {
      fireEvent.click(star)
    })

    setTimeout(() => {
      expect(loadMovie).toBeCalledTimes(stars.length)
    })
  })
})
