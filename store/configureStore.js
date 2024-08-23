// store/configureStore.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import postReducer from '../reducers/postReducer';
import commentReducer from '../reducers/commentReducer';
import rootReducer from './reducers'; 
import logger from 'redux-logger';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});



const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
