import { ReactNode } from "react"
import "styles/_header.scss"
import useTime from "hooks/useTime"
import { useMediaQuery } from "@react-hook/media-query"

interface Props {
  children: ReactNode
  isMoreClicked: boolean
}

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

function Header({ children, isMoreClicked }: Props) {
  const className = useBackgroundClass()

  return <div className={`${className} header height-100vh`}>{children}</div>
}

export default Header
