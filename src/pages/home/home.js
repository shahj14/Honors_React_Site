import React, {Component} from 'react';
import './home.css';

class Home extends Component{

    render(){
        return(
            <div className="home-container">
                <img className="home-background" src={require("../../media/night_sky.jpeg")} alt=""/>
                <div className="home-content">
                    <h1 className="home-title">&lt;Developer/&gt;</h1>
                    <div className="home-button-container">
                        <a href="https://docs.google.com/document/d/1SYjNTrmshMA6aSTStKdPdqv1qxczVzJdLipOhOwn23g/edit?usp=sharing" target="_blank"
                                rel="noopener noreferrer" className="home-button">Resume</a>
                        <button className="home-button">Contact Me</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;