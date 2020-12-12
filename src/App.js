import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
  class App extends Component {
    render() {
      return (
       <div className="App">
          <Header resumeData={resumeData}/>
         <About resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
         <ContactUs resumeData={resumeData}/>
         <Footer resumeData={resumeData}/>
       </div>
     );
    }
  }

export default App;