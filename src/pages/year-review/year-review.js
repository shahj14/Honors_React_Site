import React, {Component} from 'react'
import './year-review.css'

class YearReview extends Component{
    render(){
        return(
            <div className="year-page">
                <div className="year-grid">
                    <div className="first link-box">
                        <h2>2016 - 2017</h2>
                    </div>
                    <div className="right-side">
                        <div className="second link-box">
                            <h2>2017 - 2018</h2>
                        </div>
                        <div className="third link-box">
                            <h2>2018 - 2019</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default YearReview;