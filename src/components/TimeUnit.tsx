import React from "react"

interface Props {
  time: string | undefined
  abbreviation: string | undefined
}

function TimeUnit({ time, abbreviation }: Props) {
  return (
    <div>
      <h1>
        {time} {abbreviation}
      </h1>
    </div>
  )
}

export default TimeUnit
