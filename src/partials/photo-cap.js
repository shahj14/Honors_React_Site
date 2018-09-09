import React from 'react'
import './photo-cap.css'

const PhotoCap = ({image, caption}) => {
    return(
        <div className="photo-container">
            <img className="photo-cap-image" src={require("../media/" + image)} alt=""/>
            <p className="photo-cap-caption">{caption}</p>
        </div>
    )
}

export default PhotoCap;