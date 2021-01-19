import React from "react"

interface Props {
  city: string | undefined
  regionCode: string | undefined
}

function Location({ city, regionCode }: Props) {
  return city && regionCode ? (
    <div className="time__location">
      <h3>
        In {city}, {regionCode}
      </h3>
    </div>
  ) : (
    <div className="time__no-location" />
  )
}

export default Location
