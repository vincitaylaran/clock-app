import React, { useState } from "react"

import QuoteAndTime from "components/QuoteAndTime"
import Header from "components/Header"

import "styles/_base.scss"

function App() {
  const [isMoreClicked, setIsMoreClicked] = useState<boolean>(false)

  const onMore = () => {
    setIsMoreClicked(isMoreClicked ? false : true)
  }

  return (
    <div className="app">
      <Header isMoreClicked={isMoreClicked}>
        <QuoteAndTime onMore={onMore} isMoreClicked={isMoreClicked} />
      </Header>
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
