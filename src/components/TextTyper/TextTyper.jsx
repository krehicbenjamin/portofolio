import React, { Component } from 'react';
import './texttyper.css';

class TextTyper extends Component {
    state = {  }
    render() { 
        return ( 
                <div className="writer-container">
                    <h1 className="typer">{this.props.text}</h1>
                    <p className="subtitle">{this.props.subtitle}</p>
                    <br /><br /><br /><br /><br />
                    <i className="fas fa-angle-double-down"></i>
                </div> 
        );
    }
}
 
export default TextTyper;