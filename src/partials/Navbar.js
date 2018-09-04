import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <nav>
                <div className="navbar navbar-expand-lg navbar-dark bg-light">

                    <Link to="/" className="navbar-brand">Jeet Shah</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/experiences" className="nav-link">Experiences</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/year-review" className="nav-link">Year-In-Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">Projects</Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>
        )
    }
}

export default Navbar;