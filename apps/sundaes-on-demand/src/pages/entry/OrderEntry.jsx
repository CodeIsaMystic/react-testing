import { useOrderDetails } from "../../contexts/OrderDetails"
import Options from "./Options"

export default function OrderEntry() {
  const [orderDetails] = useOrderDetails()

  return (
    <div>
      <h1>Design you sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </div>
  )
}
