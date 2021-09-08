import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import ScoopOptions from "../ScoopOptions"

test.only("indicate if scoop count is non an integer or out of range", () => {
  render(<ScoopOption name="" imagePath="" updateItemCount={jest.fn()} />)
})
