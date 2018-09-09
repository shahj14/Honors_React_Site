import React, {Component} from 'react'
import './grid-box.css'

class GridBox extends Component {
    render() {
        let styles = {backgroundImage: "url(static/media/" + this.props.image + ")"}

        return (
            <div className="grid-box" style={styles}>
                <h2 className="grid-title">{this.props.title}</h2>
            </div>
        )
    }
}

export default GridBox;