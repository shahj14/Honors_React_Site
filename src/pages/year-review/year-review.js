import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './year-review.css'
import GridBox from './../../partials/grid-box'

class YearReview extends Component{

    render(){
        return(
            <div className="year-page">
                <div className="year-grid">
                    <Link to="/year-review/2016" className="first link-box">
                        <GridBox image="gorge.jpeg" title="2016-2017"/>
                    </Link>
                    <div className="right-side">
                        <Link to="/year-review/2017" className="second link-box">
                            <GridBox title="2017-2018" image="baldwin_orig.jpg"/>
                        </Link>
                        <Link to="/year-review/2018" className="third link-box">
                            <GridBox title="2018-2019" image="notebook.jpeg"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default YearReview;