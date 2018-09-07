import React, {Component} from 'react'
import './article.css'

class Article extends Component{
    render(){
        return(
            <div className="article-container">
                <h1 className="article-title">{this.props.title}</h1>
                <div className="article-info">
                    <p className="article-author">Author: {this.props.author}</p>
                    <p>Date: {this.props.date}</p>
                </div>
                <hr className="article-hr"/>
                {this.props.children}
            </div>
        )
    }
}

export default Article