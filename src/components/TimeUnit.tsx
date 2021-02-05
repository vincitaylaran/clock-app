import useTime from "hooks/useTime"

function TimeUnit() {
  const { time, timezoneAbbreviation } = useTime()

  return time && timezoneAbbreviation ? (
    <div className="main__time__time-unit fade-in">
      <h1>{time}</h1>
      <h3>{timezoneAbbreviation}</h3>
    </div>
  ) : (
    <div className="main__time__no-time-unit" />
  )
}

export default TimeUnit
