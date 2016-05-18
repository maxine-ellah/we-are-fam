import React from 'react'

class FamilyMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      mood: 'Neutral'
    }
  }

  render() {
    return (
      <div className='family-member'>
        <h2>{this.props.name}</h2>
        <p>Mood: {this.state.mood}</p>
      </div>
    )
  }
}

export default FamilyMember
