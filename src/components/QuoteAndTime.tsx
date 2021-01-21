import React, { useState, useEffect } from "react"

import dayjs from "dayjs"

import "styles/_quote-and-time.scss"

import Greeting from "components/Greeting"
import TimeUnit from "components/TimeUnit"
import Location from "components/Location"
import Quote, { RandomQuote } from "components/Quote"
import ExpandButton from "./ExpandButton"

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
  const [quote, setQuote] = useState<RandomQuote>()

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

  const fetchQuote = async () => {
    const request = await fetch("https://api.quotable.io/random")
    const response = await request.json()
    const { content, author } = response
    setQuote({ content, author })
  }

  useEffect(() => {
    fetchQuote()
    fetchTime()
    fetchCity()
  }, [])

  return (
    <div className="main">
      <div className="main__quote">
        <Quote
          quote={quote}
          onNewQuote={fetchQuote}
          isMoreClicked={isMoreClicked}
        />
      </div>
      <div className={`main__time ${isMoreClicked ? "" : "top-10"}`}>
        <Greeting time={time} />
        <TimeUnit time={time} abbreviation={timezoneAbbreviation} />
      </div>
      <div
        className={`main__location-more-button ${
          isMoreClicked ? "" : "top-10"
        }`}
      >
        <Location city={city} regionCode={regionCode} />
        <ExpandButton onMore={onMore} isMoreClicked={isMoreClicked} />
      </div>
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
