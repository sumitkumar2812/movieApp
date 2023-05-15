import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const PageNotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-description">
        we are sorry the page you requested could not be found Please go back to
        the homepage.
      </p>
      <Link to="/">
        <button type="button">Go to Home</button>
      </Link>
    </div>
  </>
)

export default PageNotFound
