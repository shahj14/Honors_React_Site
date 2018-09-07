import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './year-review.css'

class YearReview extends Component{
    render(){
        return(
            <div className="year-page">
                <div className="year-grid">
                    <Link to="/year-review/2016" className="first link-box">
                        <h2>2016 - 2017</h2>
                    </Link>
                    <div className="right-side">
                        <Link to="/year-review/2017" className="second link-box">
                            <h2>2017 - 2018</h2>
                        </Link>
                        <Link to="/year-review/2018" className="third link-box">
                            <h2>2018 - 2019</h2>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default YearReview;