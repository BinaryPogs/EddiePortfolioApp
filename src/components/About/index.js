import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'



  const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
            
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Hey guys, welcome to my page! I'm an ambitious graduate full-stack developer 
                   looking for a role as a full-stack or backend developer that will give me the oppourtunity to work on challenging projects with a modern tech-stack. 
                </p>
                <p>
                    I am a naturally curious individual who loves to solve problems. 
                    I possess strong business sense from my history of working at start-ups, as well as running my own businesses on the side.
                    When faced with a problem, my natural instinct is to find an efficient and elegant solution to it!
                </p>
                <p>
                    I have interest and experience in an array of areas in tech such as AI, automation, AWS/Cloud, full-stack web development, Devops, Robotics and much more! 
                    I will be updating this page with little projects that I have been working on as I continue my pursuit for a job. 
                </p>
                <p>
                    Aside from programming, I have many other interests. I love to keep my body and mind healthy, so I practice meditation and goto the gym regularly.
                    I have a passion for gaming and have launched my own Boardgames store via Shopify! 
                    I also have an interest in cryptocurrencies and have launched a business within the web3 gaming space where I managed over 150k USD in funding from crypto VC firms.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About