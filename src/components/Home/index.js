import {useState} from 'react'
import './index.css'
import {
  FaAddressBook,
  FaHourglassHalf,
  FaHandshake,
  FaBan,
  FaTrophy,
  FaTimesCircle,
  FaList,
  FaHome,
  FaClock,
} from 'react-icons/fa'

const ProspectPopUp = ({prospect, onClose}) => (
  <div className="popup">
    <h2>{prospect.description}</h2>
    <button className="close-button" onClick={onClose} type="button">
      Close
    </button>
  </div>
)

const Home = () => {
  const [selectedProspect, setSelectedProspect] = useState(null)

  const handleClick = prospect => {
    setSelectedProspect(prospect)
  }

  const handleClose = () => {
    setSelectedProspect(null)
  }

  const prospects = [
    {icon: <FaAddressBook />, nums: 55, description: 'To be contact'},
    {icon: <FaHourglassHalf />, nums: 7, description: 'Pending Visit'},
    {icon: <FaHandshake />, nums: 5, description: 'Negotiation'},
    {icon: <FaBan />, nums: 12, description: 'Inactive'},
    {icon: <FaTrophy />, nums: 15, description: 'Win'},
    {icon: <FaTimesCircle />, nums: 6, description: 'Closed'},
  ]

  return (
    <div className="container">
      <div className="prospects-container-view">
        <h1 className="heading">Prospects</h1>
        <p>View prospects status list for interacting </p>
        <div className="prospects-container">
          {prospects.map(prospect => (
            <div
              key={prospect.description}
              className="prospects"
              onClick={() => handleClick(prospect)}
              role="button"
              tabIndex={0}
            >
              <div className="icon-container">{prospect.icon}</div>
              <div>
                <p className="description">
                  <span>{prospect.nums}</span>
                  <br />
                  {prospect.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="just-for-you-container">
        <h1>
          <FaList /> Just For You
        </h1>
        <div className="image-container">
          <button className="trending-btn" type="button">
            Tranding
          </button>
        </div>
        <p>Daily delivery Service from 11:00 - 20.....</p>
        <p>
          <span>Includes: </span>
          Life Tips & Trends
        </p>
        <p>two mins read</p>
        <button type="button" className="btn">
          Top Rated
        </button>
        <button type="button" className="btn">
          Trending
        </button>
        <button type="button" className="btn">
          Most Read
        </button>
      </div>
      <div className="up-coming-exhibition-view">
        <h1>Upcoming Exhibition</h1>
        <div className="exhibition-loaction">
          <button className="trending-btn" type="button">
            Up Coming
          </button>
        </div>
        <p>Fashion Gallery</p>
        <p>
          <FaHome />
          Mon - Sat
        </p>
        <p>
          <FaClock />
          10:00 am - 13:00 pm
        </p>
        <button className="btn-invite" type="button">
          Invite Users
        </button>
      </div>

      {selectedProspect && (
        <ProspectPopUp prospect={selectedProspect} onClose={handleClose} />
      )}
    </div>
  )
}

export default Home
