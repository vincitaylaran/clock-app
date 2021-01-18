import React, { useState, useEffect } from "react"

function Time() {
  const [time, setTime] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("http://worldtimeapi.org/api/ip")
      const {
        datetime,
        day_of_week,
        day_of_year,
        tiemzone,
        week_number,
        abbreviation,
      } = await request.json()

      console.log(datetime)

      setTime(datetime)
    }
    fetchData()
  }, [])

  return <div>{time}</div>
}

export default Time
