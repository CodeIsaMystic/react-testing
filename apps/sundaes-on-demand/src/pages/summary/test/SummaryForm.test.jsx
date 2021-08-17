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
