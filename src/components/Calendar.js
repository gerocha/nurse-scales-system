import React, { Component } from 'react'
import { connect } from 'react-redux'

import DayRow from './DayRow'

const DAYS = [...Array(31).keys()]

class Calendar extends Component {
  render() {
    const calendar = () => {
      let daysArr = []

      for(let day = 1; day <= 31; day++) {
        let dayComponent = (
          <div style={ {
            flex: 1,
            margin: '5px',
            borderStyle: 'solid',
            borderColor: 'black',
            background: 'blue',
            flexBasis: '80px',
            height: '80px'
          } } >
          <DayRow
          day={ day }
          nurseInFreeDay={ this.props.getNurseByDay(day) } />
      </div>)
        daysArr = [ ...daysArr, dayComponent ]
      }

      return daysArr
    }

    return(<div style={ {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth: '740px'
    } } >
      { calendar() }
    </div>)
  }
}

const mapStateToProps = (state) => ({
  getNurseByDay: (day) => {
    return state.nurseList.filter(nurse => {
      return (parseInt(nurse.freeDay) == parseInt(day))
    })
  }
})

const mapDispatchProps = (dispatch) => ({ })

export default connect(mapStateToProps, mapDispatchProps)(Calendar)
