import { ReactNode } from "react"
import "styles/_header.scss"
import useTime from "hooks/useTime"

interface Props {
  children: ReactNode
  isMoreClicked: boolean
}

function Header({ children, isMoreClicked }: Props) {
  const { isMorningOrAfternoon } = useTime()

  return <div className="header height-100vh">{children}</div>
}

export default Header
