import React, { useState, useEffect } from "react"

import dayjs from "dayjs"

import "styles/_time.scss"

import Greeting from "components/Greeting"
import TimeUnit from "components/TimeUnit"
import Location from "components/Location"
import ExpandButton from "components/ExpandButton"

function Time() {
  const [time, setTime] = useState<string | undefined>()
  const [timezoneAbbreviation, setTimezoneAbbreviation] = useState<
    string | undefined
  >()
  const [regionCode, setRegionCode] = useState<string | undefined>()
  const [city, setCity] = useState<string | undefined>()

  useEffect(() => {
    const fetchTime = async () => {
      const request = await fetch("http://worldtimeapi.org/api/ip")
      const response = await request.json()

      const {
        datetime,
        day_of_week,
        day_of_year,
        tiemzone,
        week_number,
        abbreviation,
      } = response

      setTime(dayjs(datetime).format("HH:mm"))
      setTimezoneAbbreviation(abbreviation)
    }

    const fetchCity = async () => {
      const request = await fetch("https://freegeoip.app/json/")
      const response = await request.json()
      const { region_code, city } = response
      setCity(city)
      setRegionCode(region_code)
    }

    fetchTime()
    fetchCity()
  }, [])

  return (
    <div className="time">
      <Greeting time={time} />
      <TimeUnit time={time} abbreviation={timezoneAbbreviation} />
      <Location city={city} regionCode={regionCode} />
      <ExpandButton />
    </div>
  )
}

export default Time

/**
 <Greeting time:string />
 <TimeUnit time:string abbreviation:string />
 <Location city:string regionCode:string />
 <ExpandButton onClick />
 */
