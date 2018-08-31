import React, { Component } from 'react';
import resume from './resume.json'
import Experience from './experience'
import './App.css';
import Project from './project'

class App extends Component {

   
    myExperience(){
        var myarray=[]
        resume.experiences.map((item,i)=>{
                myarray.push(<Experience item={item} key={i}/>)
        })
        return myarray
        
    }

    myProjects(){
        var myarray=[]
        resume.projects.map((item,i)=>{
                myarray.push(<Project item={item} key={i}/>)
        })
        return myarray
        
    }
    
  render() {
    return (
      <div>
        <div className="wrapper">
      <div className="sidebar-wrapper">
          <div className="profile-container">
              <img className="profile" src={resume.image} alt="" />
              <h1 className="name">{resume.name}</h1>
              <h3 className="tagline">MERN Stack Developer</h3>
          </div>
          
          <div className="contact-container container-block">
              <ul className="list-unstyled contact-list">
                  <li className="email"><i className="fas fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                  <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
                  <li className="website"><i className="fas fa-globe"></i><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">{resume.website}</a></li>
                  <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="{resume.linkedin}" >{resume.linkedin}</a></li>
                  <li className="github"><i className="fab fa-github"></i><a href="http://www.github.com/vishaldpb" >github.com/vishaldpb</a></li>
                  <li className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/vishaldpb" target="_blank">{resume.twitter}</a></li>
              </ul>
          </div>
          <div className="education-container container-block">
              <h2 className="container-block-title">Education</h2>
              <div className="item">
                  <h4 className="degree">Btech in Information Technology</h4>
                  <h5 className="meta">GGSIPU</h5>
                  <div className="time">2010-2014</div>
              </div>
              <div className="item">
                  <h4 className="degree">XII CBSE</h4>
                  <h5 className="meta">VIS</h5>
                  <div className="time">2009-2010</div>
              </div>
          </div>
          
          <div className="languages-container container-block">
              <h2 className="container-block-title">Languages</h2>
              <ul className="list-unstyled interests-list">
                  <li>English <span className="lang-desc">(Native)</span></li>
                  <li>Hindi <span className="lang-desc">(Professional)</span></li>
                  
              </ul>
          </div>
          
          <div className="interests-container container-block">
              <h2 className="container-block-title">Interests</h2>
              <ul className="list-unstyled interests-list">
                  <li>Reading</li>
                  <li>Gyming</li>
                  <li>Coding</li>
              </ul>
          </div>
          
      </div>
      
      <div className="main-wrapper">
          
          <section className="section summary-section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
              <div className="summary">
                  <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
              </div>
          </section>
          
          <section className="section experiences-section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
              
            {this.myExperience()}
            

             
          </section>
          
          <section className="section projects-section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
              <div className="intro">
                  <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
              </div>
              
              {this.myProjects()}
              
          </section>
          
          <section className="skills-section section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
              <div className="skillset">        
                  <div className="item">
                      <h3 className="level-title">Python &amp; Django</h3>
                      <div className="progress level-bar">
              <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 99}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
          </div>                               
                  </div>
                  
                  <div className="item">
                      <h3 className="level-title">Javascript &amp; jQuery</h3>
                      <div className="progress level-bar">
              <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 298}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
          </div>                              
                  </div>
                  
                  <div className="item">
                      <h3 className="level-title">React JS</h3>
                      <div className="progress level-bar">
              <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 98}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
          </div>                                 
                  </div>
                  
                  <div className="item">
                      <h3 className="level-title">HTML5 &amp; CSS</h3>
                      <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 195}}  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
          </div>                                
                  </div>
                  
                  <div className="item">
                      <h3 className="level-title">NODE JS</h3>
                      <div className="progress level-bar">
              <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 185}}  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
          </div>                                  
                  </div>
                  
                  <div className="item">
                      <h3 className="level-title">Sketch &amp; Photoshop</h3>
                      <div className="progress level-bar">
              <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: 260}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>                                 
                  </div>
                  
              </div>  
          </section>
          
      </div>
  </div>
      
      </div>
    );
  }
}

export default App;
