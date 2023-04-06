import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


import './index.scss'
import myPic from '../../assets/images/img.png'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  const nameArray = ' Shekhar'.split('')


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <main>
        <div className="main-container" style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Fade left>
            <div className="first-section">
              <div className="text-zone" style={{ left: '57%', marginTop: '-30px', top: "24%", width: "50rem" }}>
                <h2>Hello!</h2>
                <h1>
                  I am
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                  />
                </h1>
                <h1 style={{ color: "yellow", width: "60rem" }}>
                  A Web Designer
                </h1>
              </div>
              <div className="social-zone">
                <ul>
                  <li className='icon-1'>
                    <a href="https://www.linkedin.com/in/shekhar-hans-560822246/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li className='icon-2'>
                    <a href="https://github.com/ShekharHans">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li className='icon-3'>
                    <a href="https://www.facebook.com/shekhar.hans.148">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className='icon-4'>
                    <a href="https://www.instagram.com/crazy_painter__/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
          <Zoom>
            <div className="image-zone" style={{ zIndex: "-1" }}>
              <img src={myPic} alt="Img" />
            </div>
          </Zoom>
          <Fade right>
            <div className="about-section">
              <p className="about-p-text" style={{ fontSize: "15px" }}>

                Hi There, I’m Shekhar and i am Front-End Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. I am doing graduation in computer science from Meghnad Saha Institute of Technology,Kolkaka.
                <br />
                I'm a team player with outstanding communication skills and also I have knowledge about illustration, and most importantly, I'm enthusiastic at work.
                <br />
                I'm open to Job opportunities where I can grow, learn, and contribute. Please get in touch with me if you have a great opportunity that matches my qualifications and experience.
                <br />
              </p>

              <Link to="/contact"><button className="contact-btn">
                Contact Me
              </button></Link>
            </div>
          </Fade>
        </div>
      </main>
    </>
  )
}

export default Home
