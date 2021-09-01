import Container from "react-bootstrap/Container"
import OrderEntry from "./pages/entry/OrderEntry"
import { OrderDetailsProvider } from "./contexts/OrderDetails"

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/*Summary and Entry pages needs a Provider*/}
        <OrderEntry />
      </OrderDetailsProvider>
      {/*Confirmmation page does not need*/}
    </Container>
  )
}

export default App
