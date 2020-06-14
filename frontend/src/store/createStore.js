import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { initialState } from '../constants/initialState';

const sagaMiddleware = createSagaMiddleware();

export const initStore = (preloadState = initialState()) => {
  const store = createStore(
      rootReducer,
      preloadState,
      applyMiddleware(sagaMiddleware)
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}
