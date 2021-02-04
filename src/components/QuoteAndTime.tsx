import React, { useState, useEffect } from "react"

import "styles/_quote-and-time.scss"

import Greeting from "components/Greeting"
import TimeUnit from "components/TimeUnit"
import Location from "components/Location"
import Quote from "components/Quote"
import ExpandButton from "components/ExpandButton"

import useTime from "hooks/useTime"

interface Props {
  onMore: () => void
  isMoreClicked: boolean
}

function Time({ onMore, isMoreClicked }: Props) {
  const [regionCode, setRegionCode] = useState<string | undefined>()
  const [city, setCity] = useState<string | undefined>()
  const { time } = useTime()

  const fetchCity = async () => {
    const request = await fetch("https://freegeoip.app/json/")
    const response = await request.json()
    const { region_code, city } = response
    setCity(city)
    setRegionCode(region_code)
  }

  useEffect(() => {
    fetchCity()
  }, [])

  return (
    <div className="main">
      {time && regionCode && city ? (
        <React.Fragment>
          <div className={`main__quote`}>
            <Quote isMoreClicked={isMoreClicked} />
          </div>
          <div
            className={`main__time-container ${
              isMoreClicked ? "slide-up " : "fade-in"
            }`}
          >
            <div className={`main__time`}>
              <Greeting />
              <TimeUnit />
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
  )
}

export default Time
