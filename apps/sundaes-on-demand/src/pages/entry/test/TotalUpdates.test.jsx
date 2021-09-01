import { render, screen } from "../../../test-utils/testing-library-utils"
import userEvent from "@testing-library/user-event"

import Options from "../Options"
import { OrderDetailsProvider } from "../../../contexts/OrderDetails"

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
