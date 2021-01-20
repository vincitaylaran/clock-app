export interface RandomQuote {
  content: string | undefined
  author: string | undefined
}

interface Props {
  quote: RandomQuote | undefined
}

function Quote({ quote }: Props) {
  return quote ? (
    <div>
      <h4>{quote.content}</h4>
      <h4>{quote.author}</h4>
    </div>
  ) : (
    <div className="main__time__no-quote-and-author" />
  )
}

export default Quote
