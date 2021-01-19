import React, { useEffect } from "react"

interface Props {
  time: string | undefined
}

function Greeting({ time }: Props) {
  const getTimeOfDay = () => {
    if (time) {
      const [hour] = time.split(":")
      console.log(hour)
      const hourConverted = Number(hour)
      if (hourConverted >= 0 && hourConverted <= 12) {
        return "morning"
      } else if (hourConverted >= 13 && hourConverted <= 18) {
        return "afternoon"
      }
    }
    return "evening"
  }

  return time ? (
    <div className="time__greeting">Good {getTimeOfDay()}, it's currently</div>
  ) : (
    <div className="time__no-greeting" />
  )
}

export default Greeting
