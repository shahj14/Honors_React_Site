import React, {Component} from 'react';
import './home.css';

class Home extends Component{

    render(){
        return(
            <div className="home-container">
                <div className="home-content">
                    <h1 className="home-title">&lt;Developer/&gt;</h1>
                    <div className="home-button-container">
                        <a href="https://drive.google.com/file/d/1_KnGKM4Okn8AKG4L0jSlEso8nzkRWKAH/view" target="_blank"
                                rel="noopener noreferrer" className="home-button">Resume</a>
                        <a href="mailto:jeetshah4321@gmail.com" className="home-button">Contact Me</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;