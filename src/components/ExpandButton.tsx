import "styles/expand-button.scss"

interface Props {
  onMore: (wasClicked: boolean) => void
  isMoreClicked: boolean
}

function ArrowIcon({ isMoreClicked }: { isMoreClicked: boolean }) {
  return (
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle id="circle-icon" fill="#303030" cx="20" cy="20" r="17" />
        <path
          className={`${isMoreClicked ? "" : "flipped"}`}
          id="arrow-icon"
          stroke="#FFF"
          strokeWidth="2"
          d="M14 23l6-6 6 6"
        />
      </g>
    </svg>
  )
}

function ExpandButton({ onMore, isMoreClicked }: Props) {
  const handleOnMore = () => {
    onMore(isMoreClicked ? false : true)
  }

  return (
    <div onClick={handleOnMore} className="more-button">
      <span className="more-button__text">
        {isMoreClicked ? "less" : "more"}
      </span>
      <ArrowIcon isMoreClicked={isMoreClicked} />
    </div>
  )
}

export default ExpandButton
