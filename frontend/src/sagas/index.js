import { all} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import realtorSaga from './realtorSaga';
import metaDataSaga from './metaDataSaga';
import galleryItemSaga from './galleryItemSaga';

export default function* rootSaga() {
  yield all([
    homeSaga(),
    realtorSaga(),
    metaDataSaga(),
    galleryItemSaga(),
  ]);
}