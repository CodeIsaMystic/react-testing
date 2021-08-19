import { render, screen } from "@testing-library/react"
import Header from "../Header"

describe("header component basic test suite", () => {
  it("should set the Header component initial conditions", () => {
    render(<Header />)

    const headerH2 = screen.getByRole("heading", {
      name: "All Locations",
    })
    expect(headerH2).toHaveTextContent("All Locations")

    const headerH1 = screen.getByRole("heading", {
      name: "Acme Locations",
    })
    expect(headerH1).toHaveTextContent("Acme Locations")
  })
})
