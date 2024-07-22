import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-name-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
      </div>
      <p className="logo-text">Wave</p>
    </div>
    <div className="nav-container">
      <li className="list-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </div>
  </div>
)

export default Header
