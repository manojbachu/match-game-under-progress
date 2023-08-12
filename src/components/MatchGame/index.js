import {Component} from 'react'
import './index.css'
import TabItem from '../TabItem'
import Thumbnail from '../Thumbnail'

class MatchGame extends Component {
  state = {category: 'FRUIT'}

  onClickTab = tabId => {
    this.setState({
      category: tabId,
    })
  }

  getFilteredThumbnails = () => {
    const {category} = this.state
    const {imagesList} = this.props

    const filteredThumbnails = imagesList.filter(
      eachThumbnail => eachThumbnail.category === category,
    )
    return filteredThumbnails
  }

  render() {
    const {category} = this.state
    const {imagesList, tabsList} = this.props
    const filteredThumbnails = this.getFilteredThumbnails()
    return (
      <div className="app-container">
        <div className="navbar-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <div className="score-and-timer-container">
            <p className="score">
              <span className="score-label">Score:</span> 30
            </p>
            <div className="timer-container">
              <img
                className="match-game-timer-img"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="time">0 Sec</p>
            </div>
          </div>
        </div>
        <div className="game-container">
          <img
            className="match-image"
            src={imagesList[0].imageUrl}
            alt="match"
          />
          <ul className="tabs-list-container">
            {tabsList.map(eachTab => (
              <TabItem
                tabDetails={eachTab}
                key={eachTab.tabId}
                onClickTab={this.onClickTab}
                isActive={category === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="thumbnail-list-container">
            {filteredThumbnails.map(eachImage => (
              <Thumbnail imageDetails={eachImage} key={eachImage.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MatchGame
