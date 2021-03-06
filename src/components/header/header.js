import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {
<header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
      <li><a className="smoothscroll" href="#about">About</a></li>
      <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
      <li><a className="smoothscroll" href="#contact">Contact</a></li>
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Destanee Glenn.</h1>
      <h3>I'm an Austin, TX based  <a className="smoothscroll" href="#portfolio" > fullstack developer </a>, that maintains 10 corporate websites. Let's <a className="smoothscroll" href="#about">start scrolling </a>
        and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
      <hr />
      <ul className="social">
        <li><a href="https://www.linkedin.com/in/destaneelg/" target="_blank" ><i className="fa fa-linkedin" /></a></li>
        <li><a href="https://github.com/destaneelg" target="_blank" ><i className="fa fa-github" /></a></li>
      </ul>
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
  </p>
</header> 
}
      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}