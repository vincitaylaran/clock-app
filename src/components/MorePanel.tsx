import { ReactNode } from "react"
import "styles/_more-panel.scss"

interface Props {
  isMoreClicked: boolean
  isMorePanelVisible: boolean
}

interface IMorePanelItem {
  children: ReactNode
  id?: string
}

interface IItemContent {
  id?: string
  label: string
  value: string | number
}

/**
 * <MorePanelItem>
 *  <ItemContent />
 *  <ItemContent />
 * <MorePanelItem/>
 */

function ItemContent({ id, label, value }: IItemContent) {
  return (
    <div id={id} className="more-panel__container__item__content">
      <div>
        <h6>{label}</h6>
        <h2>{value}</h2>
      </div>
    </div>
  )
}

function MorePanelItem({ children, id }: IMorePanelItem) {
  return (
    <div id={id} className="more-panel__container__item">
      {children}
    </div>
  )
}

function MorePanel({ isMoreClicked, isMorePanelVisible }: Props) {
  return (
    <div className={`more-panel  ${isMoreClicked && "visible"} `}>
      <div className="more-panel__container">
        <MorePanelItem id="item-1">
          <ItemContent label="current timezone" value="europe/london" />
          <ItemContent label="day of the year" value="295" />
        </MorePanelItem>
        <MorePanelItem id="item-2">
          <ItemContent label="day of the week" value={5} />
          <ItemContent label="week number" value={42} />
        </MorePanelItem>
      </div>
    </div>
  )
}

export default MorePanel
