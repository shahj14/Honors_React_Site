import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <div className="nav-bar">

                <div className="logo">
                    <a>Jeet Shah</a>
                </div>

                <div className="nav-links">
                    <a href="#">About</a>
                    <a href="#">Year In Review</a>
                    <a href="#">Experiences</a>
                    <a href="#">Portfolio</a>
                </div>

            </div>
        )
    }
}

export default Navbar;