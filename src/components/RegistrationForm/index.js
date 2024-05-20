import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isSubmitted: false,
  }

  firstNameElChange = event => {
    this.setState({firstName: event.target.value})
  }

  lastNameElChange = event => {
    this.setState({lastName: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({isFirstNameEmpty: true, isLastNameEmpty: true})
    } else if (firstName === '') {
      this.setState({isFirstNameEmpty: true})
    } else if (lastName === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isSubmitted: true, firstName: '', lastName: ''})
    }
  }

  firstNameEl = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false})
    }
  }

  lastNameEl = event => {
    if (event.target.value === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false})
    }
  }

  resubmit = () => {
    const {isSubmitted} = this.state
    this.setState({isSubmitted: !isSubmitted})
  }

  render() {
    const {
      firstName,
      lastName,
      isFirstNameEmpty,
      isLastNameEmpty,
      isSubmitted,
    } = this.state

    const inputColor1 = isFirstNameEmpty ? 'empty' : 'not-empty'

    const inputColor2 = isLastNameEmpty ? 'empty' : 'not-empty'

    return (
      <div className="bg-container">
        <div className="form">
          <h1 className="heading"> Registration </h1>
          {isSubmitted ? (
            <div className="sub-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="icon"
              />
              <p> Submitted Successfully </p>
              <button className="button" type="button" onClick={this.resubmit}>
                {' '}
                Submit Another Response{' '}
              </button>
            </div>
          ) : (
            <form onSubmit={this.formSubmit} className="sub-con">
              <div className="input-con">
                <label htmlFor="first"> FIRST NAME </label>
                <input
                  type="text"
                  id="first"
                  value={firstName}
                  placeholder="First name"
                  onBlur={this.firstNameEl}
                  onChange={this.firstNameElChange}
                  className={inputColor1}
                />
                {isFirstNameEmpty && <p className="err-msg"> Required </p>}
              </div>
              <div className="input-con">
                <label htmlFor="last"> LAST NAME </label>
                <input
                  type="text"
                  id="last"
                  value={lastName}
                  placeholder="Last name"
                  onBlur={this.lastNameEl}
                  onChange={this.lastNameElChange}
                  className={inputColor2}
                />
                {isLastNameEmpty && <p className="err-msg"> Required </p>}
              </div>
              <button className="button" type="submit">
                {' '}
                Submit{' '}
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
