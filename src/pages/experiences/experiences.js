import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import GridBox from '../../partials/grid-box'
import './experiences.css';

class Experiences extends Component{

    render(){
        return(
            <div className="exp-page">
                <div className="exp-grid">
                    <Link to="/experiences/europe-trip" className="europe link-box">
                        <GridBox image="italy.jpeg" title="Europe Trip 2k18"/>
                    </Link>
                    <div className="right-side">
                        <Link to="/experiences/leadershape" className="lead-shape link-box">
                            <GridBox image="leadshape.jpg" title="LeaderShape"/>
                        </Link>
                        <Link to="/experiences/personal-site" className="personal-site link-box">
                            <GridBox image="mac.jpeg" title="Personal Site"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences;