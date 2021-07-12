import React, { Component } from 'react';
import './intro.css';
class Intro extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="intro-container">
                <h1>Intro</h1>
                <img className="intro-image" src={this.props.image} alt="" />
                <p>{this.props.intro}</p>
            </div>
         );
    }
}
 
export default Intro;