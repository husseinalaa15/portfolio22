import React from 'react'
import './skills.css'


const Skills = (props) => {
    let myskills = props.skills.map((skill)=>{
        return (
            <div className='skillbar' key={skill.id}>
                <div className='skilldesc'>
                    <div className='icontitle'>
                        <img className='me-2' src={skill.icon} />
                        <h5>{skill.title}</h5>
                    </div>
                    <div className='skillpercentage'>

                        <h5>{skill.percentage}</h5>
                    </div>
                </div>
                <div className="progress mb-2">
                    <div className="progress-bar " role="progressbar" style={{width:skill.percentage}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="20"></div>
                </div>
            </div>
        );
    })

    let myFocus = props.myFocus.map((el)=>{
        return (
            <li className='mb-2' key={el.id}> {el.title} </li>
        )
    })
  return (
    <div className='container-fluid  skillContainer'>
        <div className='row p-5 justify-content-center align-items-center'>
            <div className='col-lg-12 mt-5 mb-5 pb-5'>
                <h1>Skills</h1>
            </div>
            <div className='col-lg-6 mt-4'>
                <div className='myfocus'>
                    <h4>My Focus</h4>
                    <ul>
                        {myFocus}
                    </ul>
                </div>
            </div>
            <div className='col-lg-6 mt-4'>
                <div className='langs'>
                   {myskills}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills