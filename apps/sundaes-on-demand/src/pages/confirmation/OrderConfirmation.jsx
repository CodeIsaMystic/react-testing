import { useState, useEffect } from "react"
import axios from "axios"

import Button from "react-bootstrap/Button"

import { useOrderDetails } from "../../contexts/OrderDetails"

function OrderConfirmation({ setOrderPhase }) {
  const [, , resetOrder] = useOrderDetails()
  const [orderNumber, setOrderNumber] = useState(null)

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber)
      })
      .catch((error) => {
        // TODO: handle error
      })
  }, [])

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
