// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    count: 0,
  }

  onClickResetBtn = () => {
    this.setState({
      count: 0,
    })
    this.setState({
      searchInput: '',
    })
  }

  onChangeCountValue = event => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))

    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="calculation-card">
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="phrase" className="form-control">
              Enter the phrase
            </label>
            <input
              id="phrase"
              type="text"
              placeholder="Enter the phrase"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeCountValue}
            />
            <button
              type="button"
              className="reset-btn"
              onClick={this.onClickResetBtn}
            >
              <p>No.of letters: {count}</p>
            </button>
          </div>
          <div className="image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="letters-img"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
