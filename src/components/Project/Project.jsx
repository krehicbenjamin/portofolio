import React, { Component } from 'react';
import './project.css';
class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="project-container">
                <h1 className="project-title">
                    {this.props.title}
                </h1>
                
                <img className="project-image" src={this.props.image} alt="" />
                
                <p className="projet-description">
                    {this.props.description}
                </p>
            </div>
         );
    }
}
 
export default Project;