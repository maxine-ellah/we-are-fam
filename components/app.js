import React, { Component } from 'react'
import FamilyMember from './FamilyMember'

class App extends Component {

  changeMood (FamilyMemberId) {
    this.props.store.dispatch({type: 'UPDATE MOOD', state: this.props.moodStates, id: familyMemberId})
  }




  render () {
    return <h1>Welcome to {this.props.name}</h1>
  }

}

export default App
