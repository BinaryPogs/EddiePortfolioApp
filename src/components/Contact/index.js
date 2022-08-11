import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_8lss8v4',
                form.current,
                'QhZ59F4lDTysgEbsu'
                )
                .then(
                  () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                  },
                  () => {
                    alert('Failed to send the message, please try again')
                  }
                )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                         strArray={['C','o','n','t','a','c','t',' ', 'm','e']}
                         idx={15}
                         />
                    </h1>
                    <p>
                        I am interested in software engineering job oppourtunities - especially roles that will allow me to leverage my skills in Python , JavaScript/React or Java/Spring Boot
                        If you have any oppourtunities available or just want to chat, feel free to contact me using the form below!
                    </p>
                    <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
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
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
                </div>
                <div className='info-map'>
                    Eddie Zeng,
                    <br/>
                    Australia,
                    <br/>
                    607/3 Foreshore Place, 2127
                    <br/>
                    Wentworth Point 
                    <br/>
                    <span>eddie.zeng95@gmail.com</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[-33.8265383,151.0774984]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.8265383,151.0774984]}>
              <Popup>Eddie Lives here!</Popup>
            </Marker>
          </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact