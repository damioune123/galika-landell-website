import React, { Component } from 'react';
import Realtor from "./Realtor/Realtor";
import Loader from "../../../Loader/Loader";

import compose from "recompose/compose";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({...state.realtors});

class Realtors extends Component{
    render(){
        const { loading, error, realtors } = this.props;
        if (loading || !realtors) {
            return <Loader extraClassName="loader--7"/>;
        }
        if (error){
            return null;
        }
        const renderListOfRealtors = () => {
            realtors.sort((a, b)=>b.sold - a.sold);
            return realtors.map (realtor =>
                <Realtor
                    key={realtor.fullName}
                    fullname={realtor.fullName}
                    img={realtor.img}
                    alt={realtor.alt}
                    sold={realtor.sold}
                />);
        };
        return(
            <div className="realtors">
                <h3 className="heading-3">Top {realtors.length} Realtors</h3>
                {renderListOfRealtors()}
            </div>
        );
    }
}
export default compose(connect(mapStateToProps))(Realtors);