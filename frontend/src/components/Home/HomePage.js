import React, { Component } from 'react';
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Story from "./Story/Story";
import Homes from "./Homes/Homes";
import Gallery from "./Gallery/Gallery";
class HomePage extends Component{
    render(){
        return(
            <React.Fragment>
                {/*<Hero />*/}
                {/*<Features id="features"/>*/}
                {/*<Story id="story"/>*/}
                {/*<Homes id="homes"/>*/}
                {/*<Gallery id="gallery"/>*/}
                <main>
                    <h1>Galika-landell</h1>
                    <p>Our website is under construction.</p>
                </main>
            </React.Fragment>
        );
    }
}
export default HomePage;