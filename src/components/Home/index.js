import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import myPic from '../../assets/images/img.jpg'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'Shekhar'.split('')
  const jobArray = 'Web Developer'.split('')
  const interestArray = 'Web Designer'.split('')
  const enthusiastArray = 'Coder'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone" >
          <h1>
            <span className={letterClass} style={{fontFamily:'Abril Fatface'}}>H</span>
            <span className={`${letterClass} _12`}style={{fontFamily:'Abril Fatface'}}>i,</span>
            <br />
            <span className={`${letterClass} _13`} style={{fontFamily:'Abril Fatface'}}>I</span>
            <span className={`${letterClass} _14`} style={{fontFamily:'Abril Fatface'}}>'m</span>
            &nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
              
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={enthusiastArray}
              idx={22}
            />
          </h1>
          <h2>
          Web Designer ★ Front-end Developer ★ Coder ★ Digital Painter
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div>
          <img className='box' src={myPic} width="24%" style={{marginLeft:'750px',marginTop:'120px',borderRadius:'50%',border: '2px solid' ,borderColor:'#2a3cad',boxSizing: 'border-box',padding:'20px', background: 'rgba(17, 24, 69, 0.33)'}}  alt="" />
        </div>
      </div>

    </>
  )
}

export default Home
