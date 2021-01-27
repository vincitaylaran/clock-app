import { ReactNode } from "react"
import "styles/_header.scss"

interface Props {
  children: ReactNode
  isMoreClicked: boolean
}

function Header({ children, isMoreClicked }: Props) {
  return <div className="header height-100vh">{children}</div>
}

export default Header
