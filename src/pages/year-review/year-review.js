import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './year-review.css'

class YearReview extends Component{

    render(){
        return(
            <div className="year-page">
                <div className="year-grid">
                    <Link to="/year-review/2016" className="first link-box">
                        <img className="link-box-image" src={require("../../media/gorge.jpeg")} alt="Gorge"/>
                        <h2 className="link-title">2016 - 2017</h2>
                    </Link>
                    <div className="right-side">
                        <Link to="/year-review/2017" className="second link-box">
                            <img className="link-box-image" src={require("../../media/baldwin_orig.jpg")} alt="Baldwin Hall"/>
                            <h2 className="link-title-top">2017 - 2018</h2>
                        </Link>
                        <Link to="/year-review/2018" className="third link-box">
                            <img className="link-box-image" src={require("../../media/notebook.jpeg")} alt="Notebook"/>
                            <h2 className="link-title-bottom">2018 - 2019</h2>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default YearReview;