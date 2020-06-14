import React, { Component } from 'react';

import compose from "recompose/compose";
import {connect} from "react-redux";
import Loader from "../../../Loader/Loader";

const mapStateToProps = (state) => ({...state.metaData});
class Header extends Component{
    render(){
        const { loading, error, metaData } = this.props;
        if (loading || !metaData) {
            return <Loader/>;
        }
        if (error){
            return null;
        }
        const renderListOfSeenOnLogos= () => {
            return metaData.headerMetaData.seenOnLogos.map ((seenOnLogo,index) =>
                <img
                    key={index}
                    src={seenOnLogo.img}
                    alt={seenOnLogo.alt}
                />);
        };
        return(
            <header className="header">
                <img src={metaData.headerMetaData.logoImg} alt={metaData.headerMetaData.logoAlt} className="header__logo"/>
                <h3 className="heading-3">{metaData.headerMetaData.heading3}</h3>
                <h1 className="heading-1">{metaData.headerMetaData.heading1}</h1>
                <button className="btn header__btn">{metaData.headerMetaData.heading1}</button>
                <div className="header__seenon-text">{metaData.headerMetaData.seenOnText}</div>
                <div className="header__seenon-logos">
                    {renderListOfSeenOnLogos()}
                </div>
            </header>
        );
    }
}
export default compose(connect(mapStateToProps))(Header);