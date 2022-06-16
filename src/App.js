import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/header/header';
import About from './Components/about/about';
import Skills from './Components/skills/skills';
import { Component } from 'react';
import Portfolio from './Components/portfolio/portfolio';
import Footer from './Components/footer/footer';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      about:[{
        name:'Hussein Alaa',
        description:'" I’m Hussein Alaa, 22 years old Graduated from Faculty of commerce Business information systems (bis) - Helwan universty I’m a front end developer aiming to be a fullstack developer "',
        title:"Web Developer & Designer",
        phone:"01150370370",
        email:"hussein.alaa12199@gmail.com",
        facebook:"https://www.facebook.com/hussein.alaa.1272/",
        linkedin:"https://www.linkedin.com/in/husseinalaa12199/",
        github:"https://github.com/husseinalaa15"
      
      }],
      skills:[
        {
          id:1,
          title:"html",
          percentage:"90%",
          icon:"./Images/html.png"
        },
        {
          id:2,
          title:"css",
          percentage:"90%",
          icon:"./Images/css.png"
        },
        {
          id:3,
          title:"Javascript",
          percentage:"80%",
          icon:"./Images/js.png"
        },
        {
          id:4,
          title:"Bootstrap",
          percentage:"90%",
          icon:"./Images/bs.png"
        },
        {
          id:5,
          title:"Angular",
          percentage:"50%",
          icon:"./Images/ng.png"
        },
        {
          id:6,
          title:"React",
          percentage:"50%",
          icon:"./Images/react.png"
        },
      ],
      skillsFocus : [
        {
          id:1,
          title:"UI/UX Design"
        },
        {
          id:2,
          title:"Responsive Design"
        },
        {
          id:3,
          title:"Web Design"
        },
        {
          id:4,
          title:"Mobile App Design"
        },
        {
          id:5,
          title:"React.js"
        },
        {
          id:6,
          title:"React Native"
        },
        {
          id:7,
          title:"Angular"
        },
        {
          id:8,
          title:"Node.js"
        },
      ],

      portfolio:[
        {
          id:1,
          title:"Chat App",
          link:"https://chatapp-iti.herokuapp.com/",
          images:"./Images/chat.png",
        },
        {
          id:2,
          title:"Our Blog",
          link:"https://husseinalaa15.github.io/ourBlog/",
          images:"./Images/blog.png",
        },
        {
          id:3,
          title:"Movies Data",
          link:"https://husseinalaa15.github.io/HMDB/",
          images:"./Images/hmdb.png",
        },
        {
          id:4,
          title:"Luxestate",
          link:"https://husseinalaa15.github.io/luxestate/",
          images:"./Images/luxestate.png",
        },
        {
          id:5,
          title:"Graduation Project",
          link:"https://husseinalaa15.github.io/Bride-Groom/",
          images:"./Images/bg.png",
        },
        {
          id:6,
          title:"Portfolio",
          link:"#",
          images:"./Images/porftolio.png",
        },
      ]
    }
  }
  render (){
    return (
      <div className="App">
      <Header name={this.state.about[0].name}  title={this.state.about[0].title}/>
      <About name={this.state.about[0].name} description={this.state.about[0].description} />
      <Skills skills={this.state.skills} myFocus={this.state.skillsFocus}/>
      <Portfolio projects={this.state.portfolio} />
      <Footer  name={this.state.about[0].name}  phone={this.state.about[0].phone}  email={this.state.about[0].email}  fb={this.state.about[0].facebook}  gh={this.state.about[0].github}  ln={this.state.about[0].linkedin} />
    </div>
    )
  }

  ;
}

export default App;
