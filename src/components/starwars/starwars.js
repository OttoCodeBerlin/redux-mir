import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStarwarsData } from './starwarsAction'
import starwarsCard from './starwarsCard'

class starwars extends Component {
  componentDidMount() {
    this.props.getStarwarsData()
  }

  render() {
    return (
      <div>
        <h1>We have the following number of Starwars characters on hand: {this.props.count}</h1>
        <starwarsCard />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.starwarsReducer.starwarsData.count
})

export default connect(mapStateToProps, { getStarwarsData })(starwars)
