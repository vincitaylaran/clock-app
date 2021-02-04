import React, { useState, useEffect } from "react"

import dayjs from "dayjs"

import "styles/_quote-and-time.scss"

import Greeting from "components/Greeting"
import TimeUnit from "components/TimeUnit"
import Location from "components/Location"
import Quote from "components/Quote"
import ExpandButton from "components/ExpandButton"

interface Props {
  onMore: () => void
  isMoreClicked: boolean
}

function Time({ onMore, isMoreClicked }: Props) {
  const [time, setTime] = useState<string | undefined>()
  const [timezoneAbbreviation, setTimezoneAbbreviation] = useState<
    string | undefined
  >()
  const [regionCode, setRegionCode] = useState<string | undefined>()
  const [city, setCity] = useState<string | undefined>()

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

  useEffect(() => {
    fetchTime()
    fetchCity()
  }, [])

  return (
    <div className="main">
      {time && timezoneAbbreviation && regionCode && city ? (
        <React.Fragment>
          <div className={`main__quote`}>
            <Quote isMoreClicked={isMoreClicked} />
          </div>
          <div>
            <div className={`main__time`}>
              <Greeting time={time} />
              <TimeUnit time={time} abbreviation={timezoneAbbreviation} />
            </div>
            <div className={`main__location-more-button `}>
              <Location city={city} regionCode={regionCode} />
              <ExpandButton onMore={onMore} isMoreClicked={isMoreClicked} />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <h1>Loading...</h1> // TODO: replace with spinner
      )}
    </div>

    // <div className="main">
    //   <div className="main__quote">
    //     <Quote
    //       quote={quote}
    //       onNewQuote={fetchQuote}
    //       isMoreClicked={isMoreClicked}
    //     />
    //   </div>
    //   <div className={`main__time`}>
    //     <Greeting time={time} />
    //     <TimeUnit time={time} abbreviation={timezoneAbbreviation} />
    //   </div>
    //   <div className={`main__location-more-button `}>
    //     <Location city={city} regionCode={regionCode} />
    //     <ExpandButton onMore={onMore} isMoreClicked={isMoreClicked} />
    //   </div>
    // </div>
  )
}

export default Time

/**
 <Greeting time:string />
 <TimeUnit time:string abbreviation:string />
 <Location city:string regionCode:string />
 <ExpandButton onClick />
 */
