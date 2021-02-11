import { ReactNode } from "react"
import "styles/background.scss"
import useBackgroundClass from "hooks/useBackgroundClass"

interface Props {
  children: ReactNode
  isMoreClicked: boolean
}

function Background({ children }: Props) {
  const className = useBackgroundClass()

  return <div className={`${className} header height-100vh`}>{children}</div>
}

export default Background
