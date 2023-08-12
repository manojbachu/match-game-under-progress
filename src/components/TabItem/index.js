import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab} = props
  const {tabId, displayText} = tabDetails

  const clickTab = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tab-item">
      <button onClick={clickTab} className="tab-button" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
