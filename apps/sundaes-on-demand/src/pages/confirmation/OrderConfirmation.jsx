import React, { useState, useEffect } from "react"
import axios from "axios"

import Button from "react-bootstrap/Button"
import AlertBanner from "../common/AlertBanner"

import { useOrderDetails } from "../../contexts/OrderDetails"

function OrderConfirmation({ setOrderPhase }) {
  const [, , resetOrder] = useOrderDetails()
  const [orderNumber, setOrderNumber] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      // in a real app we would get order details from context
      // and send with Post
      .post(`http://localhost:3030/order`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber)
      })
      .catch((error) => {
        // TODO: handle error
        setError(true)
      })
  }, [])

  if (error) {
    return <AlertBanner message={null} variant={null} />
  }

  function handleClick() {
    // clear the order details
    resetOrder()

    // send back to the order page
    setOrderPhase("inProgress")
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: "55%" }}>
          ( as per our terms and conditions, nothing will happen now )
        </p>

        <Button onClick={handleClick}>Create a new order</Button>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}
export default OrderConfirmation
