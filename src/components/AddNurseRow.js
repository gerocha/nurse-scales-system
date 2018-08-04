import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNurse } from '../action/Nurse'

class AddNurseRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nurseName: '',
      freeDay: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(event) {
    let { target: { name, value } } = event
    this.setState({[name]: value});
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.addNurse(this.state)
  }

  render() {
    return (<div>
      <form onSubmit={this.onSubmit}>
        nome <input type='text' name='nurseName' onChange={this.handleChange}/>
        folga <input type='text' name='freeDay' onChange={this.handleChange}/>
      <input type='submit' />
      </form>
  </div>)
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchProps = (dispatch) => ({
  addNurse: (nurse) => dispatch(addNurse(nurse))
})

export default connect(mapStateToProps, mapDispatchProps)(AddNurseRow)
