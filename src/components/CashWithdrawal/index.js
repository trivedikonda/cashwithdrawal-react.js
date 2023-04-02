// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  deductSum = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="inner-container">
            <div className="top-container">
              <p className="profile">S</p>
              <p className="user-name">Sarah Williams</p>
            </div>
            <div className="balance-container">
              <p className="para">Your Balance</p>
              <div>
                <p className="count">{count}</p>
                <p className="in-rupees">In Rupees</p>
              </div>
            </div>
            <p className="withdraw">Withdraw</p>
            <p className="para">CHOOSE SUM (IN RUPEES)</p>

            <ul className="denominations-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  value={eachDenomination.value}
                  deductSum={this.deductSum}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
