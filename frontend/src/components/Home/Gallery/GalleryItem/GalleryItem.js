import React, { Component } from 'react';

import compose from "recompose/compose";
import {connect} from "react-redux";
import ImageLoader from "../../../Loader/ImageLoader";

const mapStateToProps = (state) => ({...state.metaData});
class GalleryItem extends Component{
    render(){
        const { loading, error, metaData } = this.props;
        if (loading || !metaData || error) {
            return null;
        }
        return(
            <figure className={`gallery__item gallery__item--${this.props.id}`}>
                <ImageLoader
                    src={this.props.img}
                    alt={`${this.props.id}`}
                    className="gallery__img"
                />
            </figure>
        );
    }
}
export default compose(connect(mapStateToProps))(GalleryItem);