import React from "react"

interface Props {
  city: string | undefined
  regionCode: string | undefined
}

function Location({ city, regionCode }: Props) {
  return city && regionCode ? (
    <h3>
      In {city}, {regionCode}
    </h3>
  ) : (
    <div className="main__time__no-location fade-in" />
  )
}

export default Location
