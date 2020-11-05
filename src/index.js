import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const gifReducer = (state={}, action) => {
    switch(action.type) {
        case 'SET_GIF':
            return action.payload;
        default:
            return state;
    }
}

function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', fetchGifs)
}

function* fetchGifs() {
    try {
      const gifsResponse = yield axios.get('/api/favorite');
      console.log(gifsResponse.data);
      yield put({type: 'SET_GIF', payload: gifsResponse.data});
    } catch (error) {
      alert(error);
    }
  }

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({gifReducer}),
    applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
