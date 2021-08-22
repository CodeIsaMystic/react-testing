import { useEffect, useState } from "react"
import axios from "axios"
import Row from "react-bootstrap/Row"

import { ScoopOptions } from "./ScoopOptions"
import { ToppingsOptions } from "./ToppingsOptions"

export function Options({ optionType }) {
  const [items, setItems] = useState([])

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //TODO: handling error response
      })
  }, [optionType])

  // TODO: replace `null` to `ToppingsOption` when available
  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingsOptions

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return <Row>{optionItems}</Row>
}
