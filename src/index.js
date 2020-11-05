import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

const gifReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_GIF':
            return [...state, action.payload];
        default:
            return state;
    }
}

function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', fetchGifs)
}

function* fetchGifs() {
    try {
      const gifsResponse = yield Axios.get('/api/favorite');
      console.log(gifsResponse.data);
      yield put({type: 'ADD_GIF', payload: gifsResponse.data});
    } catch (error) {
      alert(error);
    }
  }

const sagaMiddleware = createSagaMiddleware

const storeInstance = createStore(
    combineReducers({gifReducer}),
    applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
