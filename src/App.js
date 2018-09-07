import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import Navbar from './partials/Navbar';
import Home from './pages/home/home';
import Experiences from './pages/experiences/experiences'
import YearReview from './pages/year-review/year-review'
import Projects from './pages/projects/projects'
import Leadershape from './articles/leadershape'
import PersonalSite from './articles/personal-site'
import EuropeTrip from './articles/europe-trip'
import FirstYear from './articles/first-year'
import SecondYear from './articles/second-year'
import ThirdYear from './articles/third-year'


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
                    <Route exact path="/experiences/leadershape" component={Leadershape}/>
                    <Route exact path="/experiences/europe-trip" component={EuropeTrip}/>
                    <Route exact path="/experiences/personal-site" component={PersonalSite}/>
                    <Route exact path="/year-review/2016" component={FirstYear}/>
                    <Route exact path="/year-review/2017" component={SecondYear}/>
                    <Route exact path="/year-review/2018" component={ThirdYear}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
