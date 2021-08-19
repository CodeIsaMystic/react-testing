import { render, screen } from "@testing-library/react"
import AllLocationsHeader from "../AllLocationsHeader"

describe("header component basic test suite", () => {
  it("should set the Header component initial conditions", () => {
    render(<AllLocationsHeader />)

    const headerH2 = screen.getByRole("heading", {
      name: "All locations",
    })
    expect(headerH2).toHaveTextContent("All locations")

    const headerH1 = screen.getByRole("heading", {
      name: "Acme Locations",
    })
    expect(headerH1).toHaveTextContent("Acme Locations")
  })
})
