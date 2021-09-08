import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import App from "../App"

test("the order phases for happy path", async () => {
  // render the App
  render(<App />)

  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  })
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, "1")

  // does not need to await because it already called the scoops end point with vanilla
  const chocolateInput = screen.getByRole("spinbutton", {
    name: "Chocolate",
  })
  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, "2")

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  })
  userEvent.click(cherriesCheckbox)

  // find and click the order button
  const orderSummaryButton = screen.getByRole("button", {
    name: /order sundae/i,
  })
  userEvent.click(orderSummaryButton)

  // check summary info based on order
  const summaryHeading = screen.getByRole("heading", {
    name: "Order Summary",
  })
  expect(summaryHeading).toBeInTheDocument()

  const scoopsHeading = screen.getByRole("heading", { name: "Scoops: $6.00" })
  expect(scoopsHeading).toBeInTheDocument()

  const toppingsHeading = screen.getByRole("heading", {
    name: "Toppings: $1.50",
  })
  expect(toppingsHeading).toBeInTheDocument()

  // check summary option items
  expect(screen.getByText("1 Vanilla")).toBeInTheDocument()
  expect(screen.getByText("2 Chocolate")).toBeInTheDocument()
  expect(screen.getByText("Cherries")).toBeInTheDocument()

  // as alternative...
  // const optionItems = screen.getAllByRole("listitem")
  // const optionItemsText = optionItems.map((item) => item.textContent)
  // expect(optionItemsText).toEqual(["1 Vanilla", "2 Chocolate", "Cherries"])

  // accepts terms, conditions and click the submit btn to confirm order
  const tcCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  })
  userEvent.click(tcCheckbox)

  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  })
  userEvent.click(confirmOrderButton)

  // expecting Loading to show
  const loading = screen.getByText(/loading/i)
  expect(loading).toBeInTheDocument()

  // confirm order number on confirmation page
  // This one is async because there's a Post request to server in between summary  and confirmation  pages
  const thankYouHeader = await screen.findByRole("heading", {
    name: /thank you/i,
  })
  expect(thankYouHeader).toBeInTheDocument()

  // expect that loading disappear
  const notLoading = screen.queryByText("loading")
  expect(notLoading).not.toBeInTheDocument()

  const orderNumber = await screen.findByText(/order number/i)
  expect(orderNumber).toBeInTheDocument()

  // click new order button on confirmation page
  const newOrderButton = screen.getByRole("button", { name: /new order/i })
  userEvent.click(newOrderButton)

  // check that scoops and toppings subtotal have been reset
  const scoopsTotal = await screen.findByText("Scoops total: $0.00")
  expect(scoopsTotal).toBeInTheDocument()

  const toppingsTotal = await screen.findByText("Toppings total: $0.00")
  expect(toppingsTotal).toBeInTheDocument()

  // do we need to await anything to avoid tests errors?
  // wait fo items to appear, to simulate the mount component state
  // happening after tests are over
  // await screen.findByRole("spinbutton", { name: "Vanilla" })
  // await screen.findByRole("checkbox", { name: "Cherries" })
})

test("Toppings header is not on the summary page if no toppings ordered", async () => {
  // render the App
  render(<App />)

  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  })
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, "1")

  // does not need to await because it already called the scoops end point with vanilla
  const chocolateInput = screen.getByRole("spinbutton", {
    name: "Chocolate",
  })
  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, "2")

  // find and click the order button
  const orderSummaryButton = screen.getByRole("button", {
    name: /order sundae/i,
  })
  userEvent.click(orderSummaryButton)

  const scoopsHeading = screen.getByRole("heading", { name: "Scoops: $6.00" })
  expect(scoopsHeading).toBeInTheDocument()

  const toppingsHeading = screen.queryByRole("heading", {
    name: /toppings/i,
  })
  expect(toppingsHeading).not.toBeInTheDocument()
})
