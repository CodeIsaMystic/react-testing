import { render, screen } from "../../../test-utils/testing-library-utils"
import userEvent from "@testing-library/user-event"

import Options from "../Options"

describe.only("tests on Options component", () => {
  test("should display image for each scoop option from server", async () => {
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

  test("should display image for each topping option from server", async () => {
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

  test("do not update total if scoop input is invalid", async () => {
    render(<Options optionType="scoops" />)

    // expect button to be enabled after adding scoop
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    })
    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, "-1")

    // make sure scoops subtotal hasn't updated
    const scoopsSubtotal = screen.getByText("Scoops total: $0.00")
    expect(scoopsSubtotal).toBeInTheDocument()
  })
})
