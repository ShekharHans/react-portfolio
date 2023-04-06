import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import aboutPic from '../../assets/images/about-img.jpg'
import Zoom from 'react-reveal/Zoom';
import {
  faHtml5, 
  faCss3, 
  faNodeJs, 
  faPython, 
  faFigma, 
  faJs, 
  faReact, 
  faBootstrap, 
  faSass, 
  faGit
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';

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
      <div className="container about-page" style={{ marginTop: "22px" }}>

        <div className="text-zone" style={{ left: '194px', top: '330px', width: "50%" }}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <div style={{ fontSize: ' 18px', fontFamily: 'La Belle Aurore', color: '#616161', marginTop: '20px' }}>&lt;p&gt;</div>
          <br />
          <p style={{ fontFamily: 'Poppins', color: '#fff', marginLeft: '10%' }}>
            Hi There, I’m Shekhar and i am Front-End Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. I am doing graduation in computer science from Meghnad Saha Institute of Technology,Kolkaka.
          </p>
          <br />
          <p style={{ fontFamily: 'Poppins', color: '#fff', marginLeft: '10%' }}>
            I'm a team player with outstanding communication skills and also I have knowledge about illustration, and most importantly, I'm enthusiastic at work.
          </p>
          <br />
          <p style={{ fontFamily: 'Poppins', color: '#fff', marginLeft: '10%' }}>
            I'm open to Job opportunities where I can grow, learn, and contribute. Please get in touch with me if you have a great opportunity that matches my qualifications and experience.
          </p>
          <br />
          <div style={{ fontSize: ' 18px', fontFamily: 'La Belle Aurore', color: '#616161' }}>&lt;/p&gt;</div>
        </div>
        <Zoom right>
          <div className="about-img-section">

            <img src={aboutPic} alt="" />

          </div>
        </Zoom>
        <div id="infinite" className="highway-slider">
          <div className="highway-barrier">
            <ul className="highway-lane" style={{ fontSize: "50px" }}>
              <li className="highway-car">
                <FontAwesomeIcon icon={faGit} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faBootstrap} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faHtml5} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faJs} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faPython} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faNodeJs} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faSass} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faCss3} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faReact} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faFigma} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faCode} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faGit} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faBootstrap} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faReact} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faFigma} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faCode} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faGit} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faBootstrap} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faReact} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faFigma} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faCode} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faGit} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faBootstrap} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faHtml5} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faJs} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faPython} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faNodeJs} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faSass} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faCss3} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faReact} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faFigma} />
              </li>
              <li className="highway-car">
                <FontAwesomeIcon icon={faCode} />
              </li>


            </ul>
          </div>
        </div>
      </div>


    </>
  )
}

export default About
