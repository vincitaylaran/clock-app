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
  const { isMorningOrAfternoon } = useTime()

  return (
    <div id={id} className="more-panel__container__item__content">
      <div>
        <h6 style={{ color: isMorningOrAfternoon ? "black" : "white" }}>
          {label}
        </h6>
        <h2 style={{ color: isMorningOrAfternoon ? "black" : "white" }}>
          {value}
        </h2>
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

function Panel({
  children,
  isMoreClicked,
}: {
  children: ReactNode
  isMoreClicked: boolean
}) {
  const { isMorningOrAfternoon } = useTime()

  return (
    <div
      style={{
        background: isMorningOrAfternoon
          ? "rgba(255,255,255,0.75)"
          : "rgba(0,0,0,0.75)",
      }}
      className={`more-panel ${isMoreClicked && "visible"}`}
    >
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
    <Panel isMoreClicked={isMoreClicked}>
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
    </Panel>
  ) : (
    <h1>Loading</h1>
  )
}

export default MorePanel
