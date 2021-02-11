import useTime from "hooks/useTime"
import { useMediaQuery } from "@react-hook/media-query"

function useBackgroundClass() {
  const desktopBreakpoint = useMediaQuery("only screen and (min-width: 1024px)")
  const tabletBreakpoint = useMediaQuery("only screen and (max-width: 768px)")
  // const mobileBreakpoint = useMediaQuery("only screen and (max-width: 450px)")
  const { isMorningOrAfternoon } = useTime()

  if (desktopBreakpoint) {
    return `desktop-bg${isMorningOrAfternoon ? "-light" : "-dark"}`
  } else if (tabletBreakpoint) {
    return `tablet-bg${isMorningOrAfternoon ? "-light" : "-dark"}`
  } else {
    return `mobile-bg${isMorningOrAfternoon ? "-light" : "-dark"}`
  }
}

export default useBackgroundClass
