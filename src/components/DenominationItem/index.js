// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, deductSum} = props
  const onClickValue = () => {
    deductSum(value)
  }

  return (
    <li className="each-value">
      <button type="button" className="value-btn" onClick={onClickValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
