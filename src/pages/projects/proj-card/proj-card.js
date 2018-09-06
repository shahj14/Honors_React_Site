import React, {Component} from 'react'
import './proj-card.css'

class ProjCard extends Component{
    render(){

        return(
            <div className="proj-card">
                <img src={this.props.img} alt={this.props.title}/>
                <h4>{this.props.title}</h4>
                <p className="description">{this.props.desc}</p>
                <p className="link-site"><a href={this.props.link}>{this.props.link}</a></p>
                <p ><a href={this.props.github} className="github">Code on Github</a></p>
            </div>
        )
    }
}

export default ProjCard