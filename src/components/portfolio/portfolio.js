import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment> {
              <div className="container"> 
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <a className="navbar-brand" href="#">Destanee Glenn</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="row">
                  <div className="col-6">
                    <div id="project1">
                      <img src="Assets/workingapplication.png" alt="Mars Rover camera select and weather data screenshot. " width={250} height={200} />
                      <h3>Mars Vacation Homes</h3>
                      <div>      
                        <a href="https://github.com/josh-wilson6289/mars-vacation-homes" target="_blank" rel="noopener noreferrer"> Repository</a>
                      </div>
                      <div>      
                        <a href="https://josh-wilson6289.github.io/mars-vacation-homes/" target="_blank" rel="noopener noreferrer">Deployed Application </a>
                      </div>
                    </div>
                    <div id="project2">
                      <img src="Assets/Accessibilityexercise.png" alt="Grey background with 2 stacked images with a mountain silohette in the middle" width={250} height={200} />
                      <h3>Accessibility Exercise</h3>
                      <div>      
                        <a href="https://github.com/destaneelg/homework1.github.io" target="_blank" rel="noopener noreferrer"> Repository</a>
                      </div>
                      <div>      
                        <a href="https://destaneelg.github.io/homework1.github.io/" target="_blank" rel="noopener noreferrer">Deployed Application </a>
                      </div>
                    </div>
                    <div id="project4">
                      <img src="Assets/placeholder.jpg" alt="Grey background with 2 stacked images with a mountain silohette in the middle" width={250} height={200} />
                      <h3>burgerBars </h3>
                      <div>      
                        <a href="https://burgerbars.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Repository</a>
                      </div>
                      <div>      
                        <a href="https://github.com/destaneelg/burgerBars" target="_blank" rel="noopener noreferrer">Deployed Application </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div id="project3">
                      <img src="Assets/passwordgenerator.png" alt="Grey background with 2 stacked images with a mountain silohette in the middle" width={250} height={200} />
                      <h3>Password Generator</h3>
                      <div>      
                        <a href="https://github.com/destaneelg/passwordGenerator" target="_blank" rel="noopener noreferrer"> Repository</a>
                      </div>
                      <div>      
                        <a href="https://destaneelg.github.io/passwordGenerator/" target="_blank" rel="noopener noreferrer">Deployed Application </a>
                      </div>
                    </div>
                    <div id="project5">
                      <img src="Assets/placeholder.jpg" alt="Grey background with 2 stacked images with a mountain silohette in the middle" width={250} height={200} />
                      <h3>Coming Soon!</h3>
                      <div>      
                        <a href target="_blank" rel="noopener noreferrer"> Repository</a>
                      </div>
                      <div>      
                        <a href target="_blank" rel="noopener noreferrer">Deployed Application </a>
                      </div>
                    </div>
                    <div id="project6">
                      <img src="Assets/placeholder.jpg" alt="Grey background with 2 stacked images with a mountain silohette in the middle" width={250} height={200} />
                      <h3>Coming Soon!</h3>
                      <div>      
                        <a href target="_blank" rel="noopener noreferrer"> Repository</a>
                      </div>
                      <div>      
                        <a href target="_blank" rel="noopener noreferrer">Deployed Application </a>
                      </div>
                    </div>
                  </div>
                </div>   
              </div>
          }
      <header id="portfolio">
        ....
      </header>
      </React.Fragment>
    );
  }
}