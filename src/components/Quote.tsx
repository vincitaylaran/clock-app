import "styles/_quote-and-time.scss"

export interface RandomQuote {
  content: string | undefined
  author: string | undefined
}

interface Props {
  quote: RandomQuote | undefined
  isMoreClicked: boolean
  onNewQuote: () => void
}

// TODO: change opacity of icon on hover
function RefreshIcon() {
  return (
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        id="refresh-icon"
        d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
        fill="#FFF"
        fillRule="nonzero"
        opacity=".5"
      />
    </svg>
  )
}

function Quote({ quote, onNewQuote, isMoreClicked }: Props) {
  return quote && !isMoreClicked ? (
    <div className="main__quote__content-and-author">
      <div id="quote">
        <h5 id="content">"{quote.content}" </h5>
        <button className="refresh-button" onClick={onNewQuote}>
          <RefreshIcon />
        </button>
      </div>
      <h4 id="author">{quote.author}</h4>
    </div>
  ) : (
    <div className="main__quote__no-content-and-author" />
  )
}

export default Quote
