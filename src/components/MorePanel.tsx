import "styles/_more-panel.scss"

interface Props {
  isMoreClicked: boolean
}

/**
 * Layer panel on top of Header
 * Make opacity 0.9
 * Set padding of more-panel to 20px
 * Create a div to contain the other information
 *  Let container be a flexbox with a flex-direction of column
 *  Create 2 child div elements
 *      Both child elements should have 2 div elements
 *
 */

function MorePanel({ isMoreClicked }: Props) {
  return (
    <div className={`more-panel ${isMoreClicked ? "visible" : "hidden"}`}></div>
  )
}

export default MorePanel
