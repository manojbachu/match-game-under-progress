import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTab = () => {
    onClickTab(tabId)
  }

  const activeTab = isActive ? 'active-thumbnail' : ''

  return (
    <li className="tab-item">
      <button
        onClick={clickTab}
        className={`tab-button ${activeTab}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
