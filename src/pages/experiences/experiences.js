import React, {Component} from 'react';
import './experiences.css';

class Experiences extends Component{

    render(){
        return(
            <div className="exp-page">
                <div className="exp-grid">
                    <div className="europe link-box">
                        <h2>Europe Trip 2k18</h2>
                    </div>
                    <div className="right-side">
                        <div className="lead-shape link-box">
                            <h2>Leadershape</h2>
                        </div>
                        <div className="personal-site link-box">
                            <h2>My Personal Site</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences;