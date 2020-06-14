import React from 'react';
import {connect} from 'react-redux';
import Navbar from "../src/components/Navbar/Navbar";
import HomePage from "../src/components/Home/HomePage";
import Footer from "../src/components/Footer/Footer";
import request from '../src/requests';

import '../src/assets/scss/index.scss';

import {
  getMetaDataAction,
  getHomesAction,
  getGalleryItemsAction,
  getRealtorsAction
} from '../src/actions';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;
    await request.init();
    await Promise.all([
        store.dispatch(getMetaDataAction()),
        store.dispatch(getHomesAction()),
        store.dispatch(getRealtorsAction()),
        store.dispatch(getGalleryItemsAction())
    ]);
  }
    static async getStaticProps(props) {
        const { store } = props.ctx;
        await request.init();
        await Promise.all([
            store.dispatch(getMetaDataAction()),
            store.dispatch(getHomesAction()),
            store.dispatch(getRealtorsAction()),
            store.dispatch(getGalleryItemsAction())
        ]);
    }
  render() {
    return (
        <div className="container">
            <Navbar />
            <HomePage />
            <Footer />
        </div>);
  }
}

const mapStateToProps = (state) => ({...state.metaData});


export default connect(mapStateToProps)(Index);