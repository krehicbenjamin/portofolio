import React, { Component } from 'react';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="project-container">
                <img className="project-image" src={this.props.image} alt="" />
                <h1 className="project-title">
                    {this.props.title}
                </h1>
                <p className="projet-description">
                    {this.props.description}
                </p>
            </div>
         );
    }
}
 
export default Project;