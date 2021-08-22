import { render, screen } from "@testing-library/react"

import Options from "../Options"

describe("tests on Options component", () => {
  it("should display image for each scoop option from server", async () => {
    render(<Options optionType="scoops" />)

    // find the images
    const scoopImages = await screen.findAllByRole("img", {
      name: /scoop$/i,
    })
    // assertion
    expect(scoopImages).toHaveLength(2)

    //confirm alt text
    const altText = scoopImages.map((element) => element.alt)
    // assertion
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"])
  })

  it("should display image for each topping option from server", async () => {
    render(<Options optionType="toppings" />)

    // find the images
    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    })
    // assertion
    expect(toppingImages).toHaveLength(2)

    // confirm alt text
    const altText = toppingImages.map((element) => element.alt)
    // assertion
    expect(altText).toEqual(["M&Ms topping", "Cherries topping"])
  })
})
