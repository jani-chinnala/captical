import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {values: countryAndCapitalsList[0].id}

  formFunction = event => {
    this.setState({values: event.target.value})
  }

  render() {
    const {values} = this.state
    const checkList = countryAndCapitalsList.filter(each => each.id === values)
    return (
      <div className="bgContainer">
        <div className="smallContainer">
          <h1>Countries And Capitals</h1>
          <div className="row">
            <select
              className="selectMethod"
              value={values}
              onChange={this.formFunction}
            >
              {countryAndCapitalsList.map(eachValue => (
                <option value={eachValue.id} key={eachValue.id}>
                  {eachValue.country}
                </option>
              ))}
            </select>
            <p className="padding">is capital of which country?</p>
          </div>
          {checkList.map(chop => (
            <p className="random">{chop.capitalDisplayText}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Capitals
