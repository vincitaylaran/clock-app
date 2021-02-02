import React, { useState } from "react"

import QuoteAndTime from "components/QuoteAndTime"
import Header from "components/Header"
import MorePanel from "components/MorePanel"

import "styles/_base.scss"

function App() {
  const [isMoreClicked, setIsMoreClicked] = useState<boolean>(false)
  const [isMorePanelOpen, setIsMorePanelOpen] = useState<boolean>(false)

  const onMore = () => {
    setIsMoreClicked(isMoreClicked ? false : true)
  }

  return (
    <div className="app">
      <Header isMoreClicked={isMoreClicked}>
        <QuoteAndTime onMore={onMore} isMoreClicked={isMoreClicked} />
      </Header>
      <MorePanel isMoreClicked={isMoreClicked} />
    </div>
  )
}

/**
 <Header>
    <QuoteAndTime />
    <ExpandButton />
  </Header>
    <MoreInfo />
 */

export default App
