import React, { Component } from 'react'

import AddNurseRow from './AddNurseRow'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddRow: false
    }

    this.controlAddRow = this.controlAddRow.bind(this)
  }

  controlAddRow() {
    this.setState({ showAddRow: !this.state.showAddRow })
  }

  render() {
    return (<div>
      <span onClick={ this.controlAddRow } >Adicionar</span>
    {(this.state.showAddRow) && <AddNurseRow />}
    </div>)
  }
}

export default Header
