import React from "react"

import QuoteAndTime from "components/QuoteAndTime"
import Header from "components/Header"
import ExpandButton from "components/ExpandButton"

import "styles/_base.scss"

function App() {
  return (
    <div className="app">
      <Header>
        <QuoteAndTime />
        <ExpandButton />
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
