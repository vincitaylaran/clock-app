import useTime from "hooks/useTime"
import { useMediaQuery } from "@react-hook/media-query"

function useBackgroundClass() {
  const desktopBreakpoint = useMediaQuery("only screen and (min-width: 1024px)")
  const tabletBreakpoint = useMediaQuery("only screen and (max-width: 768px)")
  // const mobileBreakpoint = useMediaQuery("only screen and (max-width: 450px)")
  const { isMorningOrAfternoon } = useTime()

  if (desktopBreakpoint) {
    if (isMorningOrAfternoon) {
      return "desktop-bg-light"
    }
    return "desktop-bg-dark"
  } else if (tabletBreakpoint) {
    if (isMorningOrAfternoon) {
      return "tablet-bg-light"
    }
    return "tablet-bg-dark"
  } else {
    if (isMorningOrAfternoon) {
      return "mobile-bg-dark"
    }
    return "mobile-bg-light"
  }
}

export default useBackgroundClass
