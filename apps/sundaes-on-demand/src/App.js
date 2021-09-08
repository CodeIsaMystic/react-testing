import { useState } from "react"

import Container from "react-bootstrap/Container"

import OrderSummary from "./pages/summary/OrderSummary"
import OrderConfirmation from "./pages/confirmation/OrderConfirmation"
import OrderEntry from "./pages/entry/OrderEntry"

import { OrderDetailsProvider } from "./contexts/OrderDetails"

function App() {
  // 3main phases: inProgress, review & completed
  const [orderPhase, setOrderPhase] = useState("inProgress")

  // Default to order page
  let Component = OrderEntry

  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry
      break
    case "review":
      Component = OrderSummary
      break
    case "completed":
      Component = OrderConfirmation
      break
    default:
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  )
}

export default App
