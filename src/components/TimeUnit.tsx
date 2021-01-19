import React from "react"

interface Props {
  time: string | undefined
  abbreviation: string | undefined
}

function TimeUnit({ time, abbreviation }: Props) {
  return time && abbreviation ? (
    <div className="time__time-unit">
      <h1>
        {time} {abbreviation}
      </h1>
    </div>
  ) : (
    <div className="time__no-time-unit" />
  )
}

export default TimeUnit
