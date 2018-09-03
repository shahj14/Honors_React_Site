import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import Navbar from './navbar/Navbar';
import Home from './pages/home/home';
import Experiences from './pages/experiences/experiences'
import YearReview from './pages/year-review/year-review'
import Projects from './pages/projects/projects'

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div className="App">
            <Navbar />
              <Route exact path="/" component={Home}/>
              <Route exact path="/experiences" component={Experiences}/>
              <Route exact path="/year-review" component={YearReview}/>
              <Route exact path="/projects" component={Projects}/>
          </div>
        </HashRouter>
    );
  }
}

export default App;
