import React from 'react'

import './Main.css'
import NurseList from '../components/NurseList'
import Calendar from '../components/Calendar'
import Header from '../components/Header'

const Main = () => {
  return(<div className='container' style={ { display: 'flex', flexDirection: 'column' } } >
    <div style={ { flex: 1 } } >
      <Header />
    </div>
    <div style={ { flex: 1 } } >
      <NurseList />
      <Calendar />
    </div>
</div>)
}

export default Main
