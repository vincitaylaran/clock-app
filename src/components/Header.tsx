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

  if (desktopBreakpoint) {
    return "desktop-bg"
  } else if (tabletBreakpoint) {
    return "tablet-bg"
  }

  return "mobile-bg"
}

function Header({ children, isMoreClicked }: Props) {
  const { isMorningOrAfternoon } = useTime()
  const className = useBackgroundClass()

  console.log(className)

  return <div className={`${className} header height-100vh`}>{children}</div>
}

export default Header
