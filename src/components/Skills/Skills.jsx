import React, { Component } from 'react';
import './skills.css';
class Skills extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="skills-container">
                <p style = {{fontSize: 50}}>
                <i className="fab fa-php"></i>
                <i className="fab fa-java"></i>
                <i className="fab fa-js-square"></i>
                <i className="fab fa-npm"></i>
                <i className="fab fa-swift"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-node"></i>
                <i className="fab fa-mongo"></i>
                </p>





            </div>
         );
    }
}
 
export default Skills;