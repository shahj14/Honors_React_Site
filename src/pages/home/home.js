import React, {Component} from 'react';
import './home.css';

class Home extends Component{

    render(){
        return(
            <div className="home-container">
                <img className="home-background" src="night_sky.jpeg" alt=""/>
                <div className="home-content">
                    <h1 className="home-title">&lt;Developer/&gt;</h1>
                    <div>
                        <button className="home-button">Resume</button>
                        <button className="home-button">Contact Me</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;