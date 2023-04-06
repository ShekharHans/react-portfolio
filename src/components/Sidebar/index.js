import React from 'react'
import './index.scss'
import Logo from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      <div className='nav-bar'>
        <nav>
          <Link to="/">
            <img
              src={Logo}
              alt="LOGO"
              className='logo'
              height={80}
              width={250}
            />
          </Link>
          <ul>
            <Link to="/" className='nav-list'>
              <li>Home</li ></Link>
            <Link to="/about" className='nav-list'><li>About</li ></Link>
            <Link to="/project" className='nav-list'><li>Projects</li></Link>
            <Link to="/skills" className='nav-list'><li>Skills</li></Link>
            <Link to="contact" className='nav-list'><li>Contact</li></Link>
          </ul>
        </nav >
      </div >
    </>
  );
}

export default Sidebar;
