import React from "react"

interface Props {
  city: string | undefined
  regionCode: string | undefined
}

function Location({ city, regionCode }: Props) {
  return (
    <div>
      <h3>
        In {city}, {regionCode}
      </h3>
    </div>
  )
}

export default Location
