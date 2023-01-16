import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faBriefcase,
  faFileDownload
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import Cv from '../../assets/images/cv.pdf'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
            
          </NavLink>
          <NavLink
            activeclassname="active"
            className="project-link"
            to="/Project"
          >
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          
        </nav>
        <ul>
          <li>
            <a
              href={Cv}
              target="_blank"
              rel="noreferrer"
              className='fontIcon'
            >
              <FontAwesomeIcon icon={faFileDownload} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shekhar-hans-560822246/"
              target="_blank"
              rel="noreferrer"
              className='fontIcon'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ShekharHans"
              target="_blank"
              rel="noreferrer"
              className='fontIcon'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/shekhar.hans.148"
              target="_blank"
              rel="noreferrer"
              className='fontIcon'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/crazy_painter__/"
              target="_blank"
              rel="noreferrer"
              className='fontIcon'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
