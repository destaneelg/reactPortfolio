import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {
<section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="./images/profilepic.jpeg" alt="photo of Destanee Glenn" />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>Hello, my name is Destanee Glenn, a front end developer, currently enrolled in the Coding Bootcamp at the University of Texas Austin. Through my time in the program I will be going from beginner to fullstack developer, completing projects and career services milestones to help guide me. I am currently a third of the way through my course with a graduation date in January of 2021. My goal is to further my career as a webinar coordinator, or wherever my journey takes me. I will be keeping this page updated so you can follow along with me.
      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>Destanee Glenn</span><br />
            <span>Austin, TX 78750<br />
             United States
            </span><br />
            <span>(737)224-1230</span><br />
            <span>destanee.glenn@gmail.com</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="./images/Resume.pdf" target="_blank" download="Resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>
}
      <header id="about">
    
      </header>
      </React.Fragment>
    );
  }
}