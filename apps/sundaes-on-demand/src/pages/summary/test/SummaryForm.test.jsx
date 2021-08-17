import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SummaryForm from "../SummaryForm"

test("Initial Condition", () => {
  render(<SummaryForm />)

  const checkboxBtn = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  })
  expect(checkboxBtn).not.toBeChecked()

  const confirmBtn = screen.getByRole("button", {
    name: /confirm order/i,
  })
  expect(confirmBtn).toBeDisabled()
})
test("Checkbox disables button on first click then enables on second click", () => {
  render(<SummaryForm />)

  const checkboxBtn = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  })
  const confirmBtn = screen.getByRole("button", {
    name: /confirm order/i,
  })
  userEvent.click(checkboxBtn)
  expect(confirmBtn).toBeEnabled()

  userEvent.click(checkboxBtn)
  expect(confirmBtn).toBeDisabled()
})
it("should not show the PopOver text on start", () => {
  render(<SummaryForm />)
  //popover starts out hidden
  const popoverNullDefaultVal = screen.queryByText(
    /no ice cream will actually be delivered/i
  )
  expect(popoverNullDefaultVal).toBeNull()
})
it("should show the PopOver text on hover and disappear when out", () => {
  render(<SummaryForm />)
  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  userEvent.hover(termsAndConditions)

  const popover = screen.getByText(/no ice cream will actually be delivered/i)
  expect(popover).toBeInTheDocument()

  //popover disappears when we mouse out
  userEvent.unhover(termsAndConditions)
  const popoverBackToNull = screen.queryByText(
    /no ice cream will be delivered/i
  )
  expect(popoverBackToNull).toBeNull()
})
