import React from 'react'
import './about.css';

const About = (props) => {
  return (
    <div className='container-fluid aboutContainer text-white'>
       <div className='row h-100 justify-content-center align-items-center aboutrow'>
        <div className='col-lg-6 '>
                <div className='aboutData w-100'>
                <h3>About me </h3>
                <p>{props.description}</p>
                <a  download href='./Images/cv.pdf' className='btn btnContact'>Download cv</a>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='aboutImg w-100'>

                <img src='./Images/header.png' />
                </div>
            </div>
       </div>
    </div>
  )
}

export default About