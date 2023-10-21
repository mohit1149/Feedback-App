// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    currentValue: true,
  }

  onClickAction = () => {
    this.setState(prevState => ({
      currentValue: !prevState.currentValue,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {currentValue} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {currentValue ? (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="unorder-list">
                {emojis.map(eachUser => (
                  <li className="list-container" Key={eachUser.id}>
                    <img
                      src={eachUser.imageUrl}
                      alt={eachUser.name}
                      className="image"
                      onClick={this.onClickAction}
                    />
                    <p className="paragraph">{eachUser.name}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <img src={loveEmojiUrl} alt="love emoji" className="image" />
              <h1 className="heading">Thank You!</h1>
              <p className="paragraph">
                We will use your feedback to improve our customer support
                performance
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
