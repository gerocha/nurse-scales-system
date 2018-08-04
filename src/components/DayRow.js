import React from 'react'

const DayRow = ({ day, nurseInFreeDay }) => {
  return (<div>
    <span>{ day }</span>
    <span>
      {nurseInFreeDay.map((nurse) => (<span>{nurse.nurseName}</span>))}
    </span>
  </div>)
}

export default DayRow
