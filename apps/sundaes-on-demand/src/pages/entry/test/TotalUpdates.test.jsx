import { render, screen } from "../../../test-utils/testing-library-utils"
import userEvent from "@testing-library/user-event"

import Options from "../Options"
import OrderEntry from "../OrderEntry"

// Scoops
it("should update the scoop total when the scoops  change", async () => {
  render(<Options optionType="scoops" />)

  // make sure the total starts out to $0.00
  const scoopsSubTotal = screen.getByText("Scoops total: $", { exact: false })

  expect(scoopsSubTotal).toHaveTextContent("0.00")

  // update the vanilla scoop to $1 and check the sub total
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  })

  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, "1")

  expect(scoopsSubTotal).toHaveTextContent("2.00")

  // update the chocolate scoop to $2 and check the sub total
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  })

  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, "2")

  expect(scoopsSubTotal).toHaveTextContent("6.00")
})

// Toppings
it("should update the topping total when the toppings  change", async () => {
  render(<Options optionType="toppings" />)

  // make sure the total starts out to $0.00
  const toppingsSubTotal = screen.getByText("Toppings total: $", {
    exact: false,
  })

  expect(toppingsSubTotal).toHaveTextContent("0.00")

  // update the m&ms toppings to $1 and check the sub total
  const mmsCheckbox = await screen.findByRole("checkbox", {
    name: "M&Ms",
  })

  userEvent.click(mmsCheckbox)

  expect(toppingsSubTotal).toHaveTextContent("1.50")

  // update the cherries toppings to $2 and check the sub total
  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  })

  // Adding the option
  userEvent.click(cherriesCheckbox)
  expect(toppingsSubTotal).toHaveTextContent("3.00")

  // Removing the option
  userEvent.click(cherriesCheckbox)
  expect(toppingsSubTotal).toHaveTextContent("1.50")
})

// Grand Total
describe("grand total", () => {
  it("grand total updates properly if scoop is added first", async () => {
    render(<OrderEntry />)
    const grandTotal = screen.getByRole("heading", { name: /grand total: \$/i })

    // check that total starts at $0.00
    expect(grandTotal).toHaveTextContent("0.00")

    // updates vanilla scoop to 2 and check  grand total
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    })
    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, "2")
    expect(grandTotal).toHaveTextContent("4.00")

    // add the cherries topping
    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    })

    userEvent.click(cherriesCheckbox)
    expect(grandTotal).toHaveTextContent("5.50")
  })

  it("grand total updates properly if topping is added first", async () => {
    render(<OrderEntry />)

    // add the cherries topping and check grand total
    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    })
    userEvent.click(cherriesCheckbox)
    const grandTotal = screen.getByRole("heading", { name: /grand total: \$/i })
    expect(grandTotal).toHaveTextContent("1.50")

    // updates vanilla scoop to 2
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    })
    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, "2")
    expect(grandTotal).toHaveTextContent("5.50")
  })

  it("grand total updates properly if item is removed", async () => {
    render(<OrderEntry />)

    // add the cherries topping and vanilla
    const cherriesCheckbox = await screen.findByRole("checkbox", {
      name: "Cherries",
    })
    userEvent.click(cherriesCheckbox)
    // grand total $1.50

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    })
    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, "2")

    // remove 1 vanilla
    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, "1")
    // check grand total
    const grandTotal = screen.getByRole("heading", { name: /grand total: \$/i })
    expect(grandTotal).toHaveTextContent("3.50")

    // remove the cherries topping
    userEvent.click(cherriesCheckbox)
    // check grand total
    expect(grandTotal).toHaveTextContent("2.00")
  })
})
