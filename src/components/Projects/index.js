import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
    const [letterClass] = useState('text-animate')
    
    
    return (
        <>
        <div className='container project-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P','r','o','j','e','c','t','s']}
                    idx={15}
                    />
                </h1>
                <p class="project-desc">
                    This page will contain a bunch of projects that I have been working on!
                </p>

                <h2 class='project-list'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','h','e','c','k','o','u','t',' ','m','y',' ','l','i','s','t',' ','o','f',' ','p','r','o','j','e','c','t','s','!']}
                    idx={10}
                    />
                    <project>
                    <NavLink exact="true" activeclassname="active" to="/todo">
                        <FontAwesomeIcon icon={faList} color="#ffd700" />
                    </NavLink>
                    </project>
                </h2>
                <li>
                </li>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Projects