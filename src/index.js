import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const gifReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_GIF':
            return action.payload;
        default:
            return state;
    }
}

const favReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_FAVORITE':
      return action.payload;
    default:
      return state;
  }
}

function* watcherSaga() {
    yield takeEvery('FETCH_GIFS', fetchGifs);
    yield takeEvery('ADD_FAVORITE', addFavorite);
}

function* addFavorite(action) {
  console.log(action.payload)
  try {
    axios.post('api/favorite', action.payload);
  } catch (error) {
    console.log('error in post', error);
  }
}

function* fetchGifs(action) {
    console.log(action.payload.newSearch);
    try {
      const gifsResponse = yield axios.get(`/api/search?search=${action.payload.newSearch}`);
      yield put({type: 'SET_GIF', payload: gifsResponse.data.data});
    } catch (error) {
      alert(error);
    }
  }

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({gifReducer, favReducer}),
    applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
