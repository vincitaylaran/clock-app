import React, { ReactNode } from "react"
import "styles/_more-panel.scss"

import useTime from "hooks/useTime"

interface IMorePanel {
  isMoreClicked: boolean
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

/**
 * set initial opacity of container to 0
 * transition from 0 to 1 with an animation delay
 *
 */

function MorePanel({ isMoreClicked }: IMorePanel) {
  const { timezone, dayOfWeek, dayOfYear, weekNumber } = useTime()

  return timezone && dayOfWeek && dayOfYear && weekNumber ? (
    <div className={`more-panel  ${isMoreClicked && "visible"} `}>
      <div className={`more-panel__container ${isMoreClicked && "fade-in"}`}>
        <MorePanelItem id="item-1">
          <ItemContent label="current timezone" value={timezone} />
          <ItemContent label="day of the year" value={dayOfYear} />
        </MorePanelItem>
        <MorePanelItem id="item-2">
          <ItemContent label="day of the week" value={dayOfWeek} />
          <ItemContent label="week number" value={weekNumber} />
        </MorePanelItem>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  )
}

export default MorePanel
