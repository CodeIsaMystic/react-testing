import { render, screen } from "@testing-library/react"
import LocationCard from "../LocationCard"

describe("the tests on Location Card component", () => {
  it("should render the LocationCard component on initial conditions", () => {
    render(<LocationCard />)
  })
})
