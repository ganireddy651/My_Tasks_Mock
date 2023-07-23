import {useState} from 'react'
import './index.css'

const Tags = props => {
  const [active, setActive] = useState(false)
  const {each, isActive} = props
  const {optionId, displayText} = each

  const activeButton = () => {
    isActive(optionId)
    setActive(prevState => !prevState)
  }

  const className = active ? 'active-button' : 'Inactive-button'
  return (
    <li>
      <button onClick={activeButton} className={className} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default Tags
