import useLocation from "hooks/useLocation"

function Location() {
  const { city, regionCode } = useLocation()

  return city && regionCode ? (
    <h3>
      In {city}, {regionCode}
    </h3>
  ) : (
    <div className="main__time__no-location fade-in" />
  )
}

export default Location
