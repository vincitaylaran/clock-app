import { useState, useEffect } from "react"
import dayjs from "dayjs"

function useTime() {
  const [time, setTime] = useState<string>()
  const [timezoneAbbreviation, setTimezoneAbbreviation] = useState<string>()
  const [timezone, setTimezone] = useState<string>()
  const [dayOfWeek, setDayOfWeek] = useState<number>()
  const [dayOfYear, setDayOfYear] = useState<number>()
  const [weekNumber, setWeekNumber] = useState<number>()
  const [isMorningOrAfternoon, setIsMorningOrAfternoon] = useState<boolean>(
    false
  )

  useEffect(() => {
    const fetchTime = async () => {
      const endpoint = `https://timezoneapi.io/api/ip/?token=${process.env.REACT_APP_TOKEN}`
      const req = await fetch(endpoint)
      const res = await req.json()

      if (res.meta.code === "200") {
        const {
          date_time,
          offset_tzab, // timezone abbr
          offset_tzid, // region and city
          day,
          date,
          day_abbr,
        } = res.data.datetime

        setTime(dayjs(date_time).format("HH:mm"))
        setTimezoneAbbreviation(offset_tzab)
        setTimezone(offset_tzid)
        setDayOfWeek(day)
        setDayOfYear(date)
        setWeekNumber(day_abbr)

        if (time) {
          const hour = Number(time[0] + time[1])
          if (hour >= 12 && hour <= 19) {
            setIsMorningOrAfternoon(true)
          }
        }
      }
    }

    fetchTime()
  }, [time])

  return {
    time,
    timezoneAbbreviation,
    timezone,
    dayOfWeek,
    dayOfYear,
    weekNumber,
    isMorningOrAfternoon,
  }
}

export default useTime
