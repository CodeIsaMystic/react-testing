import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SummaryForm from "../SummaryForm"

describe("the tests suite for the SummaryForm Component", () => {
  it("should set the SummaryForm component Initial Conditions", () => {
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
  it("set the Checkbox disabling the button on first click then enabling on second click", () => {
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
    expect(popoverNullDefaultVal).not.toBeInTheDocument()
  })
  it("should show the PopOver text on hover and disappear when out", async () => {
    render(<SummaryForm />)
    //popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    userEvent.hover(termsAndConditions)

    const popover = screen.getByText(/no ice cream will actually be delivered/i)
    expect(popover).toBeInTheDocument()

    //popover disappears when we mouse out
    userEvent.unhover(termsAndConditions)
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    )
  })
})
