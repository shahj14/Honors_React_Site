import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './experiences.css';

class Experiences extends Component{

    render(){
        return(
            <div className="exp-page">
                <div className="exp-grid">
                    <Link to="/experiences/europe-trip" className="europe link-box">
                        <img className="link-box-image" src={require("../../media/italy.jpeg")} alt="Italy"/>
                        <h2 className="link-title">Europe Trip 2k18</h2>
                    </Link>
                    <div className="right-side">
                        <Link to="/experiences/leadershape" className="lead-shape link-box">
                            <img className="link-box-image" src={require("../../media/leadshape.jpg")} alt="Leadershape"/>
                            <h2 className="link-title-top">Leadershape</h2>
                        </Link>
                        <Link to="/experiences/personal-site" className="personal-site link-box">
                            <img className="link-box-image" src={require("../../media/mac.jpeg")} alt="Mac"/>
                            <h2 className="link-title-bottom">My Personal Site</h2>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences;