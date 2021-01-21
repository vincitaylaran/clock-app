export interface RandomQuote {
  content: string | undefined
  author: string | undefined
}

interface Props {
  quote: RandomQuote | undefined
  isMoreClicked: boolean
  onNewQuote: () => void
}

function Quote({ quote, onNewQuote, isMoreClicked }: Props) {
  return quote && !isMoreClicked ? (
    <div className="main__quote__content-and-author">
      <div id="quote">
        <h5 id="content">"{quote.content}"</h5>
        <button onClick={onNewQuote}>new quote</button>
      </div>
      <h4 id="author">{quote.author}</h4>
    </div>
  ) : (
    <div className="main__quote__no-content-and-author" />
  )
}

export default Quote
