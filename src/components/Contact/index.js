import { useEffect, useState } from 'react'

import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import contactPic from '../../assets/images/contact-img.png'




const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const contactArray = 'Contact Me'.split('')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="container contact-page" style={{ background: 'url(https://i.ibb.co/jyRLrBZ/world-map.png)', height: '100%', width: '100%', marginLeft: '7%' }}>
        <div className="text-zone" style={{ left: '7%', marginTop: '-30px' }}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <div style={{ fontSize: ' 18px', fontFamily: 'La Belle Aurore', color: '#616161', marginTop: '-9px', position: 'absolute' }}>&lt;/form&gt;</div>

          <div className="contact-form" style={{ zIndex: '1111', marginTop: '13%' }}>
            <form ref={form}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>

                  <input type="submit" className="flat-button1 btn-4" value="SEND" style={{ marginLeft: '325px' }} />

                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>

          <div style={{ fontSize: ' 18px', fontFamily: 'La Belle Aurore', color: '#616161', marginTop: '-20px', position: 'absolute', marginLeft: '408px' }}>&lt;/form&gt;</div>
        </div>

        <div className="contact-img">
          <img src={contactPic}alt="" />
        </div>
        <footer><span class="footer__copy" color='white'>
          © Copyright Shekhar. All rights reserved
        </span></footer>
      </div>
    </>
  )
}

export default Contact
