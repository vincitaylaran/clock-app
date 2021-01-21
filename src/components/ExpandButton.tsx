import "styles/_expand-button.scss"

interface Props {
  onMore: (wasClicked: boolean) => void
  isMoreClicked: boolean
}

function ExpandButton({ onMore, isMoreClicked }: Props) {
  // const { onMore } = useMoreInfo()

  const handleOnMore = () => {
    onMore(isMoreClicked ? false : true)
  }

  return (
    <div>
      <button onClick={handleOnMore} className="more-button">
        More
      </button>
    </div>
  )
}

export default ExpandButton
