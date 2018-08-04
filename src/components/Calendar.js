import React, { Component } from 'react'
import { connect } from 'react-redux'

import DayRow from './DayRow'

const DAYS = [...Array(31).keys()]

class Calendar extends Component {
  render() {
    return(<div>
      { DAYS.map((day) => {
        return (<DayRow
          day={ day }
          nurseInFreeDay={ this.props.getNurseByDay(day) }
          />)
      })
      }
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
