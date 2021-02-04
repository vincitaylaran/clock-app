import { useState, useEffect } from "react"

function useLocation() {
  const [regionCode, setRegionCode] = useState<string>()
  const [city, setCity] = useState<string>()

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

  return { regionCode, city }
}

export default useLocation
