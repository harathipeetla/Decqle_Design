import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const LogIn = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    storeName: '',
    contactName: '',
    mobileNumber: '',
    email: '',
    password: '',
    logo: null,
  })

  const [isEmpty, setIsEmpty] = useState(false)

  const handleChange = e => {
    const {name, value, files} = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'logo' ? files[0] : value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {storeName, contactName, mobileNumber, email, password} = formData
    if (!storeName || !contactName || !mobileNumber || !email || !password) {
      setIsEmpty(true)
    } else {
      // Navigate to home page
      history.push('/home')
    }
  }

  const buttonClassName = isEmpty ? 'sign-up-btn' : 'sign-up-btn-active'

  return (
    <div className="container">
      <div className="form-page-section">
        <h1 className="heading">
          CLEAR <span>RESULT</span>
        </h1>
        <p className="description">Get started with clearResult</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-label-container">
            <label htmlFor="storeName" className="label-text">
              store/company Name
            </label>
            <input
              type="text"
              className="input-area"
              id="storeName"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
            />
          </div>
          <div className="input-label-container">
            <label htmlFor="contactName" className="label-text">
              contact Name
            </label>
            <input
              type="text"
              className="input-area"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
            />
          </div>
          <div className="input-label-container">
            <label htmlFor="mobileNumber" className="label-text">
              Mobile Number
            </label>
            <input
              type="text"
              className="input-area"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="input-label-container">
            <label htmlFor="email" className="label-text">
              Email ID
            </label>
            <input
              type="email"
              className="input-area"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-label-container">
            <label htmlFor="password" className="label-text">
              password
            </label>
            <input
              type="password"
              className="input-area"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-label-container">
            <label htmlFor="logo" className="label-text">
              upload your logo
            </label>
            <input
              type="file"
              className="input-area"
              id="logo"
              name="logo"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className={buttonClassName}>
              sign up
            </button>
          </div>
          {isEmpty && (
            <p className="error-message">should not empty any field</p>
          )}
        </form>
      </div>
      <div className="image-page-section">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
          alt="Login"
        />
      </div>
    </div>
  )
}

export default LogIn
