import React from 'react'
import './portfolio.css'

const Portfolio = (props) => {
    let myProject = props.projects.map((project)=>{
        return (
            <div className='col-lg-4 mb-3' key={project.id}>
                    <div className='card portCard' style={{backgroundImage:"url("+project.images+")"}}>
                        <div className='postCardbackground h-100'>

                            <h5>{project.title}</h5>
                            <a href={project.link} className="btn btnVisit mt-2" target="_blank" > Visit </a>
                        </div>
                    </div>
                </div>
        )
    })
  return (
    <div className='container-fluid portContainer'>
        <div className='row  p-5 justify-content-center align-items-center'>
            <div className='col-lg-12 mt-5 mb-5 pb-5'>
                <h1>Portfolio</h1>
            </div>
            <div className='projects row'>
                {myProject}
            </div>
        </div>
    </div>
  )
}

export default Portfolio