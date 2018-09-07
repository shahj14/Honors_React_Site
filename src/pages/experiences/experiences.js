import React, {Component} from 'react';
import './experiences.css';
import {Link} from 'react-router-dom'


class Experiences extends Component{

    render(){
        return(
            <div className="exp-page">
                <div className="exp-grid">
                    <Link to="/experiences/europe-trip" className="europe link-box">
                        <h2>Europe Trip 2k18</h2>
                    </Link>
                    <div className="right-side">
                        <Link to="/experiences/leadershape" className="lead-shape link-box">
                            <h2>Leadershape</h2>
                        </Link>
                        <Link to="/experiences/personal-site" className="personal-site link-box">
                            <h2>My Personal Site</h2>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences;