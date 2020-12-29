import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {
 <footer>

 <div class="row">

    <div class="twelve columns">

       <ul class="social-links">
          <li><a href="https://www.linkedin.com/in/destaneelg/"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="https://github.com/destaneelg"><i class="fa fa-github"></i></a></li>
       
       </ul>

       <ul class="copyright">
          <li>&copy; Copyright 2014 CeeVee</li>
          <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
       </ul>

    </div>

    <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>

 </div>

</footer>
}
      <header id="footer">
        ....
      </header>
      </React.Fragment>
    );
  }
}