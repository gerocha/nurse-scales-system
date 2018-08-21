import React from 'react'

const NurseRow = ({ nurse }) => {
  return (<div>
    <span>nome: </span>
    <span>{ nurse.nurseName }</span>
  </div>)
}

export default NurseRow
