import { useEffect, useState } from 'react'
import projectImg from '../../assets/images/chatify.png'

import './Project.scss'
import AnimatedLetters from '../AnimatedLetters'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const projectArray = 'Projects'.split('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            <div className="container skills-page" >
                <div className="text-zone" style={{ marginTop: '-180px', marginLeft: '70px' }}>
                    <h1 style={{ marginTop: "-20px" }}>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={projectArray}
                            idx={15}
                        />
                        <br />
                    </h1>

                    <br />

                </div>
                <div className="projectbox" style={{ marginLeft: '200px', marginTop: '170px' }}>
                    <ul style={{ display: "flex", justifyContent: "center" }}>
                        <li>
                            <div className="card" style={{ width: '28rem', marginLeft: '50px', display: 'inline-block' }}>
                                <img src={projectImg} className="card-img-top" alt="" />
                                <div className="card-body">

                                    <h5 className="card-title">Music Player</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tempore hic corporis ullam deleniti earum accusamus totam facilis magnam ad, accusantium, adipisci cupiditate.</p>
                                    <a href="/" className="btn btn-primary" style={{ marginRight: '10px' }}>GitHub</a>
                                    <a href="/" className="btn btn-primary">Demo</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card" style={{ width: '28rem', marginLeft: '50px', display: 'inline-block' }}>
                                <img src={projectImg} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">TextUtils</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tempore hic corporis ullam deleniti earum accusamus totam facilis magnam ad, accusantium, adipisci cupiditate.</p>
                                    <a href="/" className="btn btn-primary" style={{ marginRight: '10px' }}>GitHub</a>
                                    <a href="/" className="btn btn-primary">Demo</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card" style={{ width: '28rem', marginLeft: '50px', display: 'inline-block' }}>
                                <img src={projectImg} class="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Portfolio</h5>
                                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi est nulla deserunt mollitia dolor tenetur, dicta, aliquam labore cum sapiente saepe iste dignissimos!</p>
                                    <a href="/" className="btn btn-primary" style={{ marginRight: '10px' }}>GitHub</a>
                                    <a href="/" className="btn btn-primary">Demo</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card" style={{ width: '28rem', marginLeft: '50px', display: 'inline-block' }}>
                                <img src={projectImg} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">TextUtils</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tempore hic corporis ullam deleniti earum accusamus totam facilis magnam ad, accusantium, adipisci cupiditate.</p>
                                    <a href="/" className="btn btn-primary" style={{ marginRight: '10px' }}>GitHub</a>
                                    <a href="/" className="btn btn-primary">Demo</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Projects;
