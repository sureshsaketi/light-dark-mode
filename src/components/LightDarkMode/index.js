import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true, className: 'dark-mode', buttonText: 'Light Mode'}

  onChangeMode = () => {
    const {isDarkMode} = this.state
    if (isDarkMode) {
      return this.setState({
        isDarkMode: false,
        className: 'light-mode',
        buttonText: 'Dark Mode',
      })
    }
    return this.setState({
      isDarkMode: true,
      className: 'dark-mode',
      buttonText: 'Light Mode',
    })
  }

  render() {
    const {className, buttonText} = this.state
    return (
      <div className="bg-container">
        <div className={`box ${className}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
