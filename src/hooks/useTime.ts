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
    true
  )

  useEffect(() => {
    let fetchTime

    const checkIfMorningOrAfternoon = () => {
      if (time) {
        const hour = Number(time[0] + time[1])
        setIsMorningOrAfternoon(hour >= 5 && hour <= 19 ? true : false)
      }
    }

    if (process.env.NODE_ENV === "development") {
      fetchTime = async () => {
        //
        // Use this API when in development. For some reason, configuring environment variables for the API is not working.
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

        checkIfMorningOrAfternoon()
      }
    } else {
      fetchTime = async () => {
        //
        // Uses this API for production because Netlify hates APIs that aren't using HTTPS. The API above is using HTTP.
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

          checkIfMorningOrAfternoon()
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
