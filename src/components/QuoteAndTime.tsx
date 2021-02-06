import React from "react"

import "styles/_quote-and-time.scss"

import Greeting from "components/Greeting"
import TimeUnit from "components/TimeUnit"
import Location from "components/Location"
import Quote from "components/Quote"
import ExpandButton from "components/ExpandButton"

import useTime from "hooks/useTime"
import useLocation from "hooks/useLocation"

interface Props {
  onMore: () => void
  isMoreClicked: boolean
}

function Time({ onMore, isMoreClicked }: Props) {
  const { time } = useTime()
  const { city, regionCode } = useLocation()

  return (
    <div className="main">
      {time && regionCode && city && (
        <React.Fragment>
          <div className="main__quote">
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
            <div className={`main__location-more-button`}>
              <Location />
              <ExpandButton onMore={onMore} isMoreClicked={isMoreClicked} />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default Time
