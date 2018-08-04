import React, { Component } from 'react'
import { connect } from 'react-redux'

import NurseRow from './NurseRow'

class NurseList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
      { this.props.nurseList.map((nurse, idx) => <NurseRow key={ idx } nurse={ nurse } />) }
    </div>)
  }
}

const mapStateToProps = (state) => ({
  nurseList: state.nurseList
})

const mapDispatchProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchProps)(NurseList)
