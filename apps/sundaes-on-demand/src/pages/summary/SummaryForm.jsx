import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Popover from "react-bootstrap/Popover"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"

export default function SummaryForm() {
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and conditions</span>
      </OverlayTrigger>
    </span>
  )

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checkboxChecked}
          onChange={(e) => setCheckboxChecked(e.target.checked)}
          label={checkboxLabel}
        ></Form.Check>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!checkboxChecked}>
        Confirm order
      </Button>
    </Form>
  )
}
