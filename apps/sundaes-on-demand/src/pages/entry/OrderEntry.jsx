import Options from "./Options"

import { useOrderDetails } from "../../contexts/OrderDetails"

import Button from "react-bootstrap/Button"

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails()

  // disabled order button if there are not any scoops ordered
  const orderDisabled = orderDetails.totals.scoops === "$0.00"

  return (
    <div>
      <h1>Design you sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase("review")}>
        Order Sundae!
      </Button>
    </div>
  )
}
