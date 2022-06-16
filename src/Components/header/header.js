import React from 'react'
import './header.css';

const Header = (props) => {



  return (
    <div style={{backgroundImage:"url("+'./Images/header.jpg'+")"}} className='container-fluid headerContainer'>
        <div className='headerText row align-items-center h-100'>
            <div className='col-lg-12 text-white info'>
                
                <h1>{props.name}</h1>
                <p>{props.title}</p>
                <a href="mailto:hussein.alaa12199@gmail.com" className='btn btnContact'>
                    Contact Me
                </a>
            </div>
        </div>
    </div>

)
}

export default Header