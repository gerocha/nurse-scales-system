import React from 'react'

import NurseList from '../components/NurseList'
import Calendar from '../components/Calendar'
import Header from '../components/Header'

const Main = () => {
  return(<div>
    <Header />
    <NurseList />
    <Calendar />
  </div>)
}

export default Main
