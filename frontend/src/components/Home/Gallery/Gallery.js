import React, { Component } from 'react';
import GalleryItem from "./GalleryItem/GalleryItem";
import compose from "recompose/compose";
import {connect} from "react-redux";
import Loader from "../../Loader/Loader";

const mapStateToProps = (state) => ({...state.galleryItems});
class Gallery extends Component{
    render(){
        const { loading, error, galleryItems } = this.props;
        if (loading || !galleryItems) {
            return <Loader/>;
        }
        if (error){
            return null;
        }
        const renderListOfGalleryItems = () => {
            return galleryItems.map ((galleryItem, index) =>
                <GalleryItem
                      key = {index+1}
                      id={index+1}
                      img={galleryItem.img}
                />);
        };
        return(
            <section className="gallery">
                {renderListOfGalleryItems()}
            </section>
        );
    }
}
export default compose(connect(mapStateToProps))(Gallery);