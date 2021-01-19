import { ReactNode } from "react"
import "styles/_header.scss"

interface Props {
  children: ReactNode
}

function Header({ children }: Props) {
  return <div className="header">{children}</div>
}

export default Header
