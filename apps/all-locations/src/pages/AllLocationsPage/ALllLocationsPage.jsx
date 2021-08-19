import React from "react"

import AllLocationsHeader from "../../components/AllLocationsHeader/AllLocationsHeader"
import LocationCard from "../../components/LocationCard/LocationCard"

function AllLocationsPage() {
  return (
    <div className="container">
      <AllLocationsHeader />
      <LocationCard />
    </div>
  )
}
export default AllLocationsPage
