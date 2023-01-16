import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone" style={{left: '194px',top: '312px'}}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <div style={{ fontSize: ' 18px', fontFamily: 'La Belle Aurore', color: '#616161', marginTop: '20px' }}>&lt;p&gt;</div>
          <br />
          <p style={{fontFamily: 'Poppins',color:'rgba(169, 122, 227, 0.75)',marginLeft:'10%'}}>
            Hi There, I’m Shekhar and i am Front-End Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. I am doing graduation in computer science from Meghnad Saha Institute of Technology,Kolkaka.
          </p>
          <br />
          <p style={{fontFamily: 'Poppins',color:'rgba(169, 122, 227, 0.75)',marginLeft:'10%'}}>
            I'm a team player with outstanding communication skills and also I have knowledge about illustration, and most importantly, I'm enthusiastic at work.
          </p>
          <br />
          <p style={{fontFamily: 'Poppins',color:'rgba(169, 122, 227, 0.75)',marginLeft:'10%'}}>
            I'm open to Job opportunities where I can grow, learn, and contribute. Please get in touch with me if you have a great opportunity that matches my qualifications and experience.
          </p>
          <br />
          <div style={{ fontSize: ' 18px', fontFamily: 'La Belle Aurore', color: '#616161' }}>&lt;/p&gt;</div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#6e2cf4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#264de4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ccfee" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#ead41c" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#e44c30" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
