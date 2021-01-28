import React from "react"

interface Props {
  time: string | undefined
  abbreviation: string | undefined
}

function TimeUnit({ time, abbreviation }: Props) {
  return time && abbreviation ? (
    <div className="main__time__time-unit fade-in">
      <h1>{time}</h1>
      <h3>{abbreviation}</h3>
    </div>
  ) : (
    <div className="main__time__no-time-unit" />
  )
}

export default TimeUnit
