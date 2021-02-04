import { useState, useEffect } from "react"

interface Quote {
  content: string
  author: string
}

function useQuote() {
  const [quote, setQuote] = useState<Quote>()

  const fetchQuote = async () => {
    const request = await fetch("https://api.quotable.io/random")
    const response = await request.json()
    const { content, author } = response
    setQuote({ content, author })
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return { quote, fetchQuote }
}

export default useQuote
