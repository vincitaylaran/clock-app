import { useState, useEffect } from "react"
import dayjs from "dayjs"

function useTime() {
  const [time, setTime] = useState<string>()
  const [timezoneAbbreviation, setTimezoneAbbreviation] = useState<string>()

  const fetchTime = async () => {
    const request = await fetch("http://worldtimeapi.org/api/ip")
    const response = await request.json()

    const {
      datetime,
      day_of_week,
      day_of_year,
      timezone,
      week_number,
      abbreviation,
    } = response

    setTime(dayjs(datetime).format("HH:mm"))
    setTimezoneAbbreviation(abbreviation)
  }

  useEffect(() => {
    fetchTime()
  }, [])

  return { time, timezoneAbbreviation }
}

export default useTime
