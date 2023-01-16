import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone" style={{left: '194px',top: '312px'}}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <div style={{ fontSize: ' 18px', fontFamily: 'La Belle Aurore', color: '#616161', marginTop: '20px' }}>&lt;p&gt;</div>
          <br />
          <p style={{ fontFamily: 'Poppins', color: 'rgba(169, 122, 227, 0.75)',marginLeft:'10%' }}>
            Skills - Frontend Devlopment, Digital Art, Web Design, UI Designing <br /><br />
            Language - HTML5, CSS3, JavaScript, c-c++, React Js, jQuery, Scss
<br /><br />
            Tools - GitHub, Linux, Figma, Canva, Adobe XD <br /><br />
            I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.
          </p>
          <br />
          <div style={{ fontSize: ' 18px', fontFamily: 'La Belle Aurore', color: '#616161' }}>&lt;p&gt;</div>

        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

    </>
  )
}

export default Skills
