import React, { useState } from "react"

import QuoteAndTime from "components/QuoteAndTime"
import Background from "components/Background"
import MorePanel from "components/MorePanel"

import "styles/base.scss"

function App() {
  const [isMoreClicked, setIsMoreClicked] = useState<boolean>(false)

  const onMore = () => {
    setIsMoreClicked(isMoreClicked ? false : true)
  }

  return (
    <div className="app">
      <Background isMoreClicked={isMoreClicked}>
        <QuoteAndTime onMore={onMore} isMoreClicked={isMoreClicked} />
      </Background>
      <MorePanel isMoreClicked={isMoreClicked} />
    </div>
  )
}

export default App
