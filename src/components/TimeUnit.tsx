import React from "react"
import useTime from "hooks/useTime"

interface Props {
  time: string | undefined
  abbreviation: string | undefined
}

function TimeUnit() {
  const { time, timezoneAbbreviation } = useTime()

  return time && timezoneAbbreviation ? (
    <div className="main__time__time-unit">
      <h1>{time}</h1>
      <h3>{timezoneAbbreviation}</h3>
    </div>
  ) : (
    <div className="main__time__no-time-unit" />
  )
}

export default TimeUnit
