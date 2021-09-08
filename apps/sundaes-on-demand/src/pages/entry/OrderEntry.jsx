import Options from "./Options"

import { useOrderDetails } from "../../contexts/OrderDetails"

import Button from "react-bootstrap/Button"

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails()

  return (
    <div>
      <h1>Design you sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase("review")}>Order Sundae!</Button>
    </div>
  )
}
