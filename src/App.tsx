import React from "react"

import QuoteAndTime from "components/QuoteAndTime"
import Header from "components/Header"

import "styles/_base.scss"

function App() {
  return (
    <div className="app">
      <Header>
        <QuoteAndTime />
      </Header>
      {/* <MorePanel> */}
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
