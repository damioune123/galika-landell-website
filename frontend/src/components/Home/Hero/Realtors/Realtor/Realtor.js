import React, { Component } from 'react';
import compose from "recompose/compose";
import {connect} from "react-redux";
import ImageLoader from "../../../../Loader/ImageLoader";
const mapStateToProps = (state) => ({...state.metaData});
class Realtor extends Component{
    render(){
        const { loading, error, metaData } = this.props;
        if (loading || !metaData || error) {
            return null;
        }
        return(
            <div >
                <ImageLoader
                    src={this.props.img}
                    className="realtors__img"
                />
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">{this.props.fullname}</h4>
                    <p className="realtors__sold">{this.props.sold} {metaData.realtorMetaData.housesSoldText}</p>
                </div>
            </div>
        );
    }
}
export default compose(connect(mapStateToProps))(Realtor);