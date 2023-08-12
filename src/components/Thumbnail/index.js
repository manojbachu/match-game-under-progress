import './index.css'

const Thumbnail = props => {
  const {imageDetails} = props
  const {thumbnailUrl, category} = imageDetails

  return (
    <li className="thumbnail">
      <button className="thumbnail-button" type="button">
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
