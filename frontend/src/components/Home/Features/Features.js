import React, { Component } from 'react';
import Feature from "./Feature/Feature";

import compose from "recompose/compose";
import {connect} from "react-redux";
import Loader from "../../Loader/Loader";

const mapStateToProps = (state) => ({...state.metaData});
class Features extends Component{
    render(){
        const { loading, error, metaData } = this.props;
        if (loading || !metaData) {
            return <Loader/>;
        }
        if (error){
            return null;
        }
        const renderListOfFeatures = () => {
            return metaData.featuresMetaData.features.map (feature =>
                <Feature
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />);
        };
        return(
            <section className="features">
                {renderListOfFeatures()}
            </section>
        );
    }
}
export default compose(connect(mapStateToProps))(Features);