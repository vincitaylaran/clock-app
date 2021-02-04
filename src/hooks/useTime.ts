import { useState, useEffect } from "react"
import dayjs from "dayjs"

function useTime() {
  const [time, setTime] = useState<string>()
  const [timezoneAbbreviation, setTimezoneAbbreviation] = useState<string>()
  const [timezone, setTimezone] = useState<string>()
  const [dayOfWeek, setDayOfWeek] = useState<number>()
  const [dayOfYear, setDayOfYear] = useState<number>()
  const [weekNumber, setWeekNumber] = useState<number>()

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
    setDayOfWeek(day_of_week)
    setDayOfYear(day_of_year)
    setTimezone(timezone)
    setWeekNumber(week_number)
  }

  useEffect(() => {
    fetchTime()
  }, [])

  return {
    time,
    timezoneAbbreviation,
    timezone,
    dayOfWeek,
    dayOfYear,
    weekNumber,
  }
}

export default useTime
