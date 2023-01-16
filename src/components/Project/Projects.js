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
                <div className="text-zone" style={{marginTop:'-180px',marginLeft:'70px'}}>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={projectArray}
                            idx={15}
                        />
                        <br />
                    </h1>

                    <br />

                </div>
<div className="projectbox" style={{marginLeft:'200px',marginTop:'170px'}}>
                <div className="card" style={{width: '27rem',justifyContent:'center',marginLeft:'20px',display:'inline-block'}}>
                    <img src={projectImg} className="card-img-top" alt=""/>
                        <div className="card-body">
                            
                            <h5 className="card-title">Music Player</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus obcaecati minus ex. Recusandae possimus dicta ex, nulla amet enim in totam id!</p>
                            <a href="/" className="btn btn-primary" style={{marginRight:'10px'}}>GitHub</a>
                            <a href="/" className="btn btn-primary">Demo</a>
                        </div>
                </div>
                <div className="card" style={{width: '27rem',marginLeft:'100px',display:'inline-block'}}>
                    <img src={projectImg} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">TextUtils</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tempore hic corporis ullam deleniti earum accusamus totam facilis magnam ad, accusantium, adipisci cupiditate.</p>
                            <a href="/" className="btn btn-primary" style={{marginRight:'10px'}}>GitHub</a>
                            <a href="/" className="btn btn-primary">Demo</a>
                        </div>
                </div>
                <div className="card" style={{width: '27rem',marginLeft:'100px',display:'inline-block'}}>
                    <img src={projectImg} class="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Portfolio</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi est nulla deserunt mollitia dolor tenetur, dicta, aliquam labore cum sapiente saepe iste dignissimos!</p>
                            <a href="/" className="btn btn-primary" style={{marginRight:'10px'}}>GitHub</a>
                            <a href="/" className="btn btn-primary">Demo</a>
                        </div>
                </div>
                </div>
            </div>

        </>
    );
}

export default Projects;
