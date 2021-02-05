import { ReactNode } from "react"
import "styles/_header.scss"
import useBackgroundClass from "hooks/useBackgroundClass"

interface Props {
  children: ReactNode
  isMoreClicked: boolean
}

function Header({ children }: Props) {
  const className = useBackgroundClass()

  return <div className={`${className} header height-100vh`}>{children}</div>
}

export default Header
