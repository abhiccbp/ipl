import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      imageUrl: each.team_image_url,
    }))
    console.log(updatedData)
    this.setState({list: updatedData, isLoading: false})
  }

  renderData = () => {
    const {list} = this.state
    return (
      <ul className="ulItem">
        {list.map(each => (
          <TeamCard displayData={each} />
        ))}
      </ul>
    )
  }

  renderLoader = () => <Loader />

  render() {
    const {isLoading} = this.state
    return (
      <div className="mainContainer">
        <div className="abc">
          <div className="headingContainer">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderData()}
        </div>
      </div>
    )
  }
}
export default Home
