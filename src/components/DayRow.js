import React from 'react'

const DayRow = ({ day, nurseInFreeDay }) => {
  return (<div>
    <span>{ day }</span>
    <div style={ { display: 'flex', flexDirection: 'column' } } >
      {nurseInFreeDay.map((nurse) => (<div style={ { flex: 1 } } >{nurse.nurseName}</div>))}
    </div>
  </div>)
}

export default DayRow
