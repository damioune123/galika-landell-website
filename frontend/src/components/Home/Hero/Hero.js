import React, { Component } from 'react';
import Header from "./Header/Header";
import Realtors from "./Realtors/Realtors";
class Hero extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Realtors />
            </React.Fragment>
        );
    }
}
export default Hero;