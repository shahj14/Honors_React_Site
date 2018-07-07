import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <div className="body">
                <h1 className="header">Jeet Shah</h1>
                <hr/>
                <div className="nav-links">
                    <a>About</a>
                    <a>Year In Review</a>
                    <a>Experiences</a>
                    <a>Portfolio</a>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Navbar;