import React, { Component } from 'react';
class Feature extends Component{
    render(){
        return(
            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref={this.props.icon}></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">{this.props.title}</h4>
                <p className="feature__text">{this.props.description}</p>
            </div>
        );
    }
}
export default Feature;