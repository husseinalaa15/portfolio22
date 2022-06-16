import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGithub, faLinkedin, faMailchimp} from '@fortawesome/free-brands-svg-icons'
import {faCoffee, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
const Footer = (props) => {
  return (
    <div className='container-fluid footercontainer'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-lg-3 mt-3'>
          <h2>Get In Touch</h2>
          <ul>
            <li   ><FontAwesomeIcon className='me-2' icon={faEnvelope} />{props.email}</li>
            <li  ><FontAwesomeIcon className='me-2' icon={faPhone} />{props.phone}</li>
          </ul>
        </div>
        <div className='col-lg-6 mt-3'>
                <a href="mailto:hussein.alaa12199@gmail.com" className='btn btnContact'>
                    Contact Me
                </a>

        </div>
        <div className='col-lg-3 mt-3 d-flex justify-content-center align-items-center flex-column'>
          <ul className='icons d-flex justify-content-center align-items-center' >
            <li><a href={props.fb} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            <li><a href={props.ln} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href={props.gh} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>

          </ul>
          <h6>Copyright @ 2022</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer